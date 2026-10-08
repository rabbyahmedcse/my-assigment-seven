import Link from "next/link";
import React from "react";

const CardDetails = ({ n }) => {
  const isUp = n.change.dir === "up";
  const isDown = n.change.dir === "down";
  const isFlat = n.change.dir === "flat";

  const changeIcon = isUp ? "▲" : isDown ? "▼" : "—";

  const changeStyle = isUp
    ? "bg-green-50 text-green-600"
    : isDown
    ? "bg-red-50 text-red-500"
    : "bg-gray-100 text-gray-500";

  return (
    <div>
      <Link href={`/product/${n.id}`}>
        <div className="rounded-xl border border-gray-200 bg-[#fbfdfb] p-3 transition hover:shadow-sm sm:p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f1f7f2] text-xl sm:h-11 sm:w-11 sm:text-2xl">
              {n.image}
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="truncate text-sm font-semibold text-gray-800 sm:text-[15px]">
                {n.nameBn}
              </h3>

              <p className="text-[11px] text-gray-500 sm:text-xs">
                {n.unit === "kg"
                  ? "প্রতি কেজি"
                  : n.unit === "litre"
                  ? "প্রতি লিটার"
                  : n.unit === "dozen"
                  ? "প্রতি ডজন"
                  : "প্রতি পিস"}
              </p>
            </div>
          </div>

          <div className="mt-3 flex items-end justify-between gap-2">
            <div className="min-w-0">
              <p className="text-[10px] text-gray-500 sm:text-[11px]">
                আজকের দাম
              </p>

              <p className="text-sm font-bold text-gray-800 sm:text-base">
                {n.today.toLocaleString("bn-BD")} টাকা
              </p>
            </div>

            <span
              className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-medium sm:px-2.5 sm:text-[11px] ${changeStyle}`}
            >
              {changeIcon} {n.change.pct.toLocaleString("bn-BD")}%
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardDetails;