import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-[#f5faf6]">
      <div className="mx-auto w-full max-w-[1100px] px-4 py-6">

        {/* Breadcrumb Skeleton */}
        <div className="mb-5 flex items-center gap-2">
          <div className="h-3 w-10 animate-pulse rounded bg-gray-200"></div>
          <div className="h-3 w-3 animate-pulse rounded bg-gray-200"></div>
          <div className="h-3 w-16 animate-pulse rounded bg-gray-200"></div>
          <div className="h-3 w-3 animate-pulse rounded bg-gray-200"></div>
          <div className="h-3 w-24 animate-pulse rounded bg-gray-200"></div>
        </div>

        {/* Product Header Skeleton */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-7">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-4">

              {/* Image */}
              <div className="h-20 w-20 shrink-0 animate-pulse rounded-xl bg-gray-200"></div>

              <div>
                {/* Title */}
                <div className="h-7 w-48 animate-pulse rounded bg-gray-200"></div>

                {/* Subtitle */}
                <div className="mt-3 h-3 w-32 animate-pulse rounded bg-gray-200"></div>

                {/* Description */}
                <div className="mt-3 h-3 w-64 animate-pulse rounded bg-gray-200"></div>

                {/* Tags */}
                <div className="mt-3 flex gap-2">
                  <div className="h-7 w-20 animate-pulse rounded-full bg-gray-200"></div>
                  <div className="h-7 w-24 animate-pulse rounded-full bg-gray-200"></div>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="h-32 w-full animate-pulse rounded-xl bg-[#eef5ef] md:w-36"></div>

          </div>
        </div>

        {/* Price Summary */}
        <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-5 md:p-7">

          <div className="mb-5 h-5 w-36 animate-pulse rounded bg-gray-200"></div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-gray-200 p-5"
              >
                <div className="h-3 w-24 animate-pulse rounded bg-gray-200"></div>

                <div className="mt-3 h-7 w-28 animate-pulse rounded bg-gray-200"></div>

                <div className="mt-3 h-3 w-40 animate-pulse rounded bg-gray-200"></div>
              </div>
            ))}

          </div>
        </div>

        {/* Market Price */}
        <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-5 md:p-7">

          <div className="mb-5 h-5 w-52 animate-pulse rounded bg-gray-200"></div>

          {/* Table Header */}
          <div className="hidden overflow-hidden rounded-xl border border-gray-200 md:block">

            <div className="flex items-center justify-between bg-[#eef5ef] px-5 py-4">
              <div className="h-3 w-20 animate-pulse rounded bg-gray-200"></div>
              <div className="h-3 w-16 animate-pulse rounded bg-gray-200"></div>
              <div className="h-3 w-16 animate-pulse rounded bg-gray-200"></div>
              <div className="h-3 w-16 animate-pulse rounded bg-gray-200"></div>
              <div className="h-3 w-10 animate-pulse rounded bg-gray-200"></div>
            </div>

            {/* Rows */}
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between border-t border-gray-200 px-5 py-4"
              >
                <div className="h-3 w-32 animate-pulse rounded bg-gray-200"></div>
                <div className="h-3 w-16 animate-pulse rounded bg-gray-200"></div>
                <div className="h-3 w-16 animate-pulse rounded bg-gray-200"></div>
                <div className="h-3 w-16 animate-pulse rounded bg-gray-200"></div>
                <div className="h-3 w-14 animate-pulse rounded bg-gray-200"></div>
              </div>
            ))}

          </div>

          {/* Mobile Skeleton */}
          <div className="space-y-3 md:hidden">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-gray-200 p-4"
              >
                <div className="h-4 w-40 animate-pulse rounded bg-gray-200"></div>

                <div className="mt-2 h-3 w-20 animate-pulse rounded bg-gray-200"></div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="h-10 animate-pulse rounded bg-gray-100"></div>
                  <div className="h-10 animate-pulse rounded bg-gray-100"></div>
                  <div className="h-10 animate-pulse rounded bg-gray-100"></div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Loading Text */}
        <div className="flex items-center justify-center gap-2 py-8">

          <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-200 border-t-green-600"></div>

          <p className="text-sm text-gray-500">
            বাজারের তথ্য লোড হচ্ছে...
          </p>

        </div>

      </div>
    </div>
  );
};

export default Loading;