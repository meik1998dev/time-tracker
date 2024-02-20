"use client";
import { createContext, useContext, useState } from "react";

type GlobalContext = {
  selectedTime: string;
  setSelectedTime: (time: string) => void;
};

const AppContext = createContext<GlobalContext | null>(null);

export function GlobalStateWrapper({ children }: { children: React.ReactNode }) {
  const [selectedTime, setSelectedTime] = useState<string>("daily");

  return (
    <AppContext.Provider value={{ selectedTime, setSelectedTime }}>{children}</AppContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalStateWrapper");
  }
  return context;
}
