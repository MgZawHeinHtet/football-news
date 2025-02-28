"use client";
import React, { useEffect } from "react";
import NewsCard from "./NewsCard";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getNews } from "../_services/apiNews";
import { newsType } from "../_types/newsType";
import NewsCardSkeletons from "./NewsCardSkeletons";
import { useInView } from "react-intersection-observer";
import LoadingSpinner from "./LoadingSpinner";

function NewsList() {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["news"],
      queryFn: getNews,
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = lastPage.length ? allPages.length + 1 : undefined;
        return nextPage;
      },
    });

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

  console.log("I an ", data);
  return (
    <>
      <main className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 mx-auto p-4">
        {data?.pages?.map((news: any) =>
          news.map((article: newsType, index: number) => (
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
