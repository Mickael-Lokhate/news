export default async function handler(req, res) {
  const { search } = req.query;
  const endpoint = `https://newsdata.io/api/1/news?q=${search.toLowerCase()}&apikey=${
    process.env.SEARCH_API_KEY
  }`;
  const resReq = await fetch(endpoint);
  const data = await resReq.json();
  res.status(200).json(data);
}
