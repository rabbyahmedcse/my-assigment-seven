import Image from "next/image";
import Link from "next/link";
import React from "react";
import DatePage from "./DatePage";

const HeroPage = () => {
  

  return (
    <main className=" container mx-auto  bg-white">

      {/* Hero / Banner */}
      <section className=" px-4 py-4">
        <div className="  flex min-h-[305px] items-center justify-between overflow-hidden rounded-2xl border border-gray-200 bg-[#f8faf8] px-7">

          {/* Left Content */}
          <div className="max-w-[600px]">

            {/* Eyebrow */}
            <span className="inline-block rounded-full bg-[#e3f4e7] px-3 py-1 text-[11px] font-medium text-green-700">
              <DatePage></DatePage>
            </span>

            {/* Heading */}
            <h1 className="mt-2 text-[28px] font-bold leading-tight text-gray-800">
              আজকের বাজারের দাম এক নজরে
            </h1>

            {/* Subtitle */}
            <p className="mt-3 max-w-[570px] text-[12px] leading-5 text-gray-500">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
              বাজারভিত্তিক বিশ্লেষণ, গড়, সর্বনিম্ন-সর্বোচ্চ এবং
              দামের পরিবর্তন এক জায়গায়।
            </p>

            {/* CTA */}
            <Link
              href="/#products"
              className="mt-4 inline-flex rounded-md bg-green-600 px-4 py-2 text-[12px] font-semibold text-white shadow-sm transition hover:bg-green-700 active:scale-95"
            >
              সব পণ্য দেখুন
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative h-[250px] w-[350px] shrink-0">
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