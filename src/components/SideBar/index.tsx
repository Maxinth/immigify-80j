import { Box, Flex } from "@chakra-ui/react";
import SideBarItem from "./SideBarItem";
import { sidebarItems } from "./data";
const SideBar = () => {
  return (
    <Box
      as="aside"
      pos="fixed"
      top="104px"
      left="0"
      h="100vh"
      w="282px"
      bg="white"
      color="white"
      px="14px"
      //   py="6"
      className="shadow-bottom-xs "
    >
      <Flex direction="column" gap="4" className="mt-[103px] ">
        {sidebarItems.map((item) => (
          <SideBarItem key={item.title} {...item} />
        ))}
      </Flex>
    </Box>
  );
};

export default SideBar;
