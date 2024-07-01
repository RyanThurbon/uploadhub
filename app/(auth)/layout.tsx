import SiteHeader from "@/components/common/site-header";
import { getUser } from "@/lib/db/queries/auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();

  if (user) {
    redirect("/account/overview");
  }
  return (
    <section>
      <SiteHeader withCounter={false} withAvatar={false} user={user} />
      {children}
    </section>
  );
}
