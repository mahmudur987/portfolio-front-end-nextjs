// src/pages/BlogList.tsx
import { Card, CardContent } from "@/components/ui/card";
import blogs from "@/constant/blogData";
import { Link } from "react-router";
function BlogList() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
        Latest Blogs
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Card key={blog.id} className="overflow-hidden shadow-lg rounded-2xl">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4 flex flex-col gap-2">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-sm text-gray-600">{blog.excerpt}</p>
              <p className="text-xs text-gray-500">
                By {blog.author} · {blog.readingTime}
              </p>
              <Link
                to={`/blog/${blog.slug}`}
                className="mt-3 text-blue-600 hover:underline text-sm"
              >
                Read More →
              </Link>
            </CardContent>
          </Card>
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
