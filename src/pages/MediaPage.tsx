// src/pages/MediaPage.tsx
import React, { useState, useEffect } from 'react';

interface MediaItem {
  _id: string;
  title: string;
  type: string;
  source: string;
  published_date: string;
  url?: string;
  description?: string;
  created_at: string;
}

function MediaPage() {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch('https://insutherapeautics.onrender.com/api/media');
        if (!response.ok) {
          throw new Error('Failed to fetch media');
        }
        const data = await response.json();
        setMedia(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  const renderMediaSection = (title: string, type: string) => {
    const filteredMedia = media.filter(item => item.type === type);
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">{title}</h2>
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">Error: {error}</p>
          ) : filteredMedia.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMedia.map((item) => (
                <div key={item._id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer" onClick={() => item.url && window.open(item.url, '_blank')}>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-2">{item.source}</p>
                  <p className="text-sm text-gray-500 mb-2">{new Date(item.published_date).toLocaleDateString()}</p>
                  <p className="text-sm text-gray-400 mb-2">Created: {new Date(item.created_at).toLocaleDateString()}</p>
                  {item.description && <p className="text-gray-700 mb-2">{item.description}</p>}
                  {item.url && (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                      Read more
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No {title.toLowerCase()} available.</p>
          )}
        </div>
      </section>
    );
  };

  return (
    <div className="space-y-20">
      {/* Media Hub Intro */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-extrabold text-purple-800 mb-6 leading-tight">
            Media, Publications & Updates
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest news, research, and developments.
          </p>
        </div>
      </section>

      {renderMediaSection('Publications', 'publication')}
      {renderMediaSection('Patents', 'patent')}
      {renderMediaSection('Media & Interviews', 'media')}
      {renderMediaSection('Company Releases', 'company_release')}
    </div>
  );
}

export default MediaPage;
