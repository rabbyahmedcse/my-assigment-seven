import { notFound } from "next/navigation";
import React from "react";

export const instant = false;

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${id}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();

  if (!data || data.length === 0) {
    notFound();
  }

  const markets = data.markets;

  const minPrice = markets.length > 0 ? Math.min(...markets.map((item) => item.min)): 0;

  const maxPrice = markets.length > 0  ? Math.max(...markets.map((item) => item.max)): 0;

  const averagePrice =  (minPrice + maxPrice)/2;
    

  const unitText =
    data.unit === "kg"
      ? " কেজি"
      : data.unit === "litre"
      ? " লিটার"
      : data.unit === "dozen"
      ? " ডজন"
      : " পিস";

  const isUp = data.change?.dir === "up";

  const priceDifference = data.today - data.yesterday;

  return (
    <div className="min-h-screen bg-[#f5faf6]">
      <div className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 sm:py-6 md:px-8">
        <div className="mb-4 flex flex-wrap items-center gap-1.5 text-[11px] text-gray-500 sm:mb-5 sm:gap-2 sm:text-xs">
          <span>হোম</span>
          <span>›</span>
          <span>{data.categoryNameBn}</span>
          <span>›</span>
          <span className="font-medium text-gray-700">
            {data.nameBn}
          </span>
        </div>

        <section className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 md:p-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-6">
            <div className="flex min-w-0 items-start gap-3 sm:gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#f1f7f2] text-4xl sm:h-20 sm:w-20 sm:text-5xl">
                {data.image}
              </div>

              <div className="min-w-0">
                <h1 className="text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl">
                  {data.nameBn}
                </h1>

                <p className="mt-1 text-[11px] text-gray-500 sm:text-xs">
                  প্রতি {unitText} • {data.categoryNameBn}
                </p>

                <p className="mt-2 text-[11px] text-gray-600 sm:text-xs">
                  সকল বাজারের মূল্য অনুযায়ী আজ দামে{" "}
                  <span
                    className={
                      isUp
                        ? "font-semibold text-red-500"
                        : "font-semibold text-green-600"
                    }
                  >
                    {Math.abs(priceDifference)} টাকা{" "}
                    {isUp ? "বেড়েছে" : "কমেছে"}
                  </span>
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#f1f7f2] px-2.5 py-1 text-[11px] font-medium text-gray-700 sm:px-3 sm:text-xs">
                    {data.categoryIcon} {data.categoryNameBn}
                  </span>

                  <span className="rounded-full bg-[#f1f7f2] px-2.5 py-1 text-[11px] font-medium text-gray-700 sm:px-3 sm:text-xs">
                    {unitText}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full rounded-xl bg-[#f1f7f2] px-5 py-4 text-center sm:px-6 md:min-w-[150px] md:w-auto">
              <p className="text-xs text-gray-500">
                আজকের দাম
              </p>

              <p className="mt-1 text-2xl font-bold text-gray-800 sm:text-3xl">
                {data.today}
              </p>

              <p className="text-xs text-gray-500">
                টাকা / {unitText}
              </p>

              <p
                className={`mt-2 text-xs font-semibold ${
                  isUp ? "text-red-500" : "text-green-600"
                }`}
              >
                {isUp ? "▲" : "▼"} {data.change?.pct}%
              </p>
            </div>
          </div>
        </section>

        <section className="mt-4 rounded-2xl border border-gray-200 bg-white p-4 sm:mt-5 sm:p-5 md:p-7">
          <h2 className="mb-4 text-base font-bold text-gray-800 sm:mb-5 sm:text-lg">
            দামের সারসংক্ষেপ
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-4 sm:p-5">
              <p className="text-xs text-gray-500">
                সর্বনিম্ন দাম
              </p>

              <p className="mt-2 text-xl font-bold text-green-600 sm:text-2xl">
                {minPrice} টাকা
              </p>

              <p className="mt-1 text-[10px] text-gray-500 sm:text-[11px]">
                সকল বাজারের মধ্যে সর্বনিম্ন
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-4 sm:p-5">
              <p className="text-xs text-gray-500">
                সর্বোচ্চ দাম
              </p>

              <p className="mt-2 text-xl font-bold text-red-500 sm:text-2xl">
                {maxPrice} টাকা
              </p>

              <p className="mt-1 text-[10px] text-gray-500 sm:text-[11px]">
                সকল বাজারের মধ্যে সর্বোচ্চ
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-4 sm:p-5">
              <p className="text-xs text-gray-500">
                গড় দাম
              </p>

              <p className="mt-2 text-xl font-bold text-green-600 sm:text-2xl">
                {averagePrice.toFixed(2)} টাকা
              </p>

              <p className="mt-1 text-[10px] text-gray-500 sm:text-[11px]">
              প্রতি কেজি হিসেবে গড় মূল্য
              </p>
            </div>
          </div>
        </section>

        <section className="mt-4 rounded-2xl border border-gray-200 bg-white p-4 sm:mt-5 sm:p-5 md:p-7">
          <h2 className="mb-4 text-base font-bold text-gray-800 sm:mb-5 sm:text-lg">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="hidden overflow-x-auto rounded-xl border border-gray-200 md:block">
            <table className="w-full min-w-[650px] border-collapse text-sm">
              <thead>
                <tr className="bg-[#f1f7f2] text-gray-600">
                  <th className="px-4 py-3 text-left font-medium">
                    বাজার
                  </th>

                  <th className="px-4 py-3 text-left font-medium">
                    বিভাগ
                  </th>

                  <th className="px-4 py-3 text-right font-medium">
                    সর্বনিম্ন
                  </th>

                  <th className="px-4 py-3 text-right font-medium">
                    সর্বোচ্চ
                  </th>

                  <th className="px-4 py-3 text-right font-medium">
                    গড়
                  </th>
                </tr>
              </thead>

              <tbody>
                {markets.map((market, index) => {
                  const marketAverage =
                    (market.min + market.max) / 2;

                  return (
                    <tr
                      key={`${market.market}-${index}`}
                      className="border-t border-gray-200"
                    >
                      <td className="px-4 py-3 font-medium text-gray-700">
                        {market.market}
                      </td>

                      <td className="px-4 py-3 text-gray-600">
                        {market.division}
                      </td>

                      <td className="px-4 py-3 text-right text-gray-700">
                        {market.min} টাকা
                      </td>

                      <td className="px-4 py-3 text-right text-gray-700">
                        {market.max} টাকা
                      </td>

                      <td className="px-4 py-3 text-right font-semibold text-gray-800">
                        {marketAverage.toFixed(2)} টাকা
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="space-y-3 md:hidden">
            {markets.map((market, index) => {
              const marketAverage =
                (market.min + market.max) / 2;

              return (
                <div
                  key={`${market.market}-${index}`}
                  className="rounded-xl border border-gray-200 p-3 sm:p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-semibold text-gray-800">
                        {market.market}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        {market.division}
                      </p>
                    </div>

                    <span className="shrink-0 rounded-full bg-[#f1f7f2] px-2 py-1 text-[10px] text-gray-600">
                      {unitText}
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="rounded-lg bg-gray-50 p-2">
                      <p className="text-[10px] text-gray-500">
                        সর্বনিম্ন
                      </p>

                      <p className="mt-1 text-sm font-semibold text-gray-700">
                        {market.min}
                      </p>
                    </div>

                    <div className="rounded-lg bg-gray-50 p-2">
                      <p className="text-[10px] text-gray-500">
                        সর্বোচ্চ
                      </p>

                      <p className="mt-1 text-sm font-semibold text-gray-700">
                        {market.max}
                      </p>
                    </div>

                    <div className="rounded-lg bg-gray-50 p-2">
                      <p className="text-[10px] text-gray-500">
                        গড়
                      </p>

                      <p className="mt-1 text-sm font-semibold text-gray-700">
                        {marketAverage.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetailsPage;