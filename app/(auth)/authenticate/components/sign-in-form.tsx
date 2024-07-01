"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { defaultSignInFormValues, signInFormSchema } from "../schemas/sign-in-schema";
import { signInAction } from "../actions/auth";
import { useRouter } from "next/navigation";
import { errorToast, successToast } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import GoogleOAuth from "./google-oauth";
import { LockClosedIcon } from "@radix-ui/react-icons";

export default function SignInForm(): React.JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: defaultSignInFormValues,
  });

  async function onSubmit(values: z.infer<typeof signInFormSchema>) {
    setLoading(true);
    const response = await signInAction(values);
    setLoading(false);
    if (response.success) {
      successToast("Logged in successfully");
      router.push("/account/overview");
    } else {
      errorToast(response.error ? response.error : "Something went wrong");
    }
  }

  return (
    <Card className="min-w-[366px] md:min-w-[400px] md:max-w-[400px] bg-[#202020]/50 rounded-3xl mt-4">
      <CardHeader>
        <CardTitle className="text-center text-lg">Sign in to Uploadhub</CardTitle>
        <CardDescription className="text-center">Welcome back! Please sign in to continue</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex flex-col items-center justify-center mb-4">
          <GoogleOAuth />
          <div className="flex items-center w-full">
            <hr className="w-1/2 border border-gray-700/25" />
            <span className="text-center text-sm text-muted-foreground mx-1">or</span>
            <hr className="w-1/2 border border-gray-700/25" />
          </div>
        </div>
        <Form {...form}>
          <form className="flex flex-col gap-2" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password"
                      {...field}
                      type="password"
                      onChange={(e) => {
                        e.target.value = e.target.value.trim();
                        field.onChange(e);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="self-start mt-4 w-full" disabled={loading}>
              {loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="text-center flex items-center justify-center border-t-2 p-2 text-sm text-muted-foreground bg-gray-700/25 rounded-b-3xl">
        <LockClosedIcon className="mr-2" />
        Secured by uploadhub
      </CardFooter>
    </Card>
  );
}
