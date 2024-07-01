"use client";

import { logoutAction } from "@/app/(auth)/authenticate/actions/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GetUserResponse } from "@/lib/db/queries/auth";
import { errorToast } from "@/lib/utils";
import { PersonIcon, UploadIcon } from "@radix-ui/react-icons";
import { LogOutIcon } from "lucide-react";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import NumberTicker from "../ui/number-ticker";
import { MobileNav } from "./mobile-nav";
import Topnav from "./top-nav";

type SiteHeaderProps = {
  withCounter: boolean;
  withAvatar: boolean;
  user: GetUserResponse;
};

export default function SiteHeader(props: SiteHeaderProps): React.JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogoutAction = async () => {
    setLoading(true);
    const response = await logoutAction();
    setLoading(false);

    if (response.error) {
      errorToast(response.error ? response.error : "Failed to logout, please try again later");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center h-14 max-w-screen-2xl">
        <Topnav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center space-x-2">
            <div className="flex md:items-center space-x-2">
              {props.withCounter ? (
                <>
                  <Button variant="outline" disabled>
                    <PersonIcon className="mr-2" />
                    <NumberTicker value={1978} />
                    <span className="ml-2 text-gray-400 hidden md:flex">Active Users</span>
                  </Button>
                  <Button variant="outline" disabled>
                    <UploadIcon className="mr-2" />
                    <NumberTicker value={3271} />
                    <span className="ml-2 text-gray-400 hidden md:flex">Files Hosted</span>
                  </Button>
                </>
              ) : null}
              {props.withAvatar ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer">
                      {props.user?.picture && <AvatarImage src={props.user?.picture} alt={props.user.username} />}
                      {props.user?.username && <AvatarFallback>{props.user.username[0].toUpperCase()}</AvatarFallback>}
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem
                      className="cursor-pointer flex items-center justify-center focus:bg-red-900"
                      onClick={handleLogoutAction}
                    >
                      {loading ? (
                        <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <LogOutIcon className="w-4 h-4 mr-2" />
                      )}
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : null}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
