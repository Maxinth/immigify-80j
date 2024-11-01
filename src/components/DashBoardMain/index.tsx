import { Box } from "@chakra-ui/react";
import CenterBox from "./CenterBox";
import ResultsView from "./ResultsView";

const DashboardMain = () => {
  return (
    <Box className="!w-full h-full  lg:h-screen overflow-y-auto flex  flex-col lg:flex-row justify-between !font-pop">
      <CenterBox />
      <ResultsView />
    </Box>
  );
};

export default DashboardMain;
