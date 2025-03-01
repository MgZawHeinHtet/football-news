import Image from "next/image";
import React from "react";
import { savedItemType } from "../_types/savedItemType";

function SavedItem({ urlToImage, title, author }: savedItemType) {
  return (
    <div className="flex gap-10 items-center">
      <Image
        className="rounded-2xl object-cover h-full"
        width={100}
        height={200}
        alt="News Image"
        src={urlToImage}
      />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p>
          Author By -
          <span className="font-semibold">{author ?? "Ammonimous"}</span>
        </p>
      </div>
    </div>
  );
}

export default SavedItem;
