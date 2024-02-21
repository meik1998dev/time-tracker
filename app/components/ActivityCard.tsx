"use client";
import React, { ReactElement } from "react";
import { Activity } from "../lib/types";
import { BsThreeDots } from "react-icons/bs";
import { useGlobalContext } from "../lib/globalContext";

export const ActivityCard = ({
  activity,
  icon,
  color,
}: {
  activity: Activity;
  icon: ReactElement;
  color: string;
}) => {
  const { selectedTime } = useGlobalContext();
  const { current, previous } =
    activity.timeframes[selectedTime as keyof typeof activity.timeframes];

  return (
    <div
      className={`h-full flex flex-col justify-end  overflow-hidden bg-clip-padding rounded-2xl relative w-full ${color}`}
    >
      <span className="absolute right-0 -top-3 opacity-15 rotate-45 text-black z-20 text-7xl">
        {icon}
      </span>

      <div className="h-4/5 rounded-2xl absolute z-50 bottom-0 hover:bg-opacity-95 transition-all w-full bg-dark-blue p-5">
        <div className="flex flex-col gap-3 h-full">
          <div className="flex justify-between  mb-auto items-center">
            <span className="text-sm">{activity.title}</span>
            <button>
              <BsThreeDots />
            </button>
          </div>

          <div className="flex md:flex-col justify-between gap-3 items-center md:items-start">
            <h3 className="md:text-4xl text-3xl font-light mt-auto">{current}hrs</h3>

            <p className="opacity-50 text-xs">
              {labels[selectedTime as keyof typeof activity.timeframes]} - {previous}hrs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const labels = {
  daily: "Yesterday",
  weekly: "Last Week",
  monthly: "Last Month",
};
