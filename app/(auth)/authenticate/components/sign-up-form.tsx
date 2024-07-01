"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { errorToast, successToast } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { LockClosedIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signUpAction } from "../actions/auth";
import { defaultSignUpFormValues, signUpFormSchema } from "../schemas/sign-up-schema";
import { useRouter } from "next/navigation";
import { Icons } from "@/components/ui/icons";

export default function SignUpForm(): React.JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: defaultSignUpFormValues,
  });

  async function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    setLoading(true);
    const response = await signUpAction(values);
    setLoading(false);
    if (response.success) {
      successToast("Account created successfully");
      router.push("/account/overview");
    } else {
      errorToast(response.error ? response.error : "Something went wrong");
    }
  }
  return (
    <Card className="min-w-[366px] md:min-w-[400px] md:max-w-[400px] bg-[#202020]/50 rounded-3xl mt-4">
      <CardHeader>
        <CardTitle className="text-center text-lg">Create your account</CardTitle>
        <CardDescription className="text-center">Welcome! Please fill in the details to get started.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form className="flex flex-col gap-2" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your username" {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirm your password"
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
              Create Account
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
