import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[#f5faf6] px-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-5 text-7xl font-bold text-green-600">
          404
        </div>

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#eaf5ec] text-4xl">
          🔎
        </div>

        <h1 className="mt-6 text-2xl font-bold text-gray-800">
          পেজটি পাওয়া যায়নি
        </h1>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
          পণ্যের নাম বা ক্যাটাগরিটি হয়তো ভুল হয়েছে অথবা এই পেজে
          বর্তমানে কোনো তথ্য নেই।
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
};

export default NotFound;