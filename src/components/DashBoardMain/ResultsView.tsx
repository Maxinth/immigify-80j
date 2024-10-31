import { Box, Text } from "@chakra-ui/react";
import { EligibleIcon } from "@/assets/icons";
// import ReactLoading from "react-loading";
import VisaTypeCard from "./VisaTypeCards";
const ResultsView = () => {
  return (
    <Box className=" w-[30%] !text-img-black  shadow-bottom-sm  px-[30px] h-screen !overflow-y-hidden sticky right-0 top-0 ">
      <Box className="w-full mt-36 flex items-center gap-[5px] mb-[15px]">
        <EligibleIcon />{" "}
        <Text className="font-bold text-xl !text-img-black">
          Eligibility Agent
        </Text>
      </Box>
      <Text className="font-normal text-base !text-img-black">
        Based on your profile, Below are the listed Visa Type you are eligible
        for{" "}
      </Text>

      <Box className="flex items-center justify-center h-[70vh]">
        {/* <ReactLoading type={"bubbles"} color="#000000" /> */}
        <VisaTypeCard />
      </Box>
    </Box>
  );
};

export default ResultsView;
