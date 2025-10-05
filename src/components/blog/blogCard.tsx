import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type Post = {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  tags: string[];
  author: {
    name: string;
    picture: string;
  };
};

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] duration-200">
      <div className="relative h-56 w-full">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader className="p-4">
        <h2 className="text-xl font-bold line-clamp-1">{post.title}</h2>
      </CardHeader>
      <CardContent className="px-4 pb-2">
        <p className="text-muted-foreground line-clamp-2 text-sm">
          {post.content}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center px-4 py-3 border-t">
        <div className="flex items-center gap-2">
          <Image
            src={post.author.picture}
            alt={post.author.name}
            width={28}
            height={28}
            className="rounded-full"
          />
          <span className="text-sm">{post.author.name}</span>
        </div>
        <Link
          href={`/blog/${post.id}`}
          className="text-sm text-primary hover:underline font-medium"
        >
          Read More →
        </Link>
      </CardFooter>
    </Card>
  );
}
