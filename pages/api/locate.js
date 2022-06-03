export default async function handler(req, res) {
  const endpoint = `https://ipinfo.io/json`;
  const resReq = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await resReq.json();
  res.status(201).json(data);
}
