import React from "react";

const Footer = () => {
  return (
    <footer className="mt-3 w-full border-t border-gray-200 bg-white pt-5">
      <div className="mx-auto flex min-h-[55px] w-full max-w-6xl flex-col items-center justify-center gap-2 px-4 text-center sm:flex-row sm:justify-between sm:gap-6 sm:px-6 sm:text-left">
        <p className="text-[10px] text-gray-600 sm:text-left">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>

        <p className="text-[10px] text-gray-600 sm:text-right">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  );
};

export default Footer;