import { Box } from "@chakra-ui/react";
import IntroSection from "./IntroSection";
import InteractionsBox from "./InteractionsBox";
import { Stepper } from "./Stepper";
const CenterBox = () => {
  return (
    <Box className="relative w-[70%] h-[78%] ml-[300px] mt-[168px] mr-[14px] !overflow-y-auto">
      <Stepper />
      <Box className="rounded-[30px] border border-[#DADADA] relative -top-4 py-[50px] pt-[35px] px-[48px] h-screen !overflow-y-auto ">
        <IntroSection />
        <InteractionsBox />
      </Box>
    </Box>
  );
};

export default CenterBox;
