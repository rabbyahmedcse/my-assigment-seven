import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[#f5faf6] px-4 py-8 sm:px-6 sm:py-10">
      <div className="w-full max-w-md text-center">
        <div className="mb-4 text-6xl font-bold text-green-600 sm:mb-5 sm:text-7xl">
          404
        </div>

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf5ec] text-3xl sm:h-20 sm:w-20 sm:text-4xl">
          🔎
        </div>

        <h1 className="mt-5 text-xl font-bold text-gray-800 sm:mt-6 sm:text-2xl">
          পেজটি পাওয়া যায়নি
        </h1>

        <p className="mt-2 text-xs leading-5 text-gray-500 sm:mt-3 sm:text-sm sm:leading-6">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
          পণ্যের নাম বা ক্যাটাগরিটি হয়তো ভুল হয়েছে অথবা এই পেজে
          বর্তমানে কোনো তথ্য নেই।
        </p>

        <Link
          href="/"
          className="mt-5 inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-green-700 sm:mt-6 sm:px-6 sm:py-3 sm:text-sm"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
};

export default NotFound;