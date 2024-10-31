import { Box, Text } from "@chakra-ui/react";
import { EligibleIcon } from "@/assets/icons";
// import ReactLoading from "react-loading";
import { visaCardsData } from "./data";
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
      <Text className="font-normal text-base !text-img-black py-2">
        Based on your profile, Below are the listed Visa Type you are eligible
        for{" "}
      </Text>

      <Box className="flex pb-72 pt-96 items-center overflow-y-auto h-[100vh] flex-col justify-center gap-[30px]">
        {/* <ReactLoading type={"bubbles"} color="#000000" /> */}
        {visaCardsData?.map((item, index) => (
          <VisaTypeCard
            key={index}
            title={item.title}
            criteria={item.criteria}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ResultsView;
