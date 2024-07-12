// pages/api/fetch.js

export default async function handler(req, res) {
    const { url } = req.query;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error("Fetch error:", error);
      res.status(500).json({ error: "Failed to fetch data" });
    }
  }
  