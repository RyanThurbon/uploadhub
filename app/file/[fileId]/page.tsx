import React from "react";
import FileDownload from "./components/file-download";

export default function FileDownloadPage({ params }: { params: { fileId: string } }): React.JSX.Element {
  return <FileDownload params={params} />;
}
