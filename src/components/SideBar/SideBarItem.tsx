import { Box, Text } from "@chakra-ui/react";
import { BorderWidthOnHoverIcon } from "@/assets/icons";

interface ISideSideBarItem {
  title: string;
  InitIcon: React.ReactNode;
  HoverIcon: React.ReactNode;
}
const SideBarItem = ({ title, InitIcon, HoverIcon }: ISideSideBarItem) => {
  return (
    <Box
      role="group"
      className="flex items-center justify-between group hover:bg-img-gray transition-all ease-in-out duration-100 cursor-pointer rounded-[5px] py-3 px-[11px]"
    >
      <Box className="flex items-center gap-2">
        <Box className="flex items-center justify-center relative">
          {InitIcon}
          {HoverIcon}
        </Box>
        <Text
          as="span"
          className="font-pop text-lg !leading-[24px] text-img-black"
        >
          {title}
        </Text>
      </Box>
      <BorderWidthOnHoverIcon />
    </Box>
  );
};

export default SideBarItem;
