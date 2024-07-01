import SiteHeader from "@/components/common/site-header";

export default function PricingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <SiteHeader withCounter={false} withAvatar={false} />
      {children}
    </section>
  );
}
