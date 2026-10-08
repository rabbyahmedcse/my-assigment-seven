import React from "react";

const Footer = () => {
  return (
    <footer className="pt-5 mt-3 w-full border-t border-gray-200 bg-white">
      <div className="mx-auto flex min-h-[55px] w-full max-w-[1100px] items-center justify-between gap-6 px-6">
        
        {/* Left */}
        <p className="text-[10px] text-gray-600">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>

        {/* Right */}
        <p className="text-right text-[10px] text-gray-600">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>

      </div>
    </footer>
  );
};

export default Footer;