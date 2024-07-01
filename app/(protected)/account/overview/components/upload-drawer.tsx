"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { UploadIcon } from "@radix-ui/react-icons";
import Dropzone from "react-dropzone";

export default function UploadDrawer(): React.JSX.Element {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="" variant="default">
          <UploadIcon className="md:mr-2 h-4 w-4" />
          <span className="text-sm hidden md:block">Upload</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-foreground/50 flex items-center justify-between space-x-2 px-4">
            <div className="flex items-center space-x-2">
              <span className="text-base">File Upload</span>
            </div>
            <span className="text-xs text-muted-foreground">0 files selected</span>
          </DrawerTitle>
          <DrawerDescription>
            <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div
                    {...getRootProps()}
                    className="flex items-center justify-center w-full border-4 border-dashed h-[250px]"
                  >
                    <input {...getInputProps()} />
                    <p className="text-lg font-semibold">Drag and drop some files here, or click to browse</p>
                  </div>
                </section>
              )}
            </Dropzone>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex items-center">
          <div className="flex flex-col w-full items-center justify-center">
            <Button className="w-1/3 flex items-center justify-center disabled:cursor-not-allowed disabled:hover:cursor-not-allowed">
              <UploadIcon className="mr-2 h-4 w-4" />
              <span className="text-sm">Upload</span>
            </Button>
            <div className="text-center mt-4 mb-0 text-xs text-foreground/50">MAX FILE SIZE: 20GB</div>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
