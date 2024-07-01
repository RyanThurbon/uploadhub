import { Suspense } from "react";
import FileFetcher from "../api/fetch-file";
import FileCard from "./file-card";
import { notFound } from "next/navigation";

interface FileLoaderProps {
  fileId: string;
}

const FileLoader = ({ fileId }: FileLoaderProps) => {
  // return (
  //   <Suspense fallback={<div>Verifying File...</div>}>
  //     <FileCardAsync fileId={fileId} />
  //   </Suspense>
  // );
  return <FileCard fileId="Barotrauma_Fix_Repair_Steam_Generic.rar" fileSize="9.8 MB" />;
};

// const FileCardAsync = async ({ fileId }: { fileId: string }) => {
//   const data = await FileFetcher({ fileId });
//   return data.fileId ? <FileCard fileId={data.fileId} fileSize={data.fileSize} /> : notFound();
// };

export default FileLoader;
