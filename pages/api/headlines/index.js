export default async function handler(req, res) {
  const endpoint = `https://newsdata.io/api/1/news?country=us&apikey=${process.env.SEARCH_API_KEY}`;
  const resReq = await fetch(endpoint);
  const data = await resReq.json();
  res.status(200).json(data);
}
