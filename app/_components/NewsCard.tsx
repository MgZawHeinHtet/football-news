"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bookmark, Clock } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { newsType } from "../_types/newsType";
import { useSaveItemsStore } from "../stores/saveListStore";
import useLocalStorage from "../_hooks/useLocalStorage";
import { useEffect } from "react";

function NewsCard({
  source,
  title,
  author,
  urlToImage,
  publishedAt,
}: newsType) {
  const router = useRouter();

  const { saveItems, setItems, removeItems } = useSaveItemsStore();

  const isAlreadySaved = saveItems.some((news) => news.title === title);

  const [storedItem, setStoredItem] = useLocalStorage("saved-items");

  useEffect(() => {
    setStoredItem(saveItems);
  }, [saveItems, setStoredItem]);

  const toogleSave = () => {
    const news = {
      source,
      title,
      author,
      urlToImage,
      publishedAt,
    };

    if (isAlreadySaved) {
      removeItems(title);
    } else {
      setItems(news);
      setStoredItem([...storedItem, news]);
    }
  };
  return (
    <Card className="border border-primary relative">
      <Button
        onClick={toogleSave}
        variant={isAlreadySaved ? "default" : "outline"}
        size="icon"
        className="absolute rounded-full border-primary top-2 right-5"
      >
        <Bookmark />
      </Button>
      <CardHeader>
        <CardTitle className="text-2xl line-clamp-2">{title}</CardTitle>
        <div className="flex gap-3 items-center opacity-70">
          <Clock className="w-4" />
          <span>{publishedAt}</span>
        </div>

        <div>
          <span>Written By :</span>
          <span className="font-semibold"> {author ?? "Annonyus"}</span>
        </div>
      </CardHeader>
      <CardContent>
        <Image
          width={400}
          height={10}
          alt="Football Photo"
          src={urlToImage ?? "/globe.svg"}
          className="rounded w-full h-[200px] object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
        />
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="text-normal">🔗Source - ${source.name}</div>
        <Button onClick={() => router.push(`/news/${title}`)}>
          See More...
        </Button>
      </CardFooter>
    </Card>
  );
}

export default NewsCard;
