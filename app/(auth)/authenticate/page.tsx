import { PageHeader } from "@/components/common/page-header";
import React from "react";
import SignInForm from "./components/sign-in-form";
import SignUpForm from "./components/sign-up-form";
import TabSwitcher from "./components/tab-switcher";

export default function SignInPage(): React.JSX.Element {
  return (
    <PageHeader>
      <TabSwitcher signInTab={<SignInForm />} signUpTab={<SignUpForm />} />
    </PageHeader>
  );
}
