import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download - Uploadhub",
  description: "File sharing made easy",
};

export default function FileDownloadLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <section className="mt-40 mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      {children}
    </section>
  );
}
