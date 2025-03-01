"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { getNews } from "../_services/apiNews";
import { newsType } from "../_types/newsType";
import LoadingSpinner from "./LoadingSpinner";
import NewsCard from "./NewsCard";
import NewsCardSkeletons from "./NewsCardSkeletons";
import useNewsInfiniteScroll from "../_hooks/useNewsInfiniteScroll";

function NewsList() {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useNewsInfiniteScroll();

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1,
  });

  useEffect(
    function () {
      if (inView && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, inView]
  );

  if (isLoading) return <NewsCardSkeletons />;

  return (
    <>
      <main className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 mx-auto p-4">
        {data?.pages?.map((news: any) =>
          news?.map((article: newsType, index: number) => (
            <NewsCard
              urlToImage={article.urlToImage}
              source={article.source}
              publishedAt={article.publishedAt}
              author={article.author}
              title={article.title}
              key={index}
            />
          ))
        )}
      </main>
      {isFetchingNextPage && <LoadingSpinner />}
      <div ref={ref} className="w-full h-6"></div>
    </>
  );
}

export default NewsList;
