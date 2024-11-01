import { Box } from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileNavIcons = () => {
  return (
    <Box className="bg-img-black scale-150 flex items-center gap-2 justify-center md:hidden cursor-pointer">
      <RxHamburgerMenu fontSize={"48px"} color="white" />
      <IoMdClose fontSize={"48px"} color="white" />
    </Box>
  );
};

export default MobileNavIcons;
