"use client";
import React from "react";
import { GlobalStateWrapper } from "./globalContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <GlobalStateWrapper>{children}</GlobalStateWrapper>;
};
