import Image from "next/image";
import React from "react";

async function page({ params }: any) {
  const { title } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}?q=${title}&searchIn=title&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const data = await res.json();

  const news = data.articles[0];

  return (
    <div className="max-w-6xl mx-auto space-y-10 mb-10">
      <h4 className="text-6xl font-bold">{news.title}</h4>
      <div>
        <p className="text-xl">
          Published at : <span>{news.publishedAt}</span>
        </p>
      </div>
      <Image
        className="w-full object-cover rounded-2xl"
        width="400"
        height="400"
        alt="news photo"
        src={
          news.urlToImage
        }
      />
      <p className="text-xl">
        {news.description}
      </p>
      <div>
        <p className="text-xl text-right">Author By : {news.author}</p>
      </div>
    </div>
  );
}

export default page;
