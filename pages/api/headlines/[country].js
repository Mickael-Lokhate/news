export default async function handler(req, res) {
  const { country } = req.query;
  const endpoint = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.SEARCH_API_KEY}`;
  const resReq = await fetch(endpoint);
  const data = await resReq.json();
  res.status(200).json(data);
}
