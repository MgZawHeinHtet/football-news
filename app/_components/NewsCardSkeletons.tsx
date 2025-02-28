import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function NewsCardSkeletons() {
  return (
    <main className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 mx-auto p-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i} className="border border-primary relative">
          <CardHeader>
            <Skeleton className="text-2xl w-full h-4 line-clamp-2"></Skeleton>
            <div className="flex gap-3 items-center opacity-70">
              <Skeleton className="w-4" />
              <span></span>
            </div>

            <div className="flex gap-3">
              <Skeleton className="w-[20%] h-4"></Skeleton>
              <Skeleton className="w-[80%] h-4"> </Skeleton>
            </div>
          </CardHeader>
          <CardContent>
            <Skeleton className="rounded w-full h-[200px] object-cover" />
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <Skeleton className="text-normal w-[60%] h-6"></Skeleton>
            <Skeleton className="h-10 w-[100px]"></Skeleton>
          </CardFooter>
        </Card>
      ))}
    </main>
  );
}

export default NewsCardSkeletons;
