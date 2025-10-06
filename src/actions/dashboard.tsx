"use server";
import { base_url } from "@/axios/Axios";
import { revalidateTag } from "next/cache";

export const handleDeleteProject = async (_id: string) => {
  const res = await fetch(`${base_url}/project/${_id}`, {
    method: "DELETE",
  });
  const result = await res.json();
  revalidateTag("projects");
  return result;
};
