import React from "react";
import CardDetails from "../component/CardDetails";

const AllProductPage = async () => {
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


  return (
   
    <div className="w-full md-[40px] rounded-[30px] bg-[#f8faf8] px-4 py-8">



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

export default AllProductPage;