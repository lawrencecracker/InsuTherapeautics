/*
  # Create CMS Tables for Insu Therapeutics Website
  
  1. New Tables
    - `publications`
      - `id` (uuid, primary key)
      - `title` (text)
      - `authors` (text)
      - `publication_venue` (text) - journal or conference name
      - `publication_date` (date)
      - `type` (text) - 'paper' or 'abstract'
      - `url` (text, optional)
      - `created_at` (timestamp)
      
    - `patents`
      - `id` (uuid, primary key)
      - `title` (text)
      - `jurisdiction` (text) - e.g., 'US', 'CA', 'EP'
      - `status` (text) - 'Pending' or 'Granted'
      - `patent_number` (text, optional)
      - `filing_date` (date)
      - `created_at` (timestamp)
      
    - `media_items`
      - `id` (uuid, primary key)
      - `title` (text)
      - `type` (text) - 'interview', 'panel', 'feature'
      - `source` (text) - publication or organization
      - `published_date` (date)
      - `url` (text, optional)
      - `description` (text, optional)
      - `created_at` (timestamp)
      
    - `company_releases`
      - `id` (uuid, primary key)
      - `title` (text)
      - `type` (text) - 'partnership', 'funding', 'milestone'
      - `release_date` (date)
      - `content` (text)
      - `created_at` (timestamp)
      
  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (since this is a public-facing website)
    - Future admin access can be added with authenticated policies
*/

-- Publications table
CREATE TABLE IF NOT EXISTS publications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  authors text NOT NULL,
  publication_venue text NOT NULL,
  publication_date date NOT NULL,
  type text NOT NULL DEFAULT 'paper',
  url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE publications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view publications"
  ON publications
  FOR SELECT
  TO anon, authenticated
  USING (true::boolean);

CREATE POLICY "Authenticated users can manage publications"
  ON publications
  FOR ALL
  TO authenticated
  USING (true::boolean)
  WITH CHECK (true::boolean);

-- Patents table
CREATE TABLE IF NOT EXISTS patents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  jurisdiction text NOT NULL,
  status text NOT NULL DEFAULT 'Pending',
  patent_number text,
  filing_date date NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE patents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view patents"
  ON patents
  FOR SELECT
  TO anon, authenticated
  USING (true::boolean);

CREATE POLICY "Authenticated users can manage patents"
  ON patents
  FOR ALL
  TO authenticated
  USING (true::boolean)
  WITH CHECK (true::boolean);

-- Media items table
CREATE TABLE IF NOT EXISTS media_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  type text NOT NULL,
  source text NOT NULL,
  published_date date NOT NULL,
  url text,
  description text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE media_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view media items"
  ON media_items
  FOR SELECT
  TO anon, authenticated
  USING (true::boolean);

CREATE POLICY "Authenticated users can manage media items"
  ON media_items
  FOR ALL
  TO authenticated
  USING (true::boolean)
  WITH CHECK (true::boolean);

-- Company releases table
CREATE TABLE IF NOT EXISTS company_releases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  type text NOT NULL,
  release_date date NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE company_releases ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view company releases"
  ON company_releases
  FOR SELECT
  TO anon, authenticated
  USING (true::boolean);

CREATE POLICY "Authenticated users can manage company releases"
  ON company_releases
  FOR ALL
  TO authenticated
  USING (true::boolean)
  WITH CHECK (true::boolean);

-- Create indexes for better query performance
CREATE INDEX idx_publications_date ON publications(publication_date DESC);
CREATE INDEX idx_patents_filing_date ON patents(filing_date DESC);
CREATE INDEX idx_media_published_date ON media_items(published_date DESC);
CREATE INDEX idx_releases_date ON company_releases(release_date DESC);
