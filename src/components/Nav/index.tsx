// import { Box } from "@chakra-ui/react";
import NavLogo from "../../assets/images/nav-logo.png";
import { BellIcon } from "@/assets/icons";
import { Box } from "@chakra-ui/react";
import AccountPopOver from "./AccountPopOver";
const Nav = () => {
  return (
    <nav className="py-[28px] px-[25px] bg-white shadow-bottom-lg border-b flex items-center justify-between ">
      <img src={NavLogo} alt="logo" className="w-fit" />
      <Box className="flex items-center gap-[50px]">
        <BellIcon />
        <AccountPopOver />
      </Box>
    </nav>
  );
};

export default Nav;
