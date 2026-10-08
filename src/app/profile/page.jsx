"use client";

import { Avatar, Spinner } from "@heroui/react";
import { useSession, signOut } from "../../lib/auth-client";
import Link from "next/link";
import React from "react";
import Loading from "../loading";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { data: session, isPending } = useSession();

  const realUser = session?.user;

  if (isPending) {
    return <Loading />;
  }

  const handleSignOut = () => {
    signOut();

    toast.success("Sign Out successful");
  };

  return (
    <div className="min-h-screen bg-[#f4f9f5] px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-5">
          <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">
            আমার প্রোফাইল
          </h1>

          <p className="mt-1 text-[11px] text-gray-500 sm:text-xs">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <Avatar className="h-14 w-14 shrink-0 sm:h-16 sm:w-16">
                <Avatar.Image
                  alt={realUser?.name || "User"}
                  src={realUser?.image || null}
                />

                <Avatar.Fallback>
                  {realUser?.name?.charAt(0)?.toUpperCase() || "U"}
                </Avatar.Fallback>
              </Avatar>

              <div className="min-w-0">
                <h2 className="truncate text-base font-semibold text-gray-800 sm:text-lg">
                  {realUser?.name}
                </h2>

                <p className="mt-1 break-all text-xs text-gray-500 sm:text-sm">
                  {realUser?.email}
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
              <Link
                href="/profile/updateProfile"
                className="w-full rounded-lg bg-green-600 px-4 py-2 text-center text-xs font-semibold text-white transition hover:bg-green-700 sm:w-auto sm:px-5 sm:text-sm"
              >
                ✏️ Update Profile
              </Link>

              <button
                type="button"
                onClick={handleSignOut}
                className="w-full rounded-lg border border-red-400 bg-white px-4 py-2 text-xs font-medium text-red-500 transition hover:bg-red-500 hover:text-white sm:w-auto sm:px-5 sm:text-sm"
              >
                ← সাইন আউট
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:mt-5 sm:p-5">
          <h2 className="text-base font-bold text-gray-800 sm:text-lg">
            অ্যাকাউন্টের তথ্য
          </h2>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-5 sm:grid-cols-2 sm:gap-4">
            <div className="rounded-xl bg-[#f7faf8] p-3 sm:p-4">
              <p className="text-[11px] text-gray-500 sm:text-xs">
                নাম
              </p>

              <p className="mt-1 text-sm font-semibold text-gray-800">
                {realUser?.name}
              </p>
            </div>

            <div className="rounded-xl bg-[#f7faf8] p-3 sm:p-4">
              <p className="text-[11px] text-gray-500 sm:text-xs">
                ইমেইল
              </p>

              <p className="mt-1 break-all text-sm font-semibold text-gray-800">
                {realUser?.email}
              </p>
            </div>

            <div className="rounded-xl bg-[#f7faf8] p-3 sm:p-4">
              <p className="text-[11px] text-gray-500 sm:text-xs">
                ইমেইল ভেরিফিকেশন
              </p>

              <p
                className={`mt-1 text-sm font-semibold ${
                  realUser?.emailVerified
                    ? "text-green-600"
                    : "text-orange-500"
                }`}
              >
                {realUser?.emailVerified
                  ? "✓ ভেরিফাইড"
                  : "ভেরিফাই করা হয়নি"}
              </p>
            </div>

            <div className="rounded-xl bg-[#f7faf8] p-3 sm:p-4">
              <p className="text-[11px] text-gray-500 sm:text-xs">
                ছবির লিংক
              </p>

              <p className="mt-1 break-all text-sm font-semibold text-gray-800">
                {realUser?.image}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;