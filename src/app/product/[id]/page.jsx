
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
   notFound()
  }

  const data = await res.json();
   if (!data || data.length === 0) {
      notFound();
    }

  const markets = data.markets ;

  // Minimum price
  const minPrice =
    markets.length > 0
      ? Math.min(...markets.map((item) => item.min))
      : 0;

  // Maximum price
  const maxPrice =
    markets.length > 0
      ? Math.max(...markets.map((item) => item.max))
      : 0;

  // Average price
  const averagePrice =
    markets.length > 0
      ? markets.reduce(
          (total, item) => total + (item.min + item.max) / 2,
          0
        ) / markets.length
      : 0;

  // Unit
  const unitText =
    data.unit === "kg"
      ? " কেজি"
      : data.unit === "litre"
      ? " লিটার"
      : data.unit === "dozen"
      ? " ডজন"
      : " পিস";

  const isUp = data.change?.dir === "up";

  // আজকের দাম গতকালের চেয়ে কত পরিবর্তন হয়েছে
  const priceDifference = data.today - data.yesterday;

  return (
    <div className="min-h-screen bg-[#f5faf6]">
      <div className="mx-auto w-full max-w-[1100px] px-4 py-6">

        {/* ================= Breadcrumb ================= */}
        <div className="mb-5 flex items-center gap-2 text-xs text-gray-500">
          <span>হোম</span>
          <span>›</span>

          <span>{data.categoryNameBn}</span>
          <span>›</span>

          <span className="font-medium text-gray-700">
            {data.nameBn}
          </span>
        </div>

        {/* ================= Top Summary ================= */}
        <section className="rounded-2xl border border-gray-200 bg-white p-5 md:p-7">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            {/* Left */}
            <div className="flex items-center gap-4">

              {/* Emoji */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-[#f1f7f2] text-5xl">
                {data.image}
              </div>

              {/* Information */}
              <div>
                <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
                  {data.nameBn}
                </h1>

                <p className="mt-1 text-xs text-gray-500">
                প্রতি { unitText} • {data.categoryNameBn}
                </p>

                <p className="mt-2 text-xs text-gray-600">
                  সকল বাজারের মূল্য অনুযায়ী আজ দামে{" "}
                  <span
                    className={
                      isUp ? "font-semibold text-red-500" : "font-semibold text-green-600"
                    }
                  >
                    {Math.abs(priceDifference)} টাকা{" "}
                    {isUp ? "বেড়েছে" : "কমেছে"}
                  </span>
                </p>

                {/* Category Tags */}
                <div className="mt-3 flex flex-wrap gap-2">

                  <span className="rounded-full bg-[#f1f7f2] px-3 py-1 text-xs font-medium text-gray-700">
                    {data.categoryIcon} {data.categoryNameBn}
                  </span>

                  <span className="rounded-full bg-[#f1f7f2] px-3 py-1 text-xs font-medium text-gray-700">
                    {unitText}
                  </span>

                </div>
              </div>
            </div>

            {/* Today's Price */}
            <div className="min-w-[150px] rounded-xl bg-[#f1f7f2] px-6 py-4 text-center">

              <p className="text-xs text-gray-500">
                আজকের দাম
              </p>

              <p className="mt-1 text-3xl font-bold text-gray-800">
                {data.today}
              </p>

              <p className="text-xs text-gray-500">
                টাকা / {unitText}
              </p>

              <p
                className={`mt-2 text-xs font-semibold ${
                  isUp
                    ? "text-red-500"
                    : "text-green-600"
                }`}
              >
                {isUp ? "▲" : "▼"} {data.change?.pct}%
              </p>

            </div>

          </div>
        </section>

        {/* ================= Price Summary ================= */}
        <section className="mt-5 rounded-2xl border border-gray-200 bg-white p-5 md:p-7">

          <h2 className="mb-5 text-lg font-bold text-gray-800">
            দামের সারসংক্ষেপ
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

            {/* Minimum */}
            <div className="rounded-xl border border-gray-200 p-5">

              <p className="text-xs text-gray-500">
                সর্বনিম্ন দাম
              </p>

              <p className="mt-2 text-2xl font-bold text-green-600">
                {minPrice} টাকা
              </p>

              <p className="mt-1 text-[11px] text-gray-500">
                সকল বাজারের মধ্যে সর্বনিম্ন
              </p>

            </div>

            {/* Maximum */}
            <div className="rounded-xl border border-gray-200 p-5">

              <p className="text-xs text-gray-500">
                সর্বোচ্চ দাম
              </p>

              <p className="mt-2 text-2xl font-bold text-red-500">
                {maxPrice} টাকা
              </p>

              <p className="mt-1 text-[11px] text-gray-500">
                সকল বাজারের মধ্যে সর্বোচ্চ
              </p>

            </div>

            {/* Average */}
            <div className="rounded-xl border border-gray-200 p-5">

              <p className="text-xs text-gray-500">
                গড় দাম
              </p>

              <p className="mt-2 text-2xl font-bold text-green-600">
                {averagePrice.toFixed(2)} টাকা
              </p>

              <p className="mt-1 text-[11px] text-gray-500">
                সব বাজারের গড় মূল্য
              </p>

            </div>

          </div>
        </section>

        {/* ================= Market Prices ================= */}
        <section className="mt-5 rounded-2xl border border-gray-200 bg-white p-5 md:p-7">

          <h2 className="mb-5 text-lg font-bold text-gray-800">
            বাজারভিত্তিক আজকের দাম
          </h2>

          {/* Desktop Table */}
          <div className="hidden overflow-hidden rounded-xl border border-gray-200 md:block">

            <table className="w-full border-collapse text-sm">

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

          {/* Mobile Cards */}
          <div className="space-y-3 md:hidden">

            {markets.map((market, index) => {

              const marketAverage =
                (market.min + market.max) / 2;

              return (
                <div
                  key={`${market.market}-${index}`}
                  className="rounded-xl border border-gray-200 p-4"
                >

                  <div className="flex items-start justify-between">

                    <div>
                      <h3 className="text-sm font-semibold text-gray-800">
                        {market.market}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        {market.division}
                      </p>
                    </div>

                    <span className="rounded-full bg-[#f1f7f2] px-2 py-1 text-[10px] text-gray-600">
                      {unitText}
                    </span>

                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">

                    <div>
                      <p className="text-[10px] text-gray-500">
                        সর্বনিম্ন
                      </p>
                      <p className="mt-1 text-sm font-semibold text-gray-700">
                        {market.min}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] text-gray-500">
                        সর্বোচ্চ
                      </p>
                      <p className="mt-1 text-sm font-semibold text-gray-700">
                        {market.max}
                      </p>
                    </div>

                    <div>
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