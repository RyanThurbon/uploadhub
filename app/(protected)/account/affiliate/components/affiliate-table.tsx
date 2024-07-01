import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { affiliateTableMockData, affiliateTableTierColors } from "../mock/affiliate-table-data";
import TableCellContent from "./table-cell-content";
import TableCellEarnings from "./table-cell-earnings";

interface AffiliateTableProps {
  data: typeof affiliateTableMockData;
  tierColors: typeof affiliateTableTierColors;
}

export default function AffiliateTable(props: AffiliateTableProps) {
  return (
    <Table className="mt-2">
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead>Tier / Length</TableHead>
          <TableHead className="text-center">1 - 10 min</TableHead>
          <TableHead className="text-center">10 - 30 min</TableHead>
          <TableHead className="text-center">30 - 60 min</TableHead>
          <TableHead className="text-center">60+ min</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.data.map((item, index) => (
          <TableRow key={index} className="text-foreground/50 hover:bg-transparent">
            <TableCellContent item={item} tierColors={props.tierColors} />
            <TableCellEarnings earnings={item.earnings.first} />
            <TableCellEarnings earnings={item.earnings.second} />
            <TableCellEarnings earnings={item.earnings.third} />
            <TableCellEarnings earnings={item.earnings.fourth} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
