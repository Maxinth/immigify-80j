import { Button } from "../ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from "../SideBar";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from "../ui/drawer";
import { useRef } from "react";
import { BellIcon } from "@/assets/icons";

import AccountPopOver from "./AccountPopOver";
import { Box } from "@chakra-ui/react";

const MobileNavIcons = () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <DrawerRoot initialFocusEl={() => ref.current}>
      <DrawerBackdrop className="lg:hidden" />
      <DrawerTrigger asChild>
        <Button variant="outline" size="sm" className="lg:hidden bg-img-black">
          <GiHamburgerMenu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-white lg:hidden ">
        <DrawerBody className="mt-16 text-img-black p-2">
          <Box className="flex items-center justify-center w-full mt-4 gap-[50px]">
            <BellIcon />
            <AccountPopOver />
          </Box>
          <SideBar isMobile />
        </DrawerBody>

        <DrawerCloseTrigger color={"black"} className="scale-150 mt-8 mr-4" />
      </DrawerContent>
    </DrawerRoot>
  );
};
export default MobileNavIcons;
