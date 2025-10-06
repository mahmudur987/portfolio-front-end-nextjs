"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";

import { toast } from "sonner";
import { base_url } from "@/axios/Axios";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { FaBackward } from "react-icons/fa";

type Blog = {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  tags: string[];
  isPublished: boolean;
};

function BlogForm() {
  const { data } = useSession();
  console.log(data?.user?.id);
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    thumbnail: "",
    tags: [""],
    isPublished: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTagsChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: value.split(",").map((tag) => tag.trim()),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Blog Data:", formData);
    const { title, content, thumbnail, tags, isPublished } = formData;
    if (!title || !content || !thumbnail || !tags) {
      toast.error("All fields are required");
      return;
    }

    try {
      const res = await fetch(`${base_url}/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          content,
          thumbnail,
          tags,
          isPublished,
          authorId: data?.user?.id,
        }),
      });

      if (!res.ok) throw new Error("Failed to update blog");
      toast.success("Blog add successfully");
      setIsEditing(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to add blog");
    }
  };

  return (
    <div className="flex justify-center py-10">
      <Card className="w-full max-w-2xl shadow-lg border rounded-2xl p-6">
        <CardHeader className="text-center">
          <h2 className="text-2xl font-bold text-blue-700">Add New Blog</h2>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Thumbnail */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-full  space-y-3">
                <Label htmlFor="thumbnail">Thumbnail URL</Label>
                <Input
                  id="thumbnail"
                  name="thumbnail"
                  value={formData.thumbnail}
                  onChange={handleChange}
                  disabled={!isEditing}
                  required
                />
              </div>
            </div>

            {/* Title */}
            <div className="w-full  space-y-3">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                disabled={!isEditing}
                required
              />
            </div>

            {/* Content */}
            <div className="w-full  space-y-3">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                rows={5}
                value={formData.content}
                onChange={handleChange}
                disabled={!isEditing}
                required
              />
            </div>

            {/* Tags */}
            <div className="w-full  space-y-3">
              <Label htmlFor="tags">Tags (comma separated)</Label>
              <Input
                id="tags"
                name="tags"
                value={formData.tags.join(", ")}
                onChange={(e) => handleTagsChange(e.target.value)}
                disabled={!isEditing}
                required
              />
            </div>

            {/* Published Switch */}
            <div className="flex items-center justify-between">
              <Label>Published</Label>
              <Switch
                checked={formData.isPublished}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, isPublished: checked }))
                }
                disabled={!isEditing}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              {!isEditing ? (
                <Button type="button" onClick={() => setIsEditing(true)}>
                  Edit
                </Button>
              ) : (
                <>
                  <Button type="button" variant="outline">
                    <Link href="/dashboard/blogs">Cancel </Link>
                  </Button>
                  <Button type="submit" variant="default">
                    Save
                  </Button>
                </>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

const CreateBlog = () => {
  return (
    <>
      <div className="">
        <Link
          href="/dashboard/blogs"
          className="text-blue-600 hover:underline flex gap-2 items-center"
        >
          <FaBackward /> Go Back
        </Link>
      </div>
      <BlogForm />
    </>
  );
};

export default CreateBlog;
