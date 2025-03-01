"use client";
import { Badge } from "@/components/ui/badge";
import { BoxIcon } from "lucide-react";
import { useSaveItemsStore } from "../stores/saveListStore";
import { useModalStore } from "../stores/modalStore";

function SaveItemsCounter() {
  const { saveItems } = useSaveItemsStore();
  const { setOpen, isOpen } = useModalStore();
  const totalSavedItems = saveItems?.length ?? 0;

  const handleCloseModal = () => {
    console.log("hit my buzz");
    console.log(isOpen);
    setOpen();
  };
  return (
    <button onClick={handleCloseModal}>
      <div className="h-[1.2rem] flex">
        <BoxIcon />
        <sup>
          <Badge>{totalSavedItems}</Badge>
        </sup>
      </div>
    </button>
  );
}

export default SaveItemsCounter;
