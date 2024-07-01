"use client";

import { Container, Section } from "@/components/ui/craft";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Section>
        <Container className="border-t not-prose md:flex justify-between space-x-2 items-center text-sm">
          <div className="flex flex-col md:flex-row mb-6 md:mb-0 gap-4 underline underline-offset-4 decoration-muted text-muted-foreground">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
            <Link href="/report-file">Report File</Link>
          </div>
          <p className="text-muted-foreground">© Uploadhub. All rights reserved. 2024-present.</p>
        </Container>
      </Section>
    </footer>
  );
}
