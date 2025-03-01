"use client"
import { useInfiniteQuery } from '@tanstack/react-query';
import React from 'react'
import { getNews } from '../_services/apiNews';

function useNewsInfiniteScroll() {
    const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["news"],
      queryFn: getNews,
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = lastPage?.length ? allPages?.length + 1 : undefined;
        return nextPage;
      },
    });

    return {data,isLoading,fetchNextPage,hasNextPage,isFetchingNextPage}
}

export default useNewsInfiniteScroll