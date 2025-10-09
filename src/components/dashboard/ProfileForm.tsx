"use client";
import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "react-hot-toast";
import { base_url } from "@/axios/Axios";
type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  profilePicture: string;
  password?: string;
  role?: string;
  status?: string;
  isVerified?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
const ProfileForm = ({ user }: { user: User }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    profilePicture: user.profilePicture || "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${base_url}/user/${user.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Update failed");
      toast.success("Profile updated successfully");
      setIsEditing(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    }
  };

  return (
    <div className="flex flex-col items-center py-10 max-w-3xl w-full mx-auto">
      <Card className="w-full max-w-2xl shadow-xl border rounded-2xl">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-semibold">Profile</CardTitle>
            <Button
              variant={isEditing ? "secondary" : "default"}
              onClick={handleEditToggle}
            >
              {isEditing ? "Cancel" : "Edit"}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Picture */}
            <div className="flex flex-col items-center gap-3">
              <Image
                src={formData.profilePicture || "/placeholder-avatar.png"}
                alt="Profile Picture"
                width={120}
                height={120}
                className="rounded-full object-cover border shadow"
              />
              <div className="w-full">
                <Label htmlFor="picture">Profile Picture URL</Label>
                <Input
                  disabled={!isEditing}
                  type="text"
                  id="picture"
                  name="picture"
                  value={formData.profilePicture}
                  onChange={handleChange}
                  placeholder="Enter image URL"
                />
              </div>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                disabled={!isEditing}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                disabled={!isEditing}
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                disabled={!isEditing}
                id="phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                disabled={!isEditing}
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter new password"
              />
            </div>

            {/* Submit Button */}
            {isEditing && (
              <div className="flex justify-end pt-4">
                <Button type="submit">Save Changes</Button>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileForm;
