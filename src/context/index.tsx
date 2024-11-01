/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext } from "react";

export const AppContext = createContext({
  handlePillClick: (_: string) => {},
  view: "",
  isLoading: false,
  boxTitle: "",
  boxQuestion: "",
  handleRestart: () => {},
});

export const useAppData = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppData must be used within a AppProvider");
  }
  return context;
};