import SiteHeader from "@/components/common/site-header";
import { getUser } from "@/lib/db/queries/auth";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();
  return (
    <>
      <SiteHeader withCounter={true} withAvatar={false} user={user} />
      {children}
    </>
  );
}
