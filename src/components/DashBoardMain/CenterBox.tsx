import { Box } from "@chakra-ui/react";
import IntroSection from "./IntroSection";
import InteractionsBox from "./InteractionsBox";
const CenterBox = () => {
  return (
    <Box className="border border-[#DADADA] w-[70%] h-[78%] rounded-[30px] py-[50px] px-[48px] ml-[300px] mt-[148px] mr-[14px] ">
      <IntroSection />
      <InteractionsBox />
    </Box>
  );
};

export default CenterBox;
