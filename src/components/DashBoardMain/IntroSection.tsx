import { Box, Button, Text } from "@chakra-ui/react";
import Logo from "../../assets/images/single-logo.png";
import { RestartIcon } from "@/assets/icons";
import { useAppData } from "@/context";

const IntroSection = () => {
  const { handleRestart } = useAppData();
  return (
    <>
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
          onClick={handleRestart}
          className="flex items-center gap-2 text-base font-medium hover:bg-img-gray  text-img-black !rounded-[10px] shadow-bottom-sm hover:shadow-bottom-md py-[10px] px-[18px]"
        >
          <RestartIcon />
          Restart
        </Button>
      </Box>
    </>
  );
};

export default IntroSection;
