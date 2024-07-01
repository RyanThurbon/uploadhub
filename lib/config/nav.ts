import { MainNavItem, NavItemWithChildren } from "@/types/nav";

export const homeNavConfig: MainNavItem[] = [
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "FAQ",
    href: "#",
  },
  {
    title: "API",
    href: "#",
  },
];

export const dashboardNavConfig: NavItemWithChildren[] = [
  {
    title: "Account",
    href: "#",
    items: [
      {
        title: "Overview",
        href: "/account/overview",
        items: [],
      },
      {
        title: "Affiliate",
        href: "/account/affiliate",
        items: [],
      },
      {
        title: "Reports",
        href: "/account/reports",
        items: [],
      },
      {
        title: "Settings",
        href: "/account/settings",
        items: [],
      },
    ],
  },
  {
    title: "Manage",
    href: "#",
    items: [
      {
        title: "Files",
        href: "#",
        items: [],
      },
      {
        title: "Videos",
        href: "#",
        items: [],
      },
      {
        title: "Upload",
        href: "#",
        items: [],
      },
    ],
  },
];
