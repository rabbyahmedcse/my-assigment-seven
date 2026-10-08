"use client";

import { Avatar, Spinner } from "@heroui/react";
import { useSession, signOut } from "../../lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";

const UserInfo = () => {
  const { data: session, isPending } = useSession();
  const [open, setOpen] = useState(false);

  const realUser = session?.user;

  // ================= LOADING =================
  if (isPending) {
    return (
      <div className="flex items-center justify-center">
        <Spinner size="sm" />
      </div>
    );
  }

  // ================= NOT LOGGED IN =================
  if (!realUser) {
    return (
      <div className="flex items-center gap-3">

        {/* Sign In */}
        <Link href="/signin">
          <button
            type="button"
            className="rounded-md border border-green-600 bg-white px-4 py-2 text-sm font-semibold text-green-600 transition hover:bg-green-600 hover:text-white"
          >
            সাইন ইন
          </button>
        </Link>

        {/* Sign Up */}
        <Link href="/signup">
          <button
            type="button"
            className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            সাইন আপ
          </button>
        </Link>

      </div>
    );
  }

  // ================= LOGGED IN =================
  return (
    <div className="relative">

      {/* ================= USER BUTTON ================= */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-gray-50"
      >

        {/* Avatar */}
        <Avatar className="h-8 w-8">
          <Avatar.Image
            alt={realUser.name || "User"}
            src={realUser.image || ""}
          />

          <Avatar.Fallback>
            {realUser.name?.charAt(0)?.toUpperCase() || "U"}
          </Avatar.Fallback>
        </Avatar>

        {/* Name */}
        <div className="hidden text-left sm:block">
          <p className="text-xs font-semibold text-gray-800">
            {realUser.name}
          </p>
        </div>

        {/* Arrow */}
        <span
          className={`text-xs text-gray-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>

      </button>

      {/* ================= DROPDOWN ================= */}
      {open && (
        <>
          {/* Outside Click Overlay */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />

          {/* Dropdown Card */}
          <div className="absolute right-0 top-12 z-50 w-64 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">

            {/* User Info */}
            <div className="border-b border-gray-100 px-4 py-3">

              <div className="flex items-center gap-3">

                <Avatar className="h-10 w-10">
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

            {/* Profile */}
            <Link
              href="/profile"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-4 py-3 text-xs text-gray-700 transition hover:bg-gray-50"
            >
              <span>👤</span>

              <span>
                প্রোফাইল দেখুন
              </span>
            </Link>

            {/* Sign Out */}
            <button
              type="button"
              onClick={async () => {
                await signOut();
                setOpen(false);
              }}
              className="flex w-full items-center gap-2 border-t border-gray-100 px-4 py-3 text-xs text-red-500 transition hover:bg-red-50"
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