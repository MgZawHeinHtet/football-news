export async function getNews({ pageParam = 1 }) {
  console.log(process.env.API_URL);

  const res = await fetch(
    `https://newsapi.org/v2/everything?q=sport&page=${pageParam}&pageSize=6&apiKey=c667debd68834eba85146315bc46167a`
  );

  const data = await res.json();

  return data.articles;
}
