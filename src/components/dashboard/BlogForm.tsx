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

type Blog = {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  tags: string[];
  isPublished: boolean;
};

export default function BlogForm({ blog }: { blog: Blog }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(blog);

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
    try {
      const res = await fetch(`${base_url}/post/${formData.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content, thumbnail, tags, isPublished }),
      });

      if (!res.ok) throw new Error("Failed to update blog");
      toast.success("Blog updated successfully");
      setIsEditing(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update blog");
    }
  };

  return (
    <div className="flex justify-center py-10">
      <Card className="w-full max-w-2xl shadow-lg border rounded-2xl p-6">
        <CardHeader className="text-center">
          <h2 className="text-2xl font-bold text-blue-700">
            {isEditing ? "Edit Blog" : "Blog Details"}
          </h2>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Thumbnail */}
            <div className="flex flex-col items-center gap-3">
              <Image
                src={formData.thumbnail}
                alt="Thumbnail"
                width={400}
                height={250}
                className="rounded-lg shadow-md object-cover"
              />
              <div className="w-full">
                <Label htmlFor="thumbnail">Thumbnail URL</Label>
                <Input
                  id="thumbnail"
                  name="thumbnail"
                  value={formData.thumbnail}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
            </div>

            {/* Title */}
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            {/* Content */}
            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                rows={5}
                value={formData.content}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            {/* Tags */}
            <div>
              <Label htmlFor="tags">Tags (comma separated)</Label>
              <Input
                id="tags"
                name="tags"
                value={formData.tags.join(", ")}
                onChange={(e) => handleTagsChange(e.target.value)}
                disabled={!isEditing}
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
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setIsEditing(false);
                      setFormData(blog); // Reset
                    }}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="default">
                    Update
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
