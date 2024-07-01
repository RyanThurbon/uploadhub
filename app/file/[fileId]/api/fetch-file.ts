import axios from "axios";

interface FileFetcherProps {
  fileId: string;
}

const FileFetcher = ({ fileId }: FileFetcherProps) => {
  const fetchData = async () => {
    try {
      const response = await axios(`http://localhost:3000/api/v1/file/${fileId}`, {
        method: "GET",
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return fetchData();
};

export default FileFetcher;
