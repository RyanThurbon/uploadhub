import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import FileCardFooter from "./file-card-footer";
import FileCardHeader from "./file-card-header";

interface FileCardProps {
  fileId: string;
  fileSize: string | undefined;
}

export default function FileCard({ fileId, fileSize }: FileCardProps) {
  return (
    <Card className="md:w-[750px] md:max-w-[750px] w-[95%] max-w-[95%] bg-[#202020]/15">
      <CardHeader>
        <FileCardHeader fileId={fileId} fileSize={fileSize} />
      </CardHeader>
      <CardFooter className="bg-secondary/80 rounded-b-xl text-xs text-foreground/45 flex items-center justify-start py-4">
        <FileCardFooter />
      </CardFooter>
    </Card>
  );
}
