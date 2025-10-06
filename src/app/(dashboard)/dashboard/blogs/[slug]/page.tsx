// src/pages/BlogDetails.tsx
import Link from "next/link";
import { base_url } from "@/axios/Axios";
import BlogForm from "@/components/dashboard/BlogForm";

import { FaBackward } from "react-icons/fa";

export default async function UpdateBlog({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const res = await fetch(`${base_url}/post/${slug}`);
  const { data: post } = await res.json();

  return (
    <>
      {" "}
      <div className="">
        <Link
          href="/dashboard/blogs"
          className="text-blue-600 hover:underline flex gap-2 items-center"
        >
          <FaBackward /> Go Back
        </Link>
      </div>
      <BlogForm blog={post} />;
    </>
  );
}
