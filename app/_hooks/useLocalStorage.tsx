"use client"
import React, { useEffect, useState } from "react";


function useLocalStorage(key: string,initialState?:any) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    
    return storedValue ? JSON.parse(storedValue) : initialState
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}

export default useLocalStorage;
