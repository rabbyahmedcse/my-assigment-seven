"use client";

import { Avatar, Spinner } from "@heroui/react";
import { useSession, signOut } from "../../lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

const UserInfo = () => {
  const { data: session, isPending } = useSession();
  const [open, setOpen] = useState(false);

  const realUser = session?.user;

  if (isPending) {
    return (
      <div className="flex items-center justify-center">
        <Spinner size="sm" />
      </div>
    );
  }

  if (!realUser) {
    return (
      <div className="flex items-center gap-1.5 sm:gap-3">
        <Link href="/signin">
          <button
            type="button"
            className="rounded-md border border-green-600 bg-white px-2.5 py-1.5 text-xs font-semibold text-green-600 transition hover:bg-green-600 hover:text-white sm:px-4 sm:py-2 sm:text-sm"
          >
            সাইন ইন
          </button>
        </Link>

        <Link href="/signup">
          <button
            type="button"
            className="rounded-md bg-green-600 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-green-700 sm:px-4 sm:py-2 sm:text-sm"
          >
            সাইন আপ
          </button>
        </Link>
      </div>
    );
  }

  const handleSignOut = () => {
    signOut();
    setOpen(false);
    toast.success("Sign Out successful");
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1.5 rounded-lg px-1.5 py-1.5 transition hover:bg-gray-50 sm:gap-2 sm:px-2"
      >
        <Avatar className="h-8 w-8 sm:h-9 sm:w-9">
          <Avatar.Image
            alt={realUser.name || "User"}
            src={realUser.image || ""}
          />

          <Avatar.Fallback>
            {realUser.name?.charAt(0)?.toUpperCase() || "U"}
          </Avatar.Fallback>
        </Avatar>

        <div className="hidden max-w-[100px] text-left sm:block">
          <p className="truncate text-xs font-semibold text-gray-800">
            {realUser.name}
          </p>
        </div>

        <span
          className={`text-xs text-gray-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />

          <div className="absolute right-0 top-11 z-50 w-[calc(100vw-2rem)] max-w-64 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg sm:top-12">
            <div className="border-b border-gray-100 px-3 py-3 sm:px-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9 shrink-0 sm:h-10 sm:w-10">
                  <Avatar.Image
                    alt={realUser.name || "User"}
                    src={realUser.image || ""}
                  />

                  <Avatar.Fallback>
                    {realUser.name?.charAt(0)?.toUpperCase() || "U"}
                  </Avatar.Fallback>
                </Avatar>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-gray-800">
                    {realUser.name}
                  </p>

                  <p className="truncate text-[11px] text-gray-500">
                    {realUser.email}
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/profile"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-3 py-3 text-xs text-gray-700 transition hover:bg-gray-50 sm:px-4"
            >
              <span>👤</span>

              <span>
                প্রোফাইল দেখুন
              </span>
            </Link>

            <button
              type="button"
              onClick={handleSignOut}
              className="flex w-full items-center gap-2 border-t border-gray-100 px-3 py-3 text-xs text-red-500 transition hover:bg-red-50 sm:px-4"
            >
              <span>↪</span>

              <span>
                সাইন আউট
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserInfo;