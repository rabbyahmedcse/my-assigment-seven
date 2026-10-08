"use client";

import React, { useState } from "react";
import CardDetails from "../component/CardDetails";

const SortDataPage = ({ data }) => {
  const [sort, setSort] = useState("default");

  const sortedData = [...data];

  if (sort === "low") {
    sortedData.sort((a, b) => a.today - b.today);
  }

  if (sort === "high") {
    sortedData.sort((a, b) => b.today - a.today);
  }

  return (
    <div>
      <div className="flex w-full items-center justify-end gap-2 rounded-xl border border-gray-200 bg-white px-3 py-3 sm:px-4">
        <span className="text-xs text-gray-600 sm:text-sm">
          সাজান
        </span>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-auto rounded-lg border border-gray-200 bg-white px-2.5 py-2 text-xs text-gray-700 outline-none focus:border-green-500 sm:px-3 sm:text-sm"
        >
          <option value="default">ডিফল্ট</option>
          <option value="low">দাম: কম থেকে বেশি</option>
          <option value="high">দাম: বেশি থেকে কম</option>
        </select>
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