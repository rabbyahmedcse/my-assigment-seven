import { notFound } from "next/navigation";
import SortDataPage from "../../sortData/SortData";
import React from "react";
import { toast } from "react-toastify";

export const instant = false;

const CategoriesPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    notFound();
    toast.warning("Please wait");
  }

  const data = await res.json();

  if (!data || data.length === 0) {
    notFound();
    toast.warning("Please wait");
  }

  const resdata = [...data];

  return (
    <div className="w-full px-4 sm:px-6 md:px-8">
      <div className="mx-auto mt-3 flex w-full max-w-6xl items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 sm:gap-4 sm:px-5 sm:py-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f1f7f2] text-2xl sm:h-12 sm:w-12 sm:text-3xl">
          {resdata[0]?.categoryIcon}
        </div>

        <div className="min-w-0">
          <h1 className="text-lg font-bold text-gray-800 sm:text-xl">
            {resdata[0]?.categoryNameBn}
          </h1>

          <p className="text-[11px] text-gray-500 sm:text-xs">
            {resdata.length}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      <div className="mx-auto mt-3 w-full max-w-6xl">
        <SortDataPage data={data} />
      </div>
    </div>
  );
};

export default CategoriesPage;