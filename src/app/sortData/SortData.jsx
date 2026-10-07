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
      <div className=" flex items-center justify-end gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3">
        <span className="text-sm text-gray-600">
          সাজান
        </span>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none focus:border-green-500"
        >
          <option value="default">ডিফল্ট</option>
          <option value="low">দাম: কম থেকে বেশি</option>
          <option value="high">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      <div className="pt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {sortedData.map((n) => (
          <CardDetails key={n.id} n={n} />
        ))}
      </div>
    </div>
  );
};

export default SortDataPage;