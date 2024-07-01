"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DownloadIcon } from "@radix-ui/react-icons";
import MetricGraphs from "./components/metric-graphs";
import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import ReportContent from "./components/report-content";

export default function ReportsPage(): React.JSX.Element {
  const reportRef = useRef<HTMLDivElement>(null);

  const downloadReport = () => {
    const input = reportRef.current;
    if (!input) return;

    html2canvas(input, { useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("report.pdf");
    });
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-lg text-muted-foreground/50">Account Metrics</h1>
        <div className="space-x-2 flex items-center">
          {/* <DatePickerWithRange /> */}
          <Button className="text-sm" onClick={downloadReport}>
            <DownloadIcon className="md:mr-2 h-4 w-4" />
            <span className="text-sm hidden md:block">Download Report</span>
          </Button>
        </div>
      </div>
      <div ref={reportRef}>
        <ReportContent />
      </div>
    </div>
  );
}
