const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error("VITE_API_BASE_URL is not defined");
}

export const api = {
  getMedia: async () => {
    const res = await fetch(`${API_BASE_URL}/api/media`);
    if (!res.ok) throw new Error("Failed to fetch media");
    return res.json();
  },

  getInvestors: async () => {
    const res = await fetch(`${API_BASE_URL}/api/investor`);
    if (!res.ok) throw new Error("Failed to fetch investors");
    return res.json();
  },
};
