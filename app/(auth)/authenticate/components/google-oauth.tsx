"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import React, { useState } from "react";
import { getGoogleOAuthConsentURL } from "../actions/auth";
import { errorToast } from "@/lib/utils";

export default function GoogleOAuth(): React.JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);

  const handleGoogleOAuth = async () => {
    setLoading(true);
    const response = await getGoogleOAuthConsentURL();
    if (response.success && response.url) {
      window.location.href = response.url;
    } else {
      errorToast(response.error ? response.error : "Something went wrong");
    }
  };
  return (
    <Button
      variant="secondary"
      onClick={handleGoogleOAuth}
      className="w-full flex items-center mb-2"
      disabled={loading}
    >
      {loading ? <Icons.spinner className="h-4 w-4 mr-2 animate-spin" /> : <Icons.google className="mr-2 h-4 w-4" />}
      Continue with Google
    </Button>
  );
}
