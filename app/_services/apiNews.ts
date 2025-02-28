export async function getNews({ pageParam = 1 }) {
  console.log(process.env.API_URL);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}?q=sport&page=${pageParam}&pageSize=6&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const data = await res.json();

  return data.articles;
}
