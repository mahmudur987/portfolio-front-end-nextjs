"use server";

import { base_url } from "@/axios/Axios";
import { authOptions } from "@/helpers/authOptions";
import { getServerSession } from "next-auth/next";

export const logIn = async (data: { email: string; password: string }) => {
  const res = await fetch(`${base_url}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const signUp = async (data: {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: string;
}) => {
  console.log(data);
  const res = await fetch(`${`${base_url}/user`}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getProfile = async () => {
  const session = await getServerSession(authOptions);
  const res = await fetch(`${base_url}/user/${session?.user?.id}`, {
    cache: "no-cache",
  });
  return res.json();
};
