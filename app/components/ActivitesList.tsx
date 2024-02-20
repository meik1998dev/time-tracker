import React from "react";
import { ActivityCard } from "./ActivityCard";
import { Activity } from "../lib/types";
import { MdWork } from "react-icons/md";
import { BiSolidJoystick } from "react-icons/bi";
import { GiOpenBook } from "react-icons/gi";
import { FaHeartCirclePlus, FaPersonRunning } from "react-icons/fa6";
import { AiOutlineWechat } from "react-icons/ai";

export const ActivitesList = ({ activities }: { activities: Activity[] }) => {
  const iconsMap = {
    Work: <MdWork />,
    Play: <BiSolidJoystick />,
    Study: <GiOpenBook />,
    Exercise: <FaPersonRunning />,
    Social: <AiOutlineWechat />,
    "Self Care": <FaHeartCirclePlus />,
  };

  const colorsMap = {
    Work: "bg-light-red",
    Play: "bg-soft-blue",
    Study: "bg-light-red-study",
    Exercise: "bg-lime-green",
    Social: "bg-violet",
    "Self Care": "bg-soft-orange",
  };

  return (
    <>
      {activities.map((activity, i) => (
        <div
          key={activity.title}
          className={`md:col-span-2 col-span-full md:row-span-3 row-span-5 md:col-start-${
            (i % 3) * 2 + 3
          } md:row-start-${Math.floor(i / 3) * 3 + 1}`}
        >
          <ActivityCard
            color={colorsMap[activity.title as keyof typeof colorsMap]}
            activity={activity}
            icon={iconsMap[activity.title as keyof typeof iconsMap]}
          />
        </div>
      ))}
    </>
  );
};
