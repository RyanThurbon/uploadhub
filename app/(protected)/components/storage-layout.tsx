import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FolderIcon } from "lucide-react";
import Link from "next/link";

export default function StorageInfo(): React.JSX.Element {
  return (
    <div className="px-2 border-t flex items-center flex-col">
      <div className="py-2 flex items-center justify-between text-sm w-full text-muted-foreground">
        <div className="flex items-center">
          <FolderIcon className="mr-2 h-4 w-4" />
          Storage
        </div>
        <div className="flex items-center">35%</div>
      </div>
      <Progress value={35} />
      <div className="mt-4 flex items-center justify-between text-sm w-full text-muted-foreground">
        <div className="flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full inline-block mr-2" />
          Internal
        </div>
        <div className="flex items-center">1TB</div>
      </div>
      <div className="mt-2 flex items-center justify-between text-sm w-full text-muted-foreground">
        <div className="flex items-center">
          <span className="w-2 h-2 bg-red-500 rounded-full inline-block mr-2" />
          Used
        </div>
        <div className="flex items-center">350GB</div>
      </div>
      <Link href="/pricing" className="w-full mt-4">
        <Button className="w-full" variant="default">
          Upgrade Plan
        </Button>
      </Link>
    </div>
  );
}
