import { BarList } from "@/components/ui/bar-list";
import { Tracker } from "@/components/ui/status-tracker";
import { barListData } from "../mock/bar-list-data";
import { trackerData } from "../mock/tracker-data";
import UsageBarChart from "./bar-chart";
import EarningsChart from "./earnings-chart";

export default function MetricGraphs(): React.JSX.Element {
  return (
    <>
      <div className="mt-10">
        <h1 className="text-lg text-muted-foreground/50">Earnings Metrics</h1>
        <EarningsChart />
      </div>
      <div className="mt-10">
        <h1 className="text-lg text-muted-foreground/50">Usage Metrics</h1>
        <UsageBarChart />
      </div>
      <div className="mt-10">
        <h1 className="text-lg text-muted-foreground/50">Downloads by File Type</h1>
        <BarList data={barListData} />
      </div>
      <div className="mt-10">
        <h1 className="text-lg text-muted-foreground/50">Server Status</h1>
        <Tracker data={trackerData} className="w-full" />
      </div>
    </>
  );
}
