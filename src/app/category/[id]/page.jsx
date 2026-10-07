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
    return null;
  }

  const data = await res.json();

  return (
    <div>
      <SortDataPage data={data} />
    </div>
  );
};

export default CategoriesPage;