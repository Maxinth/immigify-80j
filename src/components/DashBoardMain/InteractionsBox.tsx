import { Box, Text } from "@chakra-ui/react";
import PillBox from "./PillBox";
import { countryData } from "./data";

const InteractionsBox = () => {
  return (
    <Box className="rounded-[30px] bg-[#FAFAFA] pb-[50px] px-[19px] mt-[30px] text-img-black">
      <Box className="flex items-end justify-end flex-col">
        <Text className="text-sm font-bold mb-[10px] mt-[50px]">Anthony</Text>
        <Box className="rounded-[10px] bg-white shadow-bottom-sm py-4 px-[30px] w-full flex items-end justify-end">
          Undergraduate Degree
        </Box>
      </Box>
      <Box>
        <Text className="text-sm font-bold mb-[10px] mt-[40px]">Agent</Text>
        <Box className="rounded-[10px] flex flex-col justify-start bg-white shadow-bottom-sm py-4 px-[30px] w-full">
          <Text className="text-lg">What’s your country of region?</Text>
          <hr className="text-[#DEDEDE] w-[90%] mt-4 mb-5" />
          <Box className="flex items-center gap-[10px] flex-wrap">
            {countryData?.map((item) => (
              <PillBox
                val={item.country}
                key={item.country}
                Icon={item.flag}
                withIcon
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InteractionsBox;
