import { Button } from "@/components/ui/button";
import { LayoutGridIcon } from "lucide-react";
import RecentActivity from "./components/recent-activity";
import UploadDrawer from "./components/upload-drawer";

export default function DashboardPage(): React.JSX.Element {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-lg text-muted-foreground/50">Recent Activity</h1>
        <div className="space-x-2">
          <Button variant="secondary" className="text-sm">
            <LayoutGridIcon className="md:mr-2 h-4 w-4" />
            <span className="text-sm hidden md:block">View</span>
          </Button>
          <UploadDrawer />
        </div>
      </div>
      <div className="mt-5">
        <RecentActivity />
      </div>
    </div>
  );
}
