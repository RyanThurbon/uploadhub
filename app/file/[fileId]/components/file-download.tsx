import FileLoader from "./file-loader";

interface FileDownloadProps {
  params: { fileId: string };
}

const FileDownload = ({ params }: FileDownloadProps) => {
  return <FileLoader fileId={params.fileId} />;
};

export default FileDownload;
