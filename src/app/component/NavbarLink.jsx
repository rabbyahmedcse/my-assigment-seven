import Link from "next/link";
import React from "react";

const NavbarLink = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
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
    <div className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-14 max-w-[1100px] items-center justify-between px-6">
        {data.map((item) => (
          <Link key={item.id} href={`/category/${item.slug}`}>
          <div
            
            className="flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-green-600"
          >
            <span className="text-lg">
              {item.icon}
            </span>

            <span>
              {item.nameBn}
            </span>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavbarLink;