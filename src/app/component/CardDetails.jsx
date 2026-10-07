import React from "react";

const CardDetails = ({ n }) => {
  const isUp = n.change.dir === "up";

  return (
    <div className="rounded-xl border border-gray-200 bg-[#fbfdfb] p-3 transition hover:shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f1f7f2] text-2xl">
          {n.image}
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-800">
            {n.nameBn}
          </h3>

          <p className="text-[11px] text-gray-500">
            {n.unit === "kg"
              ? "প্রতি কেজি"
              : n.unit === "liter"
              ? "প্রতি লিটার"
              : n.unit === "dozen"
              ? "প্রতি ডজন"
              : "প্রতি পিস"}
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-end justify-between">
        <div>
          <p className="text-[10px] text-gray-500">আজকের দাম</p>

          <p className="text-sm font-bold text-gray-800">
            {n.today} টাকা
          </p>
        </div>

        <span
          className={`rounded-full px-2 py-1 text-[10px] font-medium ${
            isUp
              ? "bg-red-50 text-red-500"
              : "bg-green-50 text-green-600"
          }`}
        >
          {isUp ? "▲" : "▼"} {n.change.pct}%
        </span>
      </div>
    </div>
  );
};

export default CardDetails;