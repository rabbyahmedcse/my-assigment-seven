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

const SignUpPage = () => {


  const onSubmit = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));


    if (data.password !== data.confirmPassword) {
      console.log("Password doesn't match");
      return;
    }

    const { data: resdata, error } = await signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });

    console.log("After:", resdata);

    if (error) {
      console.log("Signup Error:", error);
      return;
    }

    if(resdata){
      // toast.success("Successfully Sign up")
    
     redirect('/');
    }
  };
    const handleGoogleSignIn = async()=>{
      const resData = await signIn.social({
        provider:'google'
      })
    }
    const handleGithubSignIn = async()=>{
        const resdata = await signIn.social({
          provider: "github"
      })
      }

  return (
    <div className="min-h-screen bg-[#f4f9f5] px-4 py-8">

      {/* Heading */}
      <div className="mx-auto mb-5 max-w-[310px] text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          অ্যাকাউন্ট তৈরি করুন
        </h1>

        <p className="mt-1 text-[11px] text-gray-500">
          বিনামূল্যে বাজার দর অ্যাপ ব্যবহার করতে সাইন আপ করুন।
        </p>
      </div>

      {/* Form Card */}
      <div className="mx-auto w-full max-w-[310px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

        <Form onSubmit={onSubmit}>
          <Fieldset className="w-full">

            <FieldGroup className="gap-3">

              {/* Name */}
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
                <Label className="text-[11px] font-medium text-gray-700">
                  নাম
                </Label>

                <Input
                 aria-label="নাম"
                  className="h-8 rounded-md border-gray-200 text-[11px]"
                  placeholder="যেমন: রহিম উদ্দিন"
                />

                <FieldError className="text-[10px]" />
              </TextField>

              {/* Email */}
              <TextField
                isRequired
                name="email"
                type="email"
              >
                <Label className="text-[11px] font-medium text-gray-700">
                  ইমেইল
                </Label>

                <Input
                 aria-label="ইমেইল"
                  className="h-8 rounded-md border-gray-200 text-[11px]"
                  placeholder="you@example.com"
                />

                <FieldError className="text-[10px]" />
              </TextField>

              {/* Password */}
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
                <Label className="text-[11px] font-medium text-gray-700">
                  পাসওয়ার্ড
                </Label>

                <Input
                 aria-label="পাসওয়ার্ড"
                  className="h-8 rounded-md border-gray-200 text-[11px]"
                  placeholder="কমপক্ষে ৮ অক্ষর"
                />

                <FieldError className="text-[10px]" />
              </TextField>

              
              <TextField
                isRequired
                name="confirmPassword"
                type="password"
              >
                <Label className="text-[11px] font-medium text-gray-700">
                  পাসওয়ার্ড নিশ্চিত করুন
                </Label>

                <Input
                aria-label="পাসওয়ার্ড নিশ্চিত করুন"
                  className="h-8 rounded-md border-gray-200 text-[11px]"
                  placeholder="আবার লিখুন"
                />

                <FieldError className="text-[10px]" />
              </TextField>

            </FieldGroup>

          
            <Fieldset.Actions className="mt-3">
              <Button
                type="submit"
                className="h-8 w-full rounded-md bg-green-600 text-[11px] font-medium text-white shadow-sm hover:bg-green-700"
              >
                অ্যাকাউন্ট তৈরি করুন
              </Button>
            </Fieldset.Actions>

          </Fieldset>
        </Form>

        
        <div className="my-3 flex items-center gap-2">
          <div className="h-px flex-1 bg-gray-200" />

          <span className="text-[10px] text-gray-400">
            অথবা
          </span>

          <div className="h-px flex-1 bg-gray-200" />
        </div>

      
        <div className="grid grid-cols-2 gap-2">

          <button onClick={handleGoogleSignIn}
            type="button"
            className="flex h-8 items-center justify-center gap-1 rounded-md border border-gray-200 bg-white text-[10px] text-gray-600 transition hover:bg-gray-50"
          >
            <span className="font-bold text-red-500">
              G
            </span>

            Google দিয়ে চালিয়ে যান
          </button>

          <button onClick={handleGithubSignIn}
            type="button"
            className="flex h-8 items-center justify-center gap-1 rounded-md border border-gray-200 bg-white text-[10px] text-gray-600 transition hover:bg-gray-50"
          >
            <span className="font-bold text-gray-800">
              ◉
            </span>

            GitHub দিয়ে চালিয়ে যান
          </button>

        </div>

        <p className="mt-3 text-center text-[10px] text-gray-500">
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