import { DashboardSideNav } from "@/components/common/side-nav";
import SiteHeader from "@/components/common/site-header";
import { dashboardNavConfig } from "@/lib/config/nav";
import { Metadata } from "next";
import StorageInfo from "./components/storage-layout";
import { getUser } from "@/lib/db/queries/auth";
import { redirect } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard - Uploadhub",
  description: "File sharing made easy",
};

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();

  if (!user) {
    return redirect("/authenticate");
  }

  return (
    <div>
      <SiteHeader withCounter={false} withAvatar={true} user={user} />
      <div>
        <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <aside className="fixed top-14 z-30 -ml-2 hidden h-fit w-full shrink-0 md:sticky md:block">
            <div className="py-6 pr-6 lg:py-8">
              <DashboardSideNav items={dashboardNavConfig} />
              <StorageInfo />
            </div>
          </aside>
          <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols">
            <div className="mx-auto w-full min-w-0">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
