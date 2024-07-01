"use client";

import { logoutAction } from "@/app/(auth)/authenticate/actions/auth";
import { Button } from "@/components/ui/button";
import { successToast } from "@/lib/utils";

export default function LogoutButton(): React.JSX.Element {
  return (
    <Button
      variant="secondary"
      onClick={async () => {
        await logoutAction();
        successToast("Logged out successfully");
      }}
    >
      Logout
    </Button>
  );
}
