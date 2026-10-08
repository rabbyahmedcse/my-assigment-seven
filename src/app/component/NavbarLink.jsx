"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const NavbarLink = () => {
  const pathname = usePathname();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch("https://api.abcz.workers.dev/api/bazardor/categories" );

      if (!res.ok) {
        return;
      }

      const result = await res.json();
      setData(result);
    };

    getCategories();
  }, []);

  return (
    <div className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-14 max-w-[1100px] items-center justify-between px-6">
        {data.map((item) => {
          const isActive = pathname === `/category/${item.slug}`;

          return (
            <Link
              key={item.id}
              href={`/category/${item.slug}`}
              className={`flex items-center gap-2 rounded-lg px-3 py-1 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-green-700 text-white"
                  : "text-gray-700 hover:bg-green-50 hover:text-green-600"
              }`}
            >
              <span className="text-lg">{item.icon}</span>

              <span>{item.nameBn}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavbarLink;