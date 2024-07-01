import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

type TabSwitcherProps = {
  signInTab: React.ReactNode;
  signUpTab: React.ReactNode;
};

export default function TabSwitcher(props: TabSwitcherProps): React.JSX.Element {
  return (
    <Tabs className="min-w-[366px] md:min-w-[400px] md:max-w-[400px]" defaultValue="sign-in">
      <TabsList className="grid w-full grid-cols-2 rounded-3xl">
        <TabsTrigger value="sign-in" className="rounded-3xl">
          Sign In
        </TabsTrigger>
        <TabsTrigger value="sign-up" className="rounded-3xl">
          Sign Up
        </TabsTrigger>
      </TabsList>
      <TabsContent value="sign-in">{props.signInTab}</TabsContent>
      <TabsContent value="sign-up">{props.signUpTab}</TabsContent>
    </Tabs>
  );
}
