
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Mosquee = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    toast.warning("Please wait");
    notFound();
  }

  const data = await res.json();
   if (!data || data.length === 0) {
        toast.warning("Please wait");
        notFound();
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
          <span
            
            className="flex h-10 items-center"
          >

            {/* Product */}
            <span
              className="
                mx-6
                inline-flex
                h-full
                items-center
                whitespace-nowrap
                text-[13px]
                leading-none
                text-gray-700
              "
            >
              {/* Icon */}
              <span className="mr-2 text-sm">
                {item.categoryIcon}
              </span>

              {/* Name */}
              <span className="font-medium">
                {item.nameBn}
              </span>

              {/* Price */}
              <span className="ml-2 font-bold">
                {item.today} টাকা/{getBanglaUnit(item.unit)}
              </span>

              {/* Change */}
              <span
                className={`ml-2 font-bold ${
                  item.change.dir === "up"
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {item.change.dir === "up" ? "▲" : "▼"}{" "}
                {item.change.pct}%
              </span>
            </span>

            {/* Separator */}
            <span className="text-gray-300">•</span>

          </span>
          </Link>
        ))}
      </MarqueeText>
    
    </div>
  );
};

export default Mosquee;