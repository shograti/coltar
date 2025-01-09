const API_URL = process.env.PAYLOAD_API_URL; 

export const fetchAPI = async (endpoint: string) => {
  const response = await fetch(`${API_URL}/api${endpoint}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  return response.json(); 
};
