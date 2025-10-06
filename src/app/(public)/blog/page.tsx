// src/pages/BlogList.tsx
import { base_url } from "@/axios/Axios";
import BlogCard from "@/components/blog/blogCard";

import { IBlog, IResponse } from "@/types";

async function BlogList() {
  const res = await fetch(`${base_url}/post?limit=50`, {
    next: { tags: ["post"] },
  });
  const data: IResponse<IBlog[]> = await res.json();
  const blogs = data?.data;

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
        Latest Blogs
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} post={blog} />
        ))}
      </div>
    </section>
  );
}

const Blog = () => {
  return (
    <div>
      <BlogList />
    </div>
  );
};

export default Blog;
