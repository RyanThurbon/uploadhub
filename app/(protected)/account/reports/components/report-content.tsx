"use client";

import { Card } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import React, { useEffect, useState } from "react";
import MetricGraphs from "./metric-graphs";

export default function ReportContent(): React.JSX.Element {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted ? (
        <>
          <div className="mt-10">
            <Card className="flex items-center">
              <div className="w-full flex items-center">
                <div className="w-1/3 border-r-2 flex items-center p-2 text-center justify-center">
                  <div className="flex items-center flex-col justify-center">
                    <h1 className="text-foreground/50">Account Balance</h1>
                    <span className="mt-2">$0.00</span>
                  </div>
                </div>
                <div className="w-1/3 border-r-2 flex items-center p-2 text-center justify-center">
                  <div className="flex items-center flex-col justify-center">
                    <h1 className="text-foreground/50">Yesterday&apos;s Earnings</h1>
                    <span className="mt-2">$0.00</span>
                  </div>
                </div>
                <div className="w-1/3 flex items-center p-2 text-center justify-center">
                  <div className="flex items-center flex-col justify-center">
                    <h1 className="text-foreground/50">Today&apos;s Earnings</h1>
                    <span className="mt-2">$0.00</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <MetricGraphs />
        </>
      ) : (
        <div className="flex items-center justify-center mt-10">
          <Icons.spinner className="h-6 w-6 animate-spin" />
        </div>
      )}
    </>
  );
}
