"use client";
import { createContext, useContext, useState } from "react";

type GlobalContext = {
  selectedTime: string;
  setSelectedTime: (time: string) => void;
};

export const AppContext = createContext<GlobalContext | null>(null);

export function GlobalStateWrapper({ children }: { children: React.ReactNode }) {
  const [selectedTime, setSelectedTime] = useState<string>("daily");

  return (
    <AppContext.Provider value={{ selectedTime, setSelectedTime }}>{children}</AppContext.Provider>
  );
}
