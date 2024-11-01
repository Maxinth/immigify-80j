import { Box } from "@chakra-ui/react";
import IntroSection from "./IntroSection";
import InteractionsBox from "./InteractionsBox";
import { Stepper } from "./Stepper";
const CenterBox = () => {
  return (
    <Box className="relative w-[70%] h-[100%] mt-[118px] ml-[300px] pt-8 pb-48 mr-[14px] !overflow-y-auto">
      <Stepper />
      <Box className="rounded-[30px] border border-[#DADADA] relative -top-4 py-[50px] pt-[35px] px-[30px] !overflow-y-auto ">
        <IntroSection />
        <InteractionsBox />
      </Box>
    </Box>
  );
};

export default CenterBox;
