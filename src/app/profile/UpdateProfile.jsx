"use client";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { updateUser, useSession } from "../../lib/auth-client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { data: session, isPending } = useSession();
  const [isUpdating, setIsUpdating] = useState(false);

  const realUser = session?.user;

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    setIsUpdating(true);

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    if (
      userData.name === realUser.name &&
      userData.image === realUser.image
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
    } 
    else {
      toast.error("Update not Successful");
    }

    setIsUpdating(false);
  };

  return (
    <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-800">
          প্রোফাইল আপডেট করুন
        </h1>

        <p className="mt-1 text-xs text-gray-500">
          আপনার প্রোফাইলের তথ্য পরিবর্তন করুন
        </p>
      </div>

      {/* Form */}
      <Form
        className="flex w-full flex-col gap-5"
        onSubmit={handleUpdateProfile}
      >

        {/* Name */}
        <TextField
          isRequired
          name="name"
          defaultValue={realUser?.name || ""}
        >
          <Label className="mb-1 text-sm font-medium text-gray-700">
            নাম
          </Label>

          <Input
            placeholder="আপনার নাম লিখুন"
            className="h-10 rounded-lg border-gray-200 text-sm text-gray-800"
          />

          <FieldError />
        </TextField>

        {/* Image URL */}
        <TextField
          name="image"
          defaultValue={realUser?.image || ""}
        >
          <Label className="mb-1 text-sm font-medium text-gray-700">
            প্রোফাইল ছবি URL
          </Label>

          <Input
            type="url"
            placeholder="https://example.com/image.jpg"
            className="h-10 rounded-lg border-gray-200 text-sm text-gray-800"
          />

          <FieldError />
        </TextField>

        {/* Button */}
        <Button
          type="submit"
          isDisabled={isUpdating}
          className="h-10 w-full rounded-lg bg-green-600 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          {isUpdating ? "আপডেট হচ্ছে..." : "প্রোফাইল আপডেট করুন"}
        </Button>

      </Form>
    </div>
  );
};

export default UpdateProfile;