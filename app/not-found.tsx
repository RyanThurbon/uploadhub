"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound(): React.JSX.Element {
  const router = useRouter();
  return (
    <>
      {/* <SiteHeader withAvatar={false} withCounter={false} /> */}
      <div className="flex flex-col items-center justify-center mt-40">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2">
            <div className="text-4xl font-bold">404</div>
            <Separator orientation="vertical" className="h-8" />
            <div className="text-4xl">Not Found</div>
          </div>
          <p className="mt-4 text-muted-foreground">The requested resource could not be found</p>
          <div className="flex items-center justify-center mt-4">
            <div className="flex h-5 items-center space-x-2 text-sm">
              <Link href="/">
                <Button variant="link">Home</Button>
              </Link>
              <Separator orientation="vertical" />
              <Button variant="link" onClick={() => router.back()}>
                Back
              </Button>
              <Separator orientation="vertical" />
              <Link href="#">
                <Button variant="link">Report File</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
