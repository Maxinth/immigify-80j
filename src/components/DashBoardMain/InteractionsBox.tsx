import { Box, Text, Button } from "@chakra-ui/react";
import PillBox from "./PillBox";
import { countryData } from "./data";
import { SearchIcon } from "@/assets/icons";
import { useAppData } from "@/context";
import OccupationsView from "./OccupationsView";

const InteractionsBox = () => {
  const { handlePillClick, boxTitle, boxQuestion, view, selectedCountry } =
    useAppData();
  console.log({ view });
  return (
    <Box className="rounded-[30px] bg-[#FAFAFA] pb-[50px] px-[19px] mt-[30px] text-img-black">
      <Box className="flex items-end justify-end flex-col">
        <Text className="text-sm font-bold mb-[10px] mt-[50px]">Anthony</Text>
        <Box className="rounded-[10px] text-sm lg:text-base bg-white shadow-bottom-sm py-4 px-[30px] w-full flex items-end justify-end">
          {boxTitle}
        </Box>
      </Box>
      <Box>
        <Text className="text-sm font-bold mb-[10px] mt-[40px]">Agent</Text>
        <Box className="rounded-[10px] flex flex-col justify-start bg-white shadow-bottom-sm py-4 px-[30px] w-full">
          <Text className="text-sm lg:text-lg">{boxQuestion}</Text>
          <hr className="text-[#DEDEDE] w-[90%] mt-4 mb-5" />
          <Box className="flex items-center gap-[10px] flex-wrap">
            {view === "country" || view === "" ? (
              <>
                {countryData?.map((item) => (
                  <PillBox
                    val={item.country}
                    key={item.country}
                    Icon={item.flag}
                    handleClick={() => handlePillClick(item.country)}
                    isSelected={selectedCountry === item.country}
                    withIcon
                  />
                ))}
                <Button
                  variant="outline"
                  className="bg-[#090909] !rounded-[10px] !p-4 h-[47px] "
                >
                  <SearchIcon />
                </Button>
              </>
            ) : (
              <OccupationsView />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InteractionsBox;
