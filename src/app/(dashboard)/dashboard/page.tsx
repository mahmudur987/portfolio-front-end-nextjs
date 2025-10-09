import { getProfile } from "@/actions/auth";
import ProfileForm from "@/components/dashboard/ProfileForm";

const page = async () => {
  const { data } = await getProfile();

  return <ProfileForm user={data} />;
};

export default page;
