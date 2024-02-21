import { useContext } from "react";
import { AppContext } from "../globalContext";

export function useGlobalContext() {
   const context = useContext(AppContext);
   if (!context) {
     throw new Error("useGlobalContext must be used within a GlobalStateWrapper");
   }
   return context;
 }
 