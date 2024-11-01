import { Box, Text, Input, Button } from "@chakra-ui/react";
import PillBox from "./PillBox";
import { useAppData } from "@/context";
import { SendIcon } from "@/assets/icons";
import { useState } from "react";

const OccupationsView = () => {
  const {
    handlePillClick,
    occupation,
    handleAddNewOccupation,
    occupations: occupationsData,
  } = useAppData();
  const [occupationInput, setOccupationInput] = useState("");

  const handleSubmit = () => {
    handleAddNewOccupation(occupationInput);
    setOccupationInput("");
  };
  return (
    <Box className="flex items-start gap-[40px] flex-col justify-start">
      <Box className="flex items-center gap-[10px] flex-wrap">
        {occupationsData.map((item) => (
          <PillBox
            val={item}
            key={item}
            isSelected={occupation === item}
            handleClick={() => handlePillClick(item)}
          />
        ))}
      </Box>
      <Box className="flex items-center gap-3 justify-between w-full">
        <Text className="">Occupation Not Listed above?</Text>
        <Box className="flex items-center gap-2 flex-1">
          <Input
            placeholder="Type in your occupation"
            value={occupationInput}
            onChange={(e) => setOccupationInput(e.target.value)}
            className=" !border-b !border-b-[#a6a6a6] rounded-none outline-none "
            _placeholder={{
              color: "#A6A6A6",
              fontStyle: "italic",
              fontSize: "12px",
            }}
          />
          <Button
            variant="outline"
            onClick={handleSubmit}
            className="bg-[#090909] !rounded-[10px] p-1 px-4  "
          >
            <SendIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OccupationsView;
