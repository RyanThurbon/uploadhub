import React from "react";
import { Button } from "@/components/ui/button";
import { ConfettiButton } from "@/components/ui/confetti";
import { DownloadIcon } from "@radix-ui/react-icons";
import { CheckIcon } from "lucide-react";

interface FileCardActionsProps {
  fileSize: string | undefined;
  unlocked: boolean;
  downloaded: boolean;
  onUnlockClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onDownloadClick: () => void;
}

export default function FileCardActions({
  fileSize,
  unlocked,
  downloaded,
  onUnlockClick,
  onDownloadClick,
}: FileCardActionsProps) {
  return (
    <div className="flex flex-col mt-4 md:mt-0">
      {!unlocked && (
        <ConfettiButton className="w-full rounded-b-none" onClick={onUnlockClick}>
          Click here to unlock
        </ConfettiButton>
      )}
      <Button
        variant="secondary"
        className={`w-[187px] ${
          unlocked ? "rounded-t-md" : "rounded-t-none cursor-not-allowed pointer-events-none "
        } flex justify-center items-center ${downloaded ? "bg-green-400 hover:bg-green-400" : ""}`}
        disabled={!unlocked}
        onClick={onDownloadClick}
      >
        {" "}
        {downloaded ? (
          <CheckIcon className="text-green-900 h-5 w-5" />
        ) : (
          <>
            <DownloadIcon className="mr-2" />
            {fileSize ? <span>{`Download ${fileSize}`}</span> : <span>Download</span>}
          </>
        )}
      </Button>
    </div>
  );
}
