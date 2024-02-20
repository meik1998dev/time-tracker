"use client";
import Image from "next/image";
import React from "react";
import { useGlobalContext } from "../lib/globalContext";

export const UserMainCard = () => {
  const timePeriods = ["daily", "weekly", "monthly"];
  const { selectedTime, setSelectedTime } = useGlobalContext();

  const handleSelect = (time: string) => setSelectedTime(time);

  return (
    <div className="w-full h-full flex flex-col justify-start bg-dark-blue text-white rounded-b-xl">
      <div className="h-3/5 bg-violet p-7 rounded-xl text-white flex md:gap-6 gap-4 md:flex-col  md:items-start items-center">
        <div className="rounded-full shrink-0 border-2 w-14 h-14 border-white md:mb-7">
          <Image
            width={500}
            height={500}
            className="rounded-full object-cover"
            src={"https://i.pravatar.cc/100"}
            alt="avatar"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-white opacity-60 text-xs">Report for</h3>
          <h1 className="text-2xl font-light">Mohamad Aleik</h1>
        </div>
      </div>

      <div className="flex md:flex-col flex-row mt-auto py-5 gap-3 justify-between items-start px-7">
        {timePeriods.map((time) => (
          <button
            onClick={() => handleSelect(time)}
            className={`text-sm capitalize hover:opacity-80 transition-all 
              ${selectedTime === time ? "opacity-100" : "opacity-60"}
            `}
            key={time}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};
