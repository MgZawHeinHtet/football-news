import { create } from "zustand";
import { newsType } from "../_types/newsType";

type saveItemsType = {
  saveItems: newsType[];
  setItems: (item: newsType) => void;
  removeItems: (title: string) => void;
};

export const useSaveItemsStore = create<saveItemsType>((set) => ({
  saveItems: [],
  setItems: (item) =>
    set((state) => ({
      saveItems: [...state.saveItems, item],
    })),
  removeItems: (title) =>
    set((state) => ({
      saveItems: state.saveItems.filter((news) => news.title != title),
    })),
}));
