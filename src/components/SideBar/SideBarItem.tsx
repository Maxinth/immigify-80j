import { Box, Text } from "@chakra-ui/react";
import { HomeIcon, BorderWidthOnHoverIcon } from "@/assets/icons";
const SideBarItem = () => {
  return (
    <Box
      role="group"
      className="flex items-center justify-between group hover:bg-img-gray transition-all ease-in-out duration-100 cursor-pointer rounded-[5px] py-3 px-[11px]"
    >
      <Box className="flex items-center gap-2">
        <HomeIcon />
        <Text
          as="span"
          className="font-pop text-xl !leading-[24px] text-img-black"
        >
          Home
        </Text>
      </Box>
      <BorderWidthOnHoverIcon />
    </Box>
  );
};

export default SideBarItem;
