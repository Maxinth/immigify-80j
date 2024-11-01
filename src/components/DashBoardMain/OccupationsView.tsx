import { Box } from "@chakra-ui/react";
import { occupationsData } from "./data";
import PillBox from "./PillBox";
import { useAppData } from "@/context";

const OccupationsView = () => {
  const { handlePillClick } = useAppData();
  return (
    <Box className="flex items-center gap-[10px] flex-wrap">
      {occupationsData.map((item) => (
        <PillBox
          val={item}
          key={item}
          handleClick={() => handlePillClick(item)}
        />
      ))}
    </Box>
  );
};

export default OccupationsView;
