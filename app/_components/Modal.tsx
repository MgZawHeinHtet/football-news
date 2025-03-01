"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DialogHeader } from "@/components/ui/dialog";
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useModalStore } from "../stores/modalStore";
import { useSaveItemsStore } from "../stores/saveListStore";
import SavedItem from "./SavedItem";

function Modal() {
  const { isOpen, setClose } = useModalStore();
  const { saveItems } = useSaveItemsStore();

  const [mounted, setMounted] = useState(false);

  const handleInsideClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the click from bubbling up to the background div
  };

  useEffect(() => {
    setMounted(true); // Set state to true after the component mounts on the client
  }, []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className="fixed top-0 w-full h-screen bg-black/40 z-30"
      onClick={setClose}
    >
      <Card
        className="shadow-2xl max-w-xl mx-auto mt-5"
        onClick={handleInsideClick}
      >
        <CardHeader>
          <h4 className="text-lg font-bold">Saved News</h4>
        </CardHeader>
        <hr />
        <CardContent className="space-y-5 h-[400px] overflow-y-scroll">
          {saveItems?.length ? (
            saveItems.map((news, i) => (
              <SavedItem
                key={i}
                author={news?.author}
                urlToImage={news?.urlToImage}
                title={news?.title}
              />
            ))
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <h4>There have no saved items❌</h4>
            </div>
          )}
        </CardContent>
        <hr />
        <CardFooter className="flex justify-between">
          <div className="text-xl">Total - {saveItems?.length ?? 0}</div>
          <Button onClick={setClose}>Close</Button>
        </CardFooter>
      </Card>
    </div>,
    document.body // Portal renders the modal in `body`
  );
}

export default Modal;
