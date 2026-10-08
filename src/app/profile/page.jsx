"use client";

import { Avatar, Spinner } from "@heroui/react";
import { useSession, signOut } from "../../lib/auth-client";
import Link from "next/link";
import React from "react";
import UpdateProfile from "./UpdateProfile";

const ProfilePage = () => {
  const { data: session, isPending } = useSession();

  const realUser = session?.user;

 
  if (isPending) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Spinner size="md" />
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-[#f4f9f5] px-4 py-8">

      {/* Header */}
      <div className="mx-auto w-full max-w-[1100px]">

        <div className="mb-5">
          <h1 className="text-2xl font-bold text-gray-800">
            আমার প্রোফাইল
          </h1>

          <p className="mt-1 text-xs text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* Profile Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            {/* User Information */}
            <div className="flex items-center gap-4">

              {/* Avatar */}
              <Avatar className="h-16 w-16">
                <Avatar.Image
                  alt={realUser.name || "User"}
                  src={realUser.image || ""}
                />

                <Avatar.Fallback>
                  {realUser.name?.charAt(0)?.toUpperCase() || "U"}
                </Avatar.Fallback>
              </Avatar>

              {/* Name + Email */}
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {realUser.name}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {realUser.email}
                </p>
              </div>

            </div>

            {/* Sign Out */}
            <button
              type="button"
              onClick={()=>signOut()}
              className="rounded-lg border border-red-400 bg-white px-5 py-2 text-sm font-medium text-red-500 transition hover:bg-red-500 hover:text-white"
            >
              ← সাইন আউট
            </button>

          </div>

        </div>

        {/* Account Information */}
        <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

          <h2 className="text-lg font-bold text-gray-800">
            অ্যাকাউন্টের তথ্য
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">

            {/* Name */}
            <div className="rounded-xl bg-[#f7faf8] p-4">
              <p className="text-xs text-gray-500">
                নাম
              </p>

              <p className="mt-1 text-sm font-semibold text-gray-800">
                {realUser.name}
              </p>
            </div>

            {/* Email */}
            <div className="rounded-xl bg-[#f7faf8] p-4">
              <p className="text-xs text-gray-500">
                ইমেইল
              </p>

              <p className="mt-1 break-all text-sm font-semibold text-gray-800">
                {realUser.email}
              </p>
            </div>

            {/* Email Verified */}
            <div className="rounded-xl bg-[#f7faf8] p-4">
              <p className="text-xs text-gray-500">
                ইমেইল ভেরিফিকেশন
              </p>

              <p
                className={`mt-1 text-sm font-semibold ${
                  realUser.emailVerified
                    ? "text-green-600"
                    : "text-orange-500"
                }`}
              >
                {realUser.emailVerified
                  ? "✓ ভেরিফাইড"
                  : "ভেরিফাই করা হয়নি"}
              </p>
            </div>

            {/* User ID */}
            <div className="rounded-xl bg-[#f7faf8] p-4">
              <p className="text-xs text-gray-500">
                User ID
              </p>

              <p className="mt-1 break-all text-sm font-semibold text-gray-800">
                {realUser.id}
              </p>
            </div>

          </div>

        </div>

      </div>
      <UpdateProfile></UpdateProfile>
    </div>
  );
};

export default ProfilePage;