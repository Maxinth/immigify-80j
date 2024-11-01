import { Box } from "@chakra-ui/react";
import IntroSection from "./IntroSection";
import InteractionsBox from "./InteractionsBox";
import { Stepper } from "./Stepper";
import { useAppData } from "@/context";
const CenterBox = () => {
  const { view } = useAppData();
  return (
    <Box
      className={`relative ${
        view === "" ? "w-[100%] pl-8" : "w-[70%] pl-0"
      } h-[100%] mt-[118px] ml-[300px] pt-8 pb-48 mr-[14px] !overflow-y-auto transition-all duration-300 ease-in`}
    >
      <Stepper />
      <Box className="rounded-[30px] border border-[#DADADA] relative -top-4 py-[50px] pt-[35px] px-[30px] !overflow-y-auto ">
        <IntroSection />
        <InteractionsBox />
      </Box>
    </Box>
  );
};

export default CenterBox;
