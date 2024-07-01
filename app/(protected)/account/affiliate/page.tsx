import Footer from "@/components/common/footer";
import AffiliateTable from "./components/affiliate-table";
import { affiliateTableMockData, affiliateTableTierColors } from "./mock/affiliate-table-data";
import { mockAffiliateTermsData } from "./mock/affiliate-terms";

export default function AffiliatePage(): React.JSX.Element {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-lg text-muted-foreground/50">Partner Program</h1>
      </div>
      <div className="mt-5">
        <AffiliateTable data={affiliateTableMockData} tierColors={affiliateTableTierColors} />
      </div>
      <div className="md:mt-20 mt-8">
        <div className="w-full flex flex-col sm:flex-row items-start justify-between space-x-0 sm:space-x-2 space-y-2 sm:space-y-0 text-foreground/50">
          <ul className="text-sm md:text-xs list-disc pl-5">
            {mockAffiliateTermsData.slice(0, 3).map((item, index) => (
              <li key={index} className="ml-2 mt-2">
                {item.text}
              </li>
            ))}
          </ul>
          <ul className="text-sm md:text-xs list-disc pl-5">
            {mockAffiliateTermsData.slice(3).map((item, index) => (
              <li key={index} className="ml-2 mt-2">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
