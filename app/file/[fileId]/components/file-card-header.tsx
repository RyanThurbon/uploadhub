"use client";

import React, { useState } from "react";
import FileCardActions from "./file-card-actions";
import confetti from "canvas-confetti";
import { CardTitle } from "@/components/ui/card";

interface FileCardHeaderProps {
  fileId: string;
  fileSize: string | undefined;
}

export default function FileCardHeader({ fileId, fileSize }: FileCardHeaderProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleUnlockClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    confetti({
      origin: {
        x: x / window.innerWidth,
        y: y / window.innerHeight,
      },
    });

    setUnlocked(true);
  };

  const handleDownloadClick = () => {
    setDownloaded(true);
  };
  return (
    <CardTitle className="flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between">
      <div className="text-start md:text-left md:max-w-[340px] max-w-[300px]">
        <span className="block text-center md:text-left truncate h-5">{fileId}</span>
        <p className="text-muted-foreground text-sm mt-1 text-center md:text-left">Uploaded by anonymous</p>
      </div>
      <FileCardActions
        fileSize={fileSize}
        unlocked={unlocked}
        downloaded={downloaded}
        onUnlockClick={handleUnlockClick}
        onDownloadClick={handleDownloadClick}
      />
    </CardTitle>
  );
}
