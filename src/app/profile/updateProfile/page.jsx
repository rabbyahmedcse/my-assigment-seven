"use client";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { updateUser, useSession } from "../../../lib/auth-client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import Loading from "../../loading";

const UpdateProfile = () => {
  const { data: session, isPending } = useSession();
  const [isUpdating, setIsUpdating] = useState(false);

  const realUser = session?.user;

  if (isPending) {
    return <Loading />;
  }

  if (!realUser) {
    return null;
  }

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    setIsUpdating(true);

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    if (
      userData.name === realUser.name &&
      userData.image === (realUser.image || "")
    ) {
      toast.info("Your data is same");
      setIsUpdating(false);
      return;
    }

    const { data, error } = await updateUser({
      name: userData.name,
      image: userData.image,
    });

    if (!error) {
      toast.success("Update Successfully");
    } else {
      toast.error("Update not Successful");
    }

    setIsUpdating(false);
  };

  return (
    <div className="mx-auto mt-4 w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:mt-6 sm:p-5">
      <div className="mb-5 sm:mb-6">
        <h1 className="text-lg font-bold text-gray-800 sm:text-xl">
          প্রোফাইল আপডেট করুন
        </h1>

        <p className="mt-1 text-[11px] text-gray-500 sm:text-xs">
          আপনার প্রোফাইলের তথ্য পরিবর্তন করুন
        </p>
      </div>

      <Form
        className="flex w-full flex-col gap-4 sm:gap-5"
        onSubmit={handleUpdateProfile}
      >
        <TextField
          isRequired
          name="name"
          defaultValue={realUser.name || ""}
        >
          <Label className="mb-1 text-xs font-medium text-gray-700 sm:text-sm">
            নাম
          </Label>

          <Input
            placeholder="আপনার নাম লিখুন"
            className="h-10 w-full rounded-lg border-gray-200 text-sm text-gray-800"
          />

          <FieldError />
        </TextField>

        <TextField
          name="image"
          defaultValue={realUser.image || ""}
        >
          <Label className="mb-1 text-xs font-medium text-gray-700 sm:text-sm">
            প্রোফাইল ছবি URL
          </Label>

          <Input
            type="url"
            placeholder="https://example.com/image.jpg"
            className="h-10 w-full rounded-lg border-gray-200 text-sm text-gray-800"
          />

          <FieldError />
        </TextField>

        <Button
          type="submit"
          isDisabled={isUpdating}
          className="h-10 w-full rounded-lg bg-green-600 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          {isUpdating ? "আপডেট হচ্ছে..." : "প্রোফাইল আপডেট করুন"}
        </Button>
      </Form>

      <Link href="/profile">
        <Button
          type="button"
          className="mt-3 h-10 w-full rounded-lg bg-gray-200 text-sm font-semibold text-gray-700 transition hover:bg-gray-300"
        >
          ← Back to Profile
        </Button>
      </Link>
    </div>
  );
};

export default UpdateProfile;