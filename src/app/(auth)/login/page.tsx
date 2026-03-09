"use client";

import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, EyeIcon, LockIcon, Mail01Icon, ViewOffIcon } from "@hugeicons/core-free-icons";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLogin } from "@/features/auth/hooks/use-login";
import { loginSchema, type LoginSchema } from "@/features/auth/schemas/login.schema";
import { useAuthSession } from "@/hooks/use-auth-session";
import { ROUTES } from "@/lib/config/routes";

export default function LoginPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuthSession();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useLogin();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace(ROUTES.DASHBOARD);
    }
  }, [isAuthenticated, isLoading, router]);

  const onSubmit = (values: LoginSchema) => {
    loginMutation.mutate(values);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4 py-10">
      <Card className="w-full max-w-[580px] rounded-2xl border border-[#E2E8F0] bg-white py-0 shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-0">
        <CardContent className="px-8 py-9 sm:px-10 sm:py-10">
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="mb-5 flex size-11 items-center justify-center rounded-md bg-[#1F6A5B] text-xs font-semibold text-white">
              CT
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-[#0F172A]">Welcome back</h1>
            <p className="mt-2 max-w-sm text-[15px] leading-6 text-[#64748B]">
              Enter your credentials to access your career dashboard
            </p>
          </div>

          <Form {...form}>
            <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-sm font-medium text-[#334155]">Email address</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <HugeiconsIcon
                          icon={Mail01Icon}
                          strokeWidth={1.9}
                          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[#94A3B8]"
                        />
                        <Input
                          type="email"
                          placeholder="name@company.com"
                          autoComplete="email"
                          className="h-12 rounded-xl border-[#E2E8F0] bg-[#F8FAFC] pl-9 font-geist-mono text-base text-[#0F172A] placeholder:text-[#94A3B8]"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <div className="flex items-center justify-between">
                      <FormLabel className="text-sm font-medium text-[#334155]">Password</FormLabel>
                      <button
                        type="button"
                        className="cursor-pointer text-sm font-semibold text-[#4F46E5] hover:text-[#4338CA]"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <HugeiconsIcon
                          icon={LockIcon}
                          strokeWidth={1.9}
                          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[#94A3B8]"
                        />
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          autoComplete="current-password"
                          className="h-12 rounded-xl border-[#E2E8F0] bg-[#F8FAFC] pl-9 pr-10 font-geist-mono text-base text-[#0F172A] placeholder:text-[#94A3B8]"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="absolute top-1/2 right-3 flex size-6 -translate-y-1/2 cursor-pointer items-center justify-center text-[#94A3B8] hover:text-[#64748B]"
                          aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                          <HugeiconsIcon icon={showPassword ? ViewOffIcon : EyeIcon} strokeWidth={1.9} className="size-4" />
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center gap-2 pt-0.5">
                <Checkbox id="keep-signed-in" className="cursor-pointer border-[#CBD5E1]" />
                <Label htmlFor="keep-signed-in" className="cursor-pointer text-sm text-[#475569]">
                  Keep me signed in
                </Label>
              </div>

              <Button
                type="submit"
                disabled={loginMutation.isPending}
                className="h-12 w-full cursor-pointer rounded-xl bg-[#4F46E5] text-base font-semibold text-white shadow-[0_8px_18px_rgba(79,70,229,0.35)] hover:bg-[#4338CA]"
              >
                {loginMutation.isPending ? (
                  "Signing in..."
                ) : (
                  <>
                    Sign In
                    <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
                  </>
                )}
              </Button>

              <div className="relative py-3">
                <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[#E2E8F0]" />
                <p className="relative mx-auto w-fit bg-white px-3 text-xs font-semibold tracking-wide text-[#94A3B8]">
                  NEW TO CAREER TRACKER?
                </p>
              </div>

              <Button
                type="button"
                variant="outline"
                className="h-12 w-full cursor-pointer rounded-xl border-[#E2E8F0] bg-white text-base font-semibold text-[#334155] hover:bg-[#F8FAFC]"
              >
                Create an account
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
