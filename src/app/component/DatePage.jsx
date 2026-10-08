"use client";

import React, { useEffect, useState } from "react";

const DatePage = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date().toLocaleDateString("bn-BD", {
      dateStyle: "full",
    });

    setDate(today);
  }, []);

  return <p className="text-[10px] text-gray-500">{date}</p>;
};

export default DatePage;