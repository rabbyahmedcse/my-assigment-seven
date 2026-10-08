"use client";

import React from "react";
import {
  Form,
  Fieldset,
  FieldGroup,
  TextField,
  Label,
  Input,
  FieldError,
  Button,
} from "@heroui/react";
import { signIn, signUp } from "../../lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    if (data.password !== data.confirmPassword) {
      toast.error("Password doesn't match");
      return;
    }

    const { data: resdata, error } = await signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });

    if (error) {
      toast.error("Sign up failed");
      return;
    }

    if (resdata) {
      toast.success("Successfully Sign up");

      redirect("/");
    }
  };

  const handleGoogleSignIn = async () => {
    const resData = await signIn.social({
      provider: "google",
    });

    if (resData?.error) {
      toast.error("Google sign up failed");
    }
    toast.success("Google sign in successful");
  };

  const handleGithubSignIn = async () => {
    const resdata = await signIn.social({
      provider: "github",
    });

    if (resdata?.error) {
      toast.error("GitHub sign up failed");
    }
    toast.success("GitHub sign in successful");
  };

  return (
    <div className="min-h-screen bg-[#f4f9f5] px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto mb-5 w-full max-w-[310px] text-center sm:mb-6">
        <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">
          অ্যাকাউন্ট তৈরি করুন
        </h1>

        <p className="mt-1 text-[10px] text-gray-500 sm:text-[11px]">
          বিনামূল্যে বাজার দর অ্যাপ ব্যবহার করতে সাইন আপ করুন।
        </p>
      </div>

      <div className="mx-auto w-full max-w-[310px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
        <Form onSubmit={onSubmit}>
          <Fieldset className="w-full">
            <FieldGroup className="gap-3">
              <TextField
                isRequired
                name="name"
                validate={(value) => {
                  if (value.length < 3) {
                    return "নাম কমপক্ষে ৩ অক্ষরের হতে হবে";
                  }

                  return null;
                }}
              >
                <Label className="text-[11px] font-medium text-gray-700 sm:text-xs">
                  নাম
                </Label>

                <Input
                  aria-label="নাম"
                  className="h-9 w-full rounded-md border-gray-200 text-[11px] sm:h-10 sm:text-xs"
                  placeholder="Evan"
                />

                <FieldError className="text-[10px]" />
              </TextField>

              <TextField
                isRequired
                name="email"
                type="email"
              >
                <Label className="text-[11px] font-medium text-gray-700 sm:text-xs">
                  ইমেইল
                </Label>

                <Input
                  aria-label="ইমেইল"
                  className="h-9 w-full rounded-md border-gray-200 text-[11px] sm:h-10 sm:text-xs"
                  placeholder="you@example.com"
                />

                <FieldError className="text-[10px]" />
              </TextField>

              <TextField
                isRequired
                name="password"
                type="password"
                validate={(value) => {
                  if (value.length < 8) {
                    return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
                  }

                  return null;
                }}
              >
                <Label className="text-[11px] font-medium text-gray-700 sm:text-xs">
                  পাসওয়ার্ড
                </Label>

                <Input
                  aria-label="পাসওয়ার্ড"
                  className="h-9 w-full rounded-md border-gray-200 text-[11px] sm:h-10 sm:text-xs"
                  placeholder="কমপক্ষে ৮ অক্ষর"
                />

                <FieldError className="text-[10px]" />
              </TextField>

              <TextField
                isRequired
                name="confirmPassword"
                type="password"
              >
                <Label className="text-[11px] font-medium text-gray-700 sm:text-xs">
                  পাসওয়ার্ড নিশ্চিত করুন
                </Label>

                <Input
                  aria-label="পাসওয়ার্ড নিশ্চিত করুন"
                  className="h-9 w-full rounded-md border-gray-200 text-[11px] sm:h-10 sm:text-xs"
                  placeholder="আবার লিখুন"
                />

                <FieldError className="text-[10px]" />
              </TextField>
            </FieldGroup>

            <Fieldset.Actions className="mt-3">
              <Button
                type="submit"
                className="h-9 w-full rounded-md bg-green-600 text-[11px] font-medium text-white shadow-sm transition hover:bg-green-700 sm:h-10 sm:text-xs"
              >
                অ্যাকাউন্ট তৈরি করুন
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>

        <div className="my-3 flex items-center gap-2 sm:my-4">
          <div className="h-px flex-1 bg-gray-200" />

          <span className="text-[10px] text-gray-400">
            অথবা
          </span>

          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="flex min-h-9 w-full items-center justify-center gap-1 rounded-md border border-gray-200 bg-white px-2 py-2 text-[10px] text-gray-600 transition hover:bg-gray-50 sm:text-[11px]"
          >
            <span className="font-bold text-red-500">
              G
            </span>

            Google দিয়ে চালিয়ে যান
          </button>

          <button
            onClick={handleGithubSignIn}
            type="button"
            className="flex min-h-9 w-full items-center justify-center gap-1 rounded-md border border-gray-200 bg-white px-2 py-2 text-[10px] text-gray-600 transition hover:bg-gray-50 sm:text-[11px]"
          >
            <span className="font-bold text-gray-800">
              ◉
            </span>

            GitHub দিয়ে চালিয়ে যান
          </button>
        </div>

        <p className="mt-3 text-center text-[10px] text-gray-500 sm:text-[11px]">
          অ্যাকাউন্ট আছে?{" "}
          <Link
            href="/signin"
            className="font-medium text-green-600 hover:text-green-700"
          >
            সাইন ইন করুন
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;