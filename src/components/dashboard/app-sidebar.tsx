import { Blocks, Home } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/helpers/authOptions";

// Menu items.
const items = [
  {
    title: "Blogs",
    url: "dashboard/blogs",
    icon: Blocks,
  },
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
];

export async function AppSidebar() {
  const session = await getServerSession(authOptions);
  console.log(session?.user);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-2 bg-red-300 h-24 flex items-center justify-center rounded-md`">
            <SidebarMenuButton asChild>
              <Link href="/dashboard" className="mx-2 h-48">
                {session?.user.name && (
                  <div className="font-bold text-2xl">{session?.user.name}</div>
                )}
                {session?.user.image && (
                  <Image
                    src={session.user.image!}
                    alt="User"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                )}
              </Link>
            </SidebarMenuButton>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
