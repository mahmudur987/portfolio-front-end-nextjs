// src/pages/BlogDetails.tsx

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { base_url } from "@/axios/Axios";

export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const res = await fetch(`${base_url}/post/${slug}`);
  const { data: post } = await res.json();
  console.log(post);
  if (!post) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Blog not found</h2>
        <Link href="/blogs" className="text-blue-600 hover:underline">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="relative h-72 w-full mb-6 rounded-xl overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center gap-3 mb-6">
          <Image
            width={40}
            height={40}
            src={post.author.picture}
            alt={post.author.name}
            className="rounded-full"
          />
          <div>
            <p className="font-medium">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">
              Published on {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex gap-2 mb-6">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <p className="leading-relaxed text-lg text-foreground/80 whitespace-pre-wrap">
          {post.content}
        </p>
      </div>
    </main>
  );
}
