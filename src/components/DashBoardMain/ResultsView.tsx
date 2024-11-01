import { Box, Text } from "@chakra-ui/react";
import { EligibleIcon } from "@/assets/icons";
import ReactLoading from "react-loading";
import VisaTypeCard from "./VisaTypeCards";
import { useAppData } from "@/context";
const ResultsView = () => {
  const { isLoading, view, cardList, occupation } = useAppData();

  const isLoadingVisaTypes = isLoading && view === "occupation";

  return (
    <Box className=" w-[30%] relative !text-img-black  shadow-bottom-sm  px-[30px] h-screen !overflow-y-auto">
      <Box className="sticky top-[102px]  bg-white w-full">
        <Box className="w-full mt-36 flex pt-2 items-center gap-[5px] mb-[15px]">
          <EligibleIcon />{" "}
          <Text className="font-bold text-xl !text-img-black">
            Eligibility Agent
          </Text>
        </Box>
        <Text className="font-normal text-base !text-img-black py-2">
          Based on your profile, Below are the listed Visa Type you are eligible
          for{" "}
        </Text>
      </Box>

      <Box
        className={`flex ${
          occupation === "Engineering" ? "" : "  items-start"
        } overflow-y-auto  flex-col justify-start gap-[30px] pb-8 `}
      >
        {view === "" ? null : isLoadingVisaTypes ? (
          <Box className="relative -top-40">
            <ReactLoading
              type="bubbles"
              color="#000000"
              height={50}
              width={60}
            />
          </Box>
        ) : (
          cardList.map((item, index) => <VisaTypeCard key={index} {...item} />)
        )}
      </Box>
    </Box>
  );
};

export default ResultsView;
