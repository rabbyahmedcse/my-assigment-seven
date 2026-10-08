import Image from "next/image";
import Link from "next/link";
import React from "react";
import DatePage from "./DatePage";

const HeroPage = () => {
  return (
    <main className="container mx-auto w-full bg-white">
      <section className="px-4 py-4 sm:px-6 md:px-8">
        <div className="flex min-h-[305px] flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl border border-gray-200 bg-[#f8faf8] px-5 py-6 sm:px-7 md:flex-row md:justify-between md:gap-4 md:py-0">
          <div className="w-full max-w-[600px] text-center md:text-left">
            <span className="inline-block rounded-full bg-[#e3f4e7] px-3 py-1 text-[11px] font-medium text-green-700">
              <DatePage></DatePage>
            </span>

            <h1 className="mt-2 text-[24px] font-bold leading-tight text-gray-800 sm:text-[28px]">
              আজকের বাজারের দাম এক নজরে
            </h1>

            <p className="mx-auto mt-3 max-w-[570px] text-[12px] leading-5 text-gray-500 md:mx-0">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
              বাজারভিত্তিক বিশ্লেষণ, গড়, সর্বনিম্ন-সর্বোচ্চ এবং
              দামের পরিবর্তন এক জায়গায়।
            </p>

            <Link
              href="/#products"
              className="mt-4 inline-flex rounded-md bg-green-600 px-3 py-2 text-[11px] font-semibold text-white shadow-sm transition hover:bg-green-700 active:scale-95 sm:px-4 sm:text-[12px]"
            >
              সব পণ্য দেখুন
            </Link>
          </div>

          <div className="relative h-[180px] w-full max-w-[280px] shrink-0 sm:h-[210px] sm:max-w-[320px] md:h-[250px] md:w-[350px]">
            <Image
              src="/bazar-hero.png"
              alt="বাজারের পণ্য"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroPage;