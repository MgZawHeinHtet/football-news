export async function getNews({ pageParam = 1 }) {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=sport&page=${pageParam}&pageSize=6&apiKey=c667debd68834eba85146315bc46167a`
  );

  const data = await res.json();

  return data.articles;
}
