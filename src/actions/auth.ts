"use server";

export const logIn = async (data: { email: string; password: string }) => {
  const res = await fetch(
    "https://portfolio-server-prisma-postgress.vercel.app/api/v1/user/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
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
  const res = await fetch(
    "https://portfolio-server-prisma-postgress.vercel.app/api/v1/user",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return res.json();
};
