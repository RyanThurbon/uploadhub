import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { affiliateTableMockData, affiliateTableTierColors } from "../mock/affiliate-table-data";

export default function AffiliateTiers(): React.JSX.Element {
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
        {affiliateTableMockData.map((item, index) => (
          <TableRow className="text-foreground/50 hover:bg-transparent" key={index}>
            <TableCell className="flex flex-col items-start">
              <div className={`text-base font-bold ${affiliateTableTierColors[item.tier]}`}>{`TIER ${item.tier}`}</div>
              {item.countries && (
                <span className="mt-2 text-xs text-muted-foreground hidden md:block">{item.countries.join(", ")}</span>
              )}
            </TableCell>
            <TableCell className="md:w-fit text-center w-[70px]">${item.earnings.first}</TableCell>
            <TableCell className="md:w-fit text-center w-[70px]">${item.earnings.second}</TableCell>
            <TableCell className="md:w-fit text-center w-[70px]">${item.earnings.third}</TableCell>
            <TableCell className="md:w-fit text-center w-[70px]">${item.earnings.fourth}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
