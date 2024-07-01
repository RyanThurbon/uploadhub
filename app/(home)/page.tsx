import FeatureSection from "@/components/common/feature-section";
import Footer from "@/components/common/footer";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/common/page-header";
import AnimatedShinyBadge from "@/components/ui/animated-badge";
import { Button, buttonVariants } from "@/components/ui/button";
import WavyText from "@/components/ui/wavy-text";
import { getUser } from "@/lib/db/queries/auth";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import LogoutButton from "./components/logout-button";

export default async function Home(): Promise<React.JSX.Element> {
  const user = await getUser();

  return (
    <div className="container relative">
      <PageHeader>
        <AnimatedShinyBadge
          className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 
        hover:dark:text-neutral-400"
        >
          <span>✨ Introducing Uploadhub</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyBadge>
        <PageHeaderHeading>
          <WavyText word="File Sharing Made Easy" />
        </PageHeaderHeading>
        <PageHeaderDescription>
          Safe, secure, and simple file storage. Easily upload and manage your files with uploadhub
        </PageHeaderDescription>
        <PageActions>
          {user ? (
            <>
              <Link href="/account/overview">
                <Button variant="shine" size="lg" className="transform transition-transform hover:-translate-y-1">
                  GO TO ACCOUNT
                </Button>
              </Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link href="/authenticate">
                <Button variant="shine" size="lg" className="transform transition-transform hover:-translate-y-1">
                  Get Started Free
                </Button>
              </Link>
              <Link href="/authenticate" className={cn(buttonVariants({ variant: "secondary" }))}>
                Sign Up
              </Link>
            </>
          )}
        </PageActions>
        <FeatureSection />
      </PageHeader>
      <Footer />
    </div>
  );
}
