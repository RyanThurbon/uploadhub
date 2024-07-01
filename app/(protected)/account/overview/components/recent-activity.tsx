"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { data } from "../mock/recent-activity-data";
import FileRow from "./file-row";

export default function RecentActivity(): React.JSX.Element {
  const router = useRouter();
  return (
    <Table className="mt-2">
      <TableCaption className="text-muted-foreground/50">
        {data.length === 0 ? "No recent files" : `A list of your ${data.length} recent uploads`}
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="md:w-[600px] md:max-w-[600px] w-[250px] max-w-[250px]">File</TableHead>
          <TableHead className="text-center">Downloads</TableHead>
          <TableHead className="text-center hidden md:table-cell">Date</TableHead>
          <TableHead className="text-right hidden md:table-cell">Size</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <FileRow key={index} item={item} onClick={() => router.push(item.link)} />
        ))}
      </TableBody>
      {data.length > 0 ? (
        <TableFooter>
          <TableRow>
            <TableCell className="text-right text-foreground/75 hidden md:table-cell" colSpan={4}>
              144.9MB
            </TableCell>
          </TableRow>
        </TableFooter>
      ) : null}
    </Table>
  );
}
