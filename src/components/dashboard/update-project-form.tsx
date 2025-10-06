"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { project } from "@/types";
import { base_url } from "@/axios/Axios";
import { toast } from "sonner";
export default function ProjectForm({ project }: { project: project }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(project);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value.split(",").map((item) => item.trim()),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Project Data:", formData);

    try {
      const res = await fetch(`${base_url}/project/${formData.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      console.log(result);
      if (!res.ok) throw new Error("Failed to update project");
      toast.success("Project updated successfully");
      setIsEditing(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update project");
    }
  };

  return (
    <div className="flex justify-center py-10">
      <Card className="w-full max-w-3xl shadow-lg border rounded-2xl p-6">
        <CardHeader className="text-center">
          <h2 className="text-2xl font-bold text-blue-700">
            {isEditing ? "Edit Project" : "Project Details"}
          </h2>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Image Preview */}
            <div className="flex flex-col items-center gap-3">
              <Image
                src={formData.picture}
                alt="Project"
                width={500}
                height={300}
                className="rounded-lg shadow-md object-cover"
              />
              <div className="w-full space-y-3">
                <Label htmlFor="picture">Project Image URL</Label>
                <Input
                  id="picture"
                  name="picture"
                  value={formData.picture}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
            </div>

            {/* Project Name */}
            <div className="w-full space-y-3">
              <Label htmlFor="projectName">Project Name</Label>
              <Input
                id="projectName"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            {/* Title */}
            <div className="w-full space-y-3">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            {/* Description */}
            <div className="w-full space-y-3">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            {/* Project Type */}
            <div className="w-full flex items-center gap-5">
              <Label htmlFor="projectType">Project Type</Label>

              <select
                className="w-1/2 border border-gray-300 rounded-md p-2"
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={(e) =>
                  handleChange({
                    target: { name: "projectType", value: e.target.value },
                  } as React.ChangeEvent<HTMLInputElement>)
                }
              >
                <option value="Personal"> Personal</option>
                <option value="Client"> Client</option>
              </select>
            </div>

            {/* Features */}
            <div className="w-full space-y-3">
              <Label htmlFor="features">Features (comma separated)</Label>
              <textarea
                className="w-full border border-gray-300 rounded-md p-2"
                rows={5}
                cols={50}
                id="features"
                name="features"
                value={formData.features.join(", ")}
                onChange={(e) => handleArrayChange("features", e.target.value)}
                disabled={!isEditing}
              />
            </div>

            {/* Technologies */}
            <div className="w-full space-y-3">
              <Label htmlFor="technologies">
                Technologies (comma separated)
              </Label>
              <textarea
                className="w-full border border-gray-300 rounded-md p-2"
                id="technologies"
                name="technologies"
                value={formData.technologies.join(", ")}
                onChange={(e) =>
                  handleArrayChange("technologies", e.target.value)
                }
                disabled={!isEditing}
              />
            </div>

            {/* Dates */}
            <div className="flex gap-5">
              <div className="flex-1 space-y-3">
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  id="startDate"
                  type="date"
                  name="startDate"
                  value={formData.startDate.split("T")[0]}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="flex-1   space-y-3">
                <Label htmlFor="endDate">End Date</Label>
                <Input
                  id="endDate"
                  type="date"
                  name="endDate"
                  value={formData.endDate.split("T")[0]}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
            </div>

            {/* Links */}
            <div className="w-full space-y-3">
              <Label htmlFor="liveSite">Live Site URL</Label>
              <Input
                id="liveSite"
                name="liveSite"
                value={formData.liveSite}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1 space-y-3">
                <Label htmlFor="git_frontend">Frontend Repo</Label>
                <Input
                  id="git_frontend"
                  name="git_frontend"
                  value={formData.git_frontend ?? ""}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="flex-1 space-y-3">
                <Label htmlFor="git_server">Server Repo</Label>
                <Input
                  id="git_server"
                  name="git_server"
                  value={formData.git_server ?? ""}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
            </div>

            {/* Buttons */}
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
                      setFormData(project); // Reset changes
                    }}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Update</Button>
                </>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
