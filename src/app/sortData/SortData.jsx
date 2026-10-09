"use client";

import React, { useState } from "react";
import CardDetails from "../component/CardDetails";

const SortDataPage = ({ data }) => {
  const [sort, setSort] = useState("default");

  const toNumericPrice = (value) => {
    const normalized = String(value ?? "")
      .replace(/[০-৯]/g, (digit) =>
        String("০১২৩৪৫৬৭৮৯".indexOf(digit))
      )
      .replace(/,/g, "")
      .replace(/[^\d.-]/g, "");

    const price = Number(normalized);

    return Number.isFinite(price) ? price : 0;
  };

  const sortedData = [...data];

  if (sort === "low") {
    sortedData.sort(
      (a, b) => toNumericPrice(a.today) - toNumericPrice(b.today)
    );
  }

  if (sort === "high") {
    sortedData.sort(
      (a, b) => toNumericPrice(b.today) - toNumericPrice(a.today)
    );
  }

  return (
    <div>
      <div className="flex w-full items-center justify-end gap-2 rounded-xl border border-gray-200 bg-white px-3 py-3 sm:px-4">
        <span className="shrink-0 text-xs text-gray-600 sm:text-sm">
          সাজান
        </span>

        <div className="relative">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full appearance-none rounded-lg border border-gray-200 bg-white py-2 pl-3 pr-8 text-xs text-gray-700 outline-none transition focus:border-green-500 sm:text-sm"
          >
            <option value="default">ডিফল্ট</option>
            <option value="low">দাম: কম থেকে বেশি</option>
            <option value="high">দাম: বেশি থেকে কম</option>
          </select>

          <svg
            className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 pt-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {sortedData.map((n) => (
          <CardDetails key={n.id} n={n} />
        ))}
      </div>
    </div>
  );
};

export default SortDataPage;