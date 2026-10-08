import { notFound } from "next/navigation";
import SortDataPage from "../../sortData/SortData";
import React from "react";


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
    notFound()
   }
  

  const data = await res.json();
  if (!data || data.length === 0) {
    notFound();
  }
  const resdata = [...data]

  return (
    <div>
     <div className="mt-3 flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1f7f2] text-3xl">
  {resdata[0]?.categoryIcon}
  </div>

  <div>
    <h1 className="text-xl font-bold text-gray-800">
      {resdata[0]?.categoryNameBn}
    </h1>

    <p className="text-xs text-gray-500">
      {resdata.length}টি পণ্যের আজকের দাম ও পরিবর্তন
    </p>
  </div>
</div>
      <div className="mt-3">
      <SortDataPage data={data} />
      </div>
    </div>
  );
};

export default CategoriesPage;