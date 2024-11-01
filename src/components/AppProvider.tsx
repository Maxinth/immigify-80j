import { AppContext } from "@/context";
import React, { useEffect, useState } from "react";
import {
  visaCardsData,
  occupationsData as occData,
} from "./DashBoardMain/data";
import { Toaster, toast } from "sonner";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [occupation, setOccupation] = useState("");
  const [view, setView] = useState("");
  const [boxTitle, setBoxTitle] = useState("Undergraduate Degree");
  const [boxQuestion, setBoxQuestion] = useState(
    "What’s your country of region?"
  );
  const [cardList, setCardList] = useState(visaCardsData);
  const [occupations, setOccupations] = useState(occData);

  const handleAddNewOccupation = (val: string) => {
    if (val.trim() !== "" && !occupations.includes(val.trim().toLowerCase())) {
      toast("", {
        description: "Adding new occupation",
        position: "top-right",
        duration: 1000,
        style: {
          background: "#4299e1",
          color: "white",
          fontSize: "16px",
        },
      });

      setTimeout(() => {
        setOccupations([...occupations, val]);
        toast("", {
          description: "Occupation Added",
          position: "top-right",
          duration: 1000,
          style: {
            background: "green",
            color: "white",
            fontSize: "16px",
          },
        });
      }, 2000);
    } else {
      toast("", {
        description: "Enter an occupation to continue",
        position: "top-right",
        duration: 1000,
        style: {
          background: "#4299e1",
          color: "white",
          fontSize: "16px",
        },
      });
      setOccupations(occupations);
    }
  };

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
    setCardList(visaCardsData);
  };

  useEffect(() => {
    if (selectedCountry === "Nigeria") {
      setIsLoading(true);
      setView("country");
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (occupation.toLowerCase() === "engineering") {
      setCardList([visaCardsData[0]]);
    } else {
      setCardList(visaCardsData);
    }
  }, [occupation]);

  useEffect(() => {
    if (isLoading) {
      setView("country");
      setTimeout(() => {
        setView("occupation");
        setBoxTitle("Nigeria");
        setBoxQuestion("What’s your current occupation?");
        setIsLoading(false);
      }, 3000);
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
        cardList,
        occupation,
        selectedCountry,
        occupations,
        handleAddNewOccupation,
      }}
    >
      <Toaster />
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
