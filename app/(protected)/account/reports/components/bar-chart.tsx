"use client";

import { BarChart, BarChartEventProps } from "@/components/ui/bar-chart";
import React from "react";
import { barChartData } from "../mock/bar-chart-data";

export default function UsageBarChart() {
  const [value, setValue] = React.useState<BarChartEventProps>(null);
  return (
    <>
      <BarChart
        className="h-80"
        data={barChartData}
        index="date"
        categories={["Uploads", "Downloads"]}
        onValueChange={(v: BarChartEventProps) => setValue(v)}
      />
      <pre className="mt-8 rounded-md bg-gray-950 p-3 text-sm text-white dark:bg-gray-800">
        {JSON.stringify(value, null, 2)}
      </pre>
    </>
  );
}
