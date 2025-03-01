import { create } from "zustand";

type modalType = {
  isOpen: boolean;
  setClose: () => void;
  setOpen: () => void;
};

export const useModalStore = create<modalType>((set) => ({
  isOpen: false,
  setClose: () =>
    set({
      isOpen: false,
    }),
  setOpen: () =>
    set({
      isOpen: true,
    }),
}));
