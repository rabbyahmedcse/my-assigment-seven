import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-[#f5faf6] px-4 py-4 sm:px-6 sm:py-6 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-4 flex items-center gap-1.5 sm:mb-5 sm:gap-2">
          <div className="h-3 w-8 animate-pulse rounded bg-gray-200 sm:w-10"></div>
          <div className="h-3 w-3 animate-pulse rounded bg-gray-200"></div>
          <div className="h-3 w-12 animate-pulse rounded bg-gray-200 sm:w-16"></div>
          <div className="h-3 w-3 animate-pulse rounded bg-gray-200"></div>
          <div className="h-3 w-20 animate-pulse rounded bg-gray-200 sm:w-24"></div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 md:p-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-6">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <div className="h-16 w-16 shrink-0 animate-pulse rounded-xl bg-gray-200 sm:h-20 sm:w-20"></div>

              <div className="min-w-0">
                <div className="h-6 w-36 animate-pulse rounded bg-gray-200 sm:h-7 sm:w-48"></div>

                <div className="mt-2 h-3 w-24 animate-pulse rounded bg-gray-200 sm:mt-3 sm:w-32"></div>

                <div className="mt-2 h-3 w-48 animate-pulse rounded bg-gray-200 sm:mt-3 sm:w-64"></div>

                <div className="mt-3 flex flex-wrap gap-2">
                  <div className="h-6 w-16 animate-pulse rounded-full bg-gray-200 sm:h-7 sm:w-20"></div>
                  <div className="h-6 w-20 animate-pulse rounded-full bg-gray-200 sm:h-7 sm:w-24"></div>
                </div>
              </div>
            </div>

            <div className="h-28 w-full animate-pulse rounded-xl bg-[#eef5ef] sm:h-32 md:w-36"></div>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4 sm:mt-5 sm:p-5 md:p-7">
          <div className="mb-4 h-5 w-32 animate-pulse rounded bg-gray-200 sm:mb-5 sm:w-36"></div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-gray-200 p-4 sm:p-5"
              >
                <div className="h-3 w-20 animate-pulse rounded bg-gray-200 sm:w-24"></div>

                <div className="mt-3 h-6 w-24 animate-pulse rounded bg-gray-200 sm:h-7 sm:w-28"></div>

                <div className="mt-2 h-3 w-32 animate-pulse rounded bg-gray-200 sm:mt-3 sm:w-40"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4 sm:mt-5 sm:p-5 md:p-7">
          <div className="mb-4 h-5 w-44 animate-pulse rounded bg-gray-200 sm:mb-5 sm:w-52"></div>

          <div className="hidden overflow-hidden rounded-xl border border-gray-200 md:block">
            <div className="flex items-center justify-between bg-[#eef5ef] px-4 py-3 sm:px-5 sm:py-4">
              <div className="h-3 w-16 animate-pulse rounded bg-gray-200 sm:w-20"></div>
              <div className="h-3 w-12 animate-pulse rounded bg-gray-200 sm:w-16"></div>
              <div className="h-3 w-12 animate-pulse rounded bg-gray-200 sm:w-16"></div>
              <div className="h-3 w-12 animate-pulse rounded bg-gray-200 sm:w-16"></div>
              <div className="h-3 w-8 animate-pulse rounded bg-gray-200 sm:w-10"></div>
            </div>

            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-5 sm:py-4"
              >
                <div className="h-3 w-24 animate-pulse rounded bg-gray-200 sm:w-32"></div>
                <div className="h-3 w-12 animate-pulse rounded bg-gray-200 sm:w-16"></div>
                <div className="h-3 w-12 animate-pulse rounded bg-gray-200 sm:w-16"></div>
                <div className="h-3 w-12 animate-pulse rounded bg-gray-200 sm:w-16"></div>
                <div className="h-3 w-10 animate-pulse rounded bg-gray-200 sm:w-14"></div>
              </div>
            ))}
          </div>

          <div className="space-y-3 md:hidden">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-gray-200 p-3 sm:p-4"
              >
                <div className="h-4 w-32 animate-pulse rounded bg-gray-200 sm:w-40"></div>

                <div className="mt-2 h-3 w-16 animate-pulse rounded bg-gray-200 sm:w-20"></div>

                <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:gap-3">
                  <div className="h-9 animate-pulse rounded bg-gray-100 sm:h-10"></div>
                  <div className="h-9 animate-pulse rounded bg-gray-100 sm:h-10"></div>
                  <div className="h-9 animate-pulse rounded bg-gray-100 sm:h-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 py-6 sm:py-8">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-200 border-t-green-600"></div>

          <p className="text-xs text-gray-500 sm:text-sm">
            বাজারের তথ্য লোড হচ্ছে...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;