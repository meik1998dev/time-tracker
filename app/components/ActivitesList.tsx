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
    Work: "bg-gradient-to-b from-light-red to-transparent",
    Play: "bg-gradient-to-b from-soft-blue to-transparent",
    Study: "bg-gradient-to-b from-light-red-study to-transparent",
    Exercise: "bg-gradient-to-b from-lime-green to-transparent",
    Social: "bg-gradient-to-b from-violet to-transparent",
    "Self Care": "bg-gradient-to-b from-soft-orange to-transparent",
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
