import Link from "next/link";
import React from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Mosquee = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    return null;
  }

  const data = await res.json();

  if (!data || data.length === 0) {
    return null;
  }

  const getBanglaUnit = (unit) => {
    if (unit === "kg") return "কেজি";
    if (unit === "litre") return "লিটার";
    if (unit === "piece") return "পিস";
    if (unit === "dozen") return "ডজন";

    return unit;
  };

  return (
    <div className="w-full overflow-hidden border-y border-gray-200 bg-white">
      <MarqueeText
        className="!flex !h-full !items-center !leading-none"
        pauseOnHover={true}
        duration={13}
        direction="right"
      >
        {data.map((item) => (
          <Link key={item.id} href={`/product/${item.id}`}>
            <span className="flex h-9 items-center sm:h-10">
              <span className="mx-3 inline-flex h-full items-center whitespace-nowrap text-[11px] leading-none text-gray-700 sm:mx-6 sm:text-[13px]">
                <span className="mr-1.5 text-xs sm:mr-2 sm:text-sm">
                  {item.categoryIcon}
                </span>

                <span className="font-medium">
                  {item.nameBn}
                </span>

                <span className="ml-1.5 font-bold sm:ml-2">
                  {item.today} টাকা/{getBanglaUnit(item.unit)}
                </span>

                <span
                  className={`ml-1.5 font-bold sm:ml-2 ${
                    item.change.dir === "up"
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {item.change.dir === "up" ? "▲" : "▼"}{" "}
                  {item.change.pct}%
                </span>
              </span>

              <span className="text-gray-300">•</span>
            </span>
          </Link>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Mosquee;