import { savedItemType } from "./../_types/savedItemType";
import { create } from "zustand";
import { newsType } from "../_types/newsType";
import { persist } from "zustand/middleware";
type saveItemsType = {
  saveItems: savedItemType[];
  setItems: (item: newsType) => void;
  removeItems: (title: string) => void;
};

// export const useSaveItemsStore = create<saveItemsType>((set) => ({

//   saveItems: JSON.parse(localStorage.getItem("saved-items")??"[]") ||[],
//   setItems: (item) =>
//     set((state) => ({
//       saveItems: [...state.saveItems, item],
//     })),
//   removeItems: (title) =>
//     set((state) => ({
//       saveItems: state.saveItems.filter((news) => news.title != title),
//     })),
// }));
export const useSaveItemsStore = create<saveItemsType>()(
  persist(
    (set, get) => ({
      saveItems: [], // Start with an empty array, Zustand will hydrate it
      setItems: (item) => set({ saveItems: [...get().saveItems, item] }),
      removeItems: (title) =>
        set({
          saveItems: get().saveItems.filter((news) => news.title !== title),
        }),
    }),
    {
      name: "saved-items", 
    }
  ) 
);
