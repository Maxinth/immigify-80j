// import { Box } from "@chakra-ui/react";
import NavLogo from "../../assets/images/nav-logo.png";
import { BellIcon } from "@/assets/icons";
import { Box } from "@chakra-ui/react";
import AccountPopOver from "./AccountPopOver";
import MobileNavIcons from "./MobileNavIcons";
const Nav = () => {
  return (
    <Box
      as="nav"
      pos={"fixed"}
      top={0}
      left={0}
      right={0}
      zIndex={100}
      className="py-[28px] px-[25px] bg-white shadow-bottom-sm border-b flex items-center justify-between "
    >
      <img src={NavLogo} alt="logo" className="w-fit" />
      <MobileNavIcons />
      <Box className="lg:flex items-center gap-[50px] hidden">
        <BellIcon />
        <AccountPopOver />
      </Box>
    </Box>
  );
};

export default Nav;
