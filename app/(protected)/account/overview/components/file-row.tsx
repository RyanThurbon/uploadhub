import { TableRow, TableCell } from "@/components/ui/table";
import { FileIcon } from "@radix-ui/react-icons";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

interface FileRowProps {
  item: { file: string; downloads: string; date: string; size: string };
  onClick: () => void;
}

export default function FileRow(props: FileRowProps) {
  return (
    <TableRow className="text-foreground/50 cursor-pointer" onClick={props.onClick}>
      <TooltipProvider>
        <TableCell className="font-medium">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center md:w-[600px] w-[200px]">
                <FileIcon className="mr-2 flex-shrink-0" />
                <span className="truncate">{props.item.file}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{props.item.file}</p>
            </TooltipContent>
          </Tooltip>
        </TableCell>
      </TooltipProvider>

      <TableCell className="text-center">{props.item.downloads}</TableCell>
      <TableCell className="text-center hidden md:table-cell">{props.item.date}</TableCell>
      <TableCell className="text-right hidden md:table-cell">{props.item.size}</TableCell>
    </TableRow>
  );
}
