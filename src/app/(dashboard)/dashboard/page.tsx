import { base_url } from "@/axios/Axios";
import ProfileForm from "@/components/dashboard/ProfileForm";
import { authOptions } from "@/helpers/authOptions";
import { getServerSession } from "next-auth/next";

const page = async () => {
  const session = await getServerSession(authOptions);
  const res = await fetch(`${base_url}/user/${session?.user?.id}`, {
    next: { tags: ["user"] },
  });
  const { data } = await res.json();

  return <ProfileForm user={data} />;
};

export default page;
