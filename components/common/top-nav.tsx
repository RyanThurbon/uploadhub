"use client";

import { homeNavConfig } from "@/lib/config/nav";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type TopnavProps = {
  layout: "home" | "dashboard";
};

const renderNavItems = (navConfig: Array<NavItem>, pathname: string): React.ReactNode => {
  return navConfig.map((item, index) => (
    <Link
      key={index}
      href={item.href ? item.href : ""}
      className={cn(
        "transition-colors hover:text-foreground/80",
        pathname === item.href ? "text-foreground" : "text-foreground/60"
      )}
    >
      {item.title}
    </Link>
  ));
};

export default function Topnav(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span>Uploadhub</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">{renderNavItems(homeNavConfig, pathname)}</nav>
    </div>
  );
}
