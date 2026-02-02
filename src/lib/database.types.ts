export type Database = {
  public: {
    Tables: {
      publications: {
        Row: {
          id: string;
          title: string;
          authors: string;
          publication_venue: string;
          publication_date: string;
          type: string;
          url: string | null;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['publications']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['publications']['Insert']>;
      };
      patents: {
        Row: {
          id: string;
          title: string;
          jurisdiction: string;
          status: string;
          patent_number: string | null;
          filing_date: string;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['patents']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['patents']['Insert']>;
      };
      media_items: {
        Row: {
          id: string;
          title: string;
          type: string;
          source: string;
          published_date: string;
          url: string | null;
          description: string | null;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['media_items']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['media_items']['Insert']>;
      };
      company_releases: {
        Row: {
          id: string;
          title: string;
          type: string;
          release_date: string;
          content: string;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['company_releases']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['company_releases']['Insert']>;
      };
    };
  };
};
