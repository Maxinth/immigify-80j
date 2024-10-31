import { AppContext } from "@/context";
import React, { useEffect, useState } from "react";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [, setOccupation] = useState("");
  const [view, setView] = useState("");
  const [boxTitle, setBoxTitle] = useState("Undergraduate Degree");
  const [boxQuestion, setBoxQuestion] = useState(
    "What’s your country of region?"
  );

  const handlePillClick = (val: string) => {
    return view === "country" || view === ""
      ? setSelectedCountry(val)
      : setOccupation(val);
  };

  const handleRestart = () => {
    setView("");
    setBoxTitle("Undergraduate Degree");
    setBoxQuestion("What’s your country of region?");
    setSelectedCountry("");
    setOccupation("");
  };

  useEffect(() => {
    if (selectedCountry === "Nigeria") {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setView("occupation");
        setBoxTitle("Nigeria");
        setBoxQuestion("What’s your current occupation?");
      }, 1000);
    }
  }, [isLoading]);
  return (
    <AppContext.Provider
      value={{
        view,
        handlePillClick,
        isLoading,
        boxTitle,
        boxQuestion,
        handleRestart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
