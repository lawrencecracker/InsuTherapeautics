/// <reference types="vite/client" />

const API = import.meta.env.VITE_API_BASE_URL;

export async function getMedia() {
  const res = await fetch(`${API}/api/media`);
  if (!res.ok) throw new Error("Failed to fetch media");
  return res.json();
}

export async function getInvestors() {
  const res = await fetch(`${API}/api/investor`);
  if (!res.ok) throw new Error("Failed to fetch investors");
  return res.json();
}
