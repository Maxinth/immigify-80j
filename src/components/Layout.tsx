import React from "react";
import Nav from "./Nav";
import { Box } from "@chakra-ui/react";
import SideBar from "./SideBar";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      <Box className="flex items-center justify-center overflow-y-hidden">
        <SideBar />
        {children}
      </Box>
    </>
  );
};

export default Layout;
