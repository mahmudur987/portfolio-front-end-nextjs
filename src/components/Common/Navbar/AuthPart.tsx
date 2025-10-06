"use client";

import AuthModals from "@/components/modal/authModal";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { signOut, useSession } from "next-auth/react";
import { renderMenuItem } from "./Navbar";

const AuthPart = () => {
  const { data: session, status } = useSession();

  return (
    <>
      {status === "unauthenticated" && <AuthModals />}

      {session && (
        <NavigationMenu>
          <NavigationMenuList>
            {renderMenuItem({ title: "Dashboard", url: "/dashboard" })}
          </NavigationMenuList>
        </NavigationMenu>
      )}
      {session && (
        <div className="flex items-center gap-2">
          <Button
            variant={"outline"}
            className="text-red-500 ny-2 max-2"
            onClick={() =>
              signOut({
                redirect: false,
              })
            }
          >
            LogOut
          </Button>
        </div>
      )}
    </>
  );
};

export default AuthPart;
