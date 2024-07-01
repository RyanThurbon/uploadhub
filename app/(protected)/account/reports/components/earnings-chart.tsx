import { AreaChart, AreaChartEventProps } from "@/components/ui/area-chart";
import { earningsChartData } from "../mock/earnings-chart-data";
import React, { useState } from "react";

export default function EarningsChart(): React.JSX.Element {
  const [value, setValue] = useState<AreaChartEventProps>(null);
  return (
    <>
      <AreaChart
        className="h-80"
        data={earningsChartData}
        index="date"
        categories={["Last Month", "This Month"]}
        valueFormatter={(number: number) => `$${Intl.NumberFormat("us").format(number).toString()}`}
        onValueChange={(v: AreaChartEventProps) => setValue(v)}
      />
      <pre className="mt-8 rounded-md bg-gray-950 p-3 text-sm text-white dark:bg-gray-800">
        {JSON.stringify(value, null, 2)}
      </pre>
    </>
  );
}
