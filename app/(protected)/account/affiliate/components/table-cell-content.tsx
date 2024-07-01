import { TableCell } from "@/components/ui/table";
import { affiliateTableTierColors } from "../mock/affiliate-table-data";

interface TableCellContentProps {
  item: { tier: string; countries: string[] };
  tierColors: typeof affiliateTableTierColors;
}

export default function TableCellContent(props: TableCellContentProps) {
  return (
    <TableCell className="flex flex-col items-start">
      <div className={`text-base font-bold ${props.tierColors[props.item.tier]}`}>{`TIER ${props.item.tier}`}</div>
      {props.item.countries && (
        <span className="mt-2 text-xs text-muted-foreground hidden md:block">{props.item.countries.join(", ")}</span>
      )}
    </TableCell>
  );
}
