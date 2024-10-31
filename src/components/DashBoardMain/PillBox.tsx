import { Box, Text } from "@chakra-ui/react";

interface IPillBox {
  val: string;
  Icon?: React.ReactNode;
  handleClick: () => void;
  withIcon?: boolean;
}
const PillBox = ({ val, Icon, withIcon, handleClick }: IPillBox) => {
  return (
    <Box
      onClick={handleClick}
      className="border cursor-pointer hover:bg-img-gray hover:shadow-bottom-md transition-all duration-150 ease-in-out w-fit flex  py-3 px-[35px] items-center gap-[10px] border-[#CCCCCC] rounded-[10px] text-base text-[#262626]"
    >
      <Text>{val}</Text>
      {withIcon && Icon}
    </Box>
  );
};

export default PillBox;
