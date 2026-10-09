"use client";

import Link from "next/link";
import { notFound, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const NavbarLink = () => {
  const pathname = usePathname();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch(
        "https://api.abcz.workers.dev/api/bazardor/categories"
      );

      if (!res.ok) {
        return null;
      }

      const result = await res.json();

      if (!result || result.length === 0) {
        return null;
      }

      setData(result);
    };

    getCategories();
  }, []);

  return (
    <div className="w-full overflow-x-auto border-b border-gray-200 bg-white">
      <div className="mx-auto flex min-h-14 w-full max-w-6xl items-center gap-1 px-3 sm:gap-2 sm:px-6 md:justify-between">
        {data.map((item) => {
          const isActive = pathname === `/category/${item.slug}`;

          return (
            <Link
              key={item.id}
              href={`/category/${item.slug}`}
              className={`flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors sm:gap-2 sm:px-3 sm:py-2 sm:text-sm ${
                isActive
                  ? "bg-green-700 text-white"
                  : "text-gray-700 hover:bg-green-50 hover:text-green-600"
              }`}
            >
              <span className="text-base sm:text-lg">{item.icon}</span>

              <span>{item.nameBn}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavbarLink;