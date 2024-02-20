import Image from "next/image";
import React from "react";

export const UserMainCard = () => {
  const timePeriods = ["Daily", "Weekly", "Monthly"];

  return (
    <div className="w-full h-full flex flex-col justify-start bg-dark-blue text-white rounded-b-xl">
      <div className="h-60 bg-violet p-7 rounded-xl text-white flex flex-col items-start">
        <div className="rounded-full border-2 w-14 h-14 border-white mb-7">
          <Image
            width={500}
            height={500}
            className="rounded-full object-cover"
            src={"https://i.pravatar.cc/100"}
            alt="avatar"
          />
        </div>

        <h3 className="text-white opacity-60 text-xs">Report for</h3>

        <h1 className="text-2xl font-light">Mohamad Aleik</h1>
      </div>

      <div className="flex flex-col mt-auto py-5 gap-3 items-start px-7">
        {timePeriods.map((time) => (
          <button className="text-sm hover:opacity-80" key={time}>
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};
