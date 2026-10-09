import React from "react";
import CardDetails from "./CardDetails";
import AllProductPage from "../allproduct/page";
import { notFound } from "next/navigation";

const CostUpDownPage = async () => {
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

  const upCost = data.filter((item) => item.change.dir === "up").sort((a, b) => b.change.pct - a.change.pct).slice(0, 6);

  const downCost = data.filter((item) => item.change.dir === "down").sort((a, b) => a.change.pct - b.change.pct).slice(0, 6);

  return (
    <div className="w-full rounded-[30px] bg-[#f8faf8] px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-10">
      <section className="mx-auto w-full max-w-6xl">
        <h1 className="mb-4 text-[16px] font-bold text-gray-800 sm:text-lg">
          <span className="text-red-500">▲</span> আজ দাম বেড়েছে
        </h1>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {upCost.map((n) => (
            <CardDetails key={n.id} n={n} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 w-full max-w-6xl">
        <h1 className="mb-4 text-[16px] font-bold text-gray-800 sm:text-lg">
          <span className="text-green-600">▼</span> আজ দাম কমেছে
        </h1>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {downCost.map((n) => (
            <CardDetails key={n.id} n={n} />
          ))}
        </div>
      </section>

      <section
        id="products"
        className="w-full min-w-0"
      >
        <AllProductPage></AllProductPage>
      </section>
    </div>
  );
};

export default CostUpDownPage;