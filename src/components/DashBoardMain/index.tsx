import { Box } from "@chakra-ui/react";
import CenterBox from "./CenterBox";
import ResultsView from "./ResultsView";

const DashboardMain = () => {
  return (
    <Box className="!w-full h-screen flex justify-between !font-pop">
      <CenterBox />
      <ResultsView />
    </Box>
  );
};

export default DashboardMain;
