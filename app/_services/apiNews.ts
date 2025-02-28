export async function getNews({ pageParam = 1 }) {
  console.log(process.env.API_URL);

  const res = await fetch(
    `https://newsapi.org/v2/everything?q=sport&page=${pageParam}&pageSize=6&apiKey=02e6d63e8fd04514882071357bb32e6b`
  );

  const data = await res.json();

  return data.articles;
}
