"use client";

import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      return;
    } else {
      router.push("/");
    }
  });

  return (
    <div className="mx-auto max-w-xl mt-40 sm:">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Log in</CardTitle>
          <CardDescription>Enter your email below to Log In</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline">
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline" onClick={() => signIn("google")}>
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder=""
              className="pointer-events-none bg-gray-300"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              className="pointer-events-none  bg-gray-300"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Log in</Button>
        </CardFooter>
        <CardContent className="text-sm">
          {" "}
          Dont have an account?{" "}
          <Link href="/signup" className="italic underline">
            Sign Up here
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default login;
