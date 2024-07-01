import { TableCell } from "@/components/ui/table";
import React from "react";

interface TableCellEarningsProps {
  earnings: any;
}

export default function TableCellEarnings(props: TableCellEarningsProps) {
  return <TableCell className="md:w-fit text-center w-[70px]">${props.earnings}</TableCell>;
}
