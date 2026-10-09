import React from "react";
import CardDetails from "../component/CardDetails";
import { toast } from "react-toastify";
import { notFound } from "next/navigation";

export const instant = false;

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
    toast.warning("Please wait");
    notFound();
  }

  const data = await res.json();

  if (!data || data.length === 0) {
    toast.warning("Please wait");
    notFound();
  }

  return (
    <div className="w-full min-w-0 rounded-[30px] bg-[#f8faf8] py-6 sm:py-8">
      <section className="mx-auto mt-4 w-full max-w-6xl sm:mt-6 md:mt-8">
        <h1 className="mb-2 text-[16px] font-bold text-gray-800 sm:text-lg">
          সব পণ্য
        </h1>

        <p className="mt-1 text-[11px] text-gray-500 sm:text-xs">
          মোট {data.length}টি পণ্য দেখানো হচ্ছে
        </p>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {data.map((n) => (
            <CardDetails key={n.id} n={n} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllProductPage;