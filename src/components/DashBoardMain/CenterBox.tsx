import { Box, Button, Text } from "@chakra-ui/react";
import Logo from "../../assets/images/single-logo.png";
import { RestartIcon } from "@/assets/icons";
const CenterBox = () => {
  return (
    <Box className="border border-[#DADADA] w-[70%] h-[78%] rounded-[30px] py-[50px] px-[48px] ml-[300px] mt-[148px] mr-[14px] ">
      <Box className="flex items-center gap-[5px]">
        <img src={Logo} alt="logo" />
        <Text className="text-2xl !font-bold text-img-black">
          Hello, Anthony
        </Text>
      </Box>
      <Box className="flex items-center justify-between gap-[100px]">
        <Text className="font-light text-base text-[#686868]">
          Keep interacting with your personal immigration assistant
        </Text>
        <Button
          variant={"outline"}
          className="flex items-center gap-2 text-base font-medium text-img-black !rounded-[10px] shadow-bottom-sm py-[10px] px-[18px]"
        >
          <RestartIcon />
          Restart
        </Button>
      </Box>
    </Box>
  );
};

export default CenterBox;
