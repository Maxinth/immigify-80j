import { Box, Flex } from "@chakra-ui/react";
import SideBarItem from "./SideBarItem";
import { sidebarItems } from "./data";

interface SidebarItem {
  isMobile?: boolean;
}
const SideBar = ({ isMobile }: SidebarItem) => {
  return (
    <Box
      as="aside"
      pos={isMobile ? "relative" : "fixed"}
      top={isMobile ? "0px" : "71px"}
      left="0"
      h={isMobile ? "100%" : "100vh"}
      w={isMobile ? "100%" : "282px"}
      bg="white"
      color="white"
      px="14px"
      className={`shadow-bottom-xs ${
        isMobile ? "block lg:hidden" : "hidden lg:block"
      } `}
    >
      <Flex
        direction="column"
        gap="4"
        className={isMobile ? "mt-4" : "mt-[103px]"}
      >
        {sidebarItems.map((item) => (
          <SideBarItem key={item.title} {...item} />
        ))}
      </Flex>
    </Box>
  );
};

export default SideBar;
