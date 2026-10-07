import React from "react";
import CardDetails from "./CardDetails";

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

 
  const upCost = data.filter((item) => item.change.dir === "up").sort((a, b) => b.change.pct - a.change.pct).slice(0, 6);

  
  const downCost = data.filter((item) => item.change.dir === "down").sort((a, b) =>  a.change.pct - b.change.pct ).slice(0, 6);

  return (
   
    <div className="w-full md-[40px] rounded-[30px] bg-[#f8faf8] px-4 py-8">

  {/* Section A — আজ দাম বেড়েছে */}
  <section >
    <h1 className="mb-4 text-[16px] font-bold text-gray-800">
      <span className="text-red-500">▲</span> আজ দাম বেড়েছে
    </h1>

    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {upCost.map((n) => (
        <CardDetails key={n.id} n={n} />
      ))}
    </div>
  </section>


  {/* Section B — আজ দাম কমেছে */}
  <section className="mt-8">
    <h1 className="mb-4 text-[16px] font-bold text-gray-800">
      <span className="text-green-600">▼</span> আজ দাম কমেছে
    </h1>

    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {downCost.map((n) => (
        <CardDetails key={n.id} n={n} />
      ))}
    </div>
  </section>
{/* Sob ponno */}
<section className="mt-8">
    <h1 className="mb-4 text-[16px] font-bold text-gray-800">সব পণ্য</h1>
    <p className="mt-2 text-[11px] text-gray-500">
    মোট {data.length}টি পণ্য দেখানো হচ্ছে
  </p>
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((n) => (
        <CardDetails key={n.id} n={n} />
      ))}
    </div>
</section>
</div>
  );
};

export default CostUpDownPage;