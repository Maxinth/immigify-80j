import { Box, Text } from "@chakra-ui/react";

interface IPillBox {
  val: string;
  Icon?: React.ReactNode;
  handleClick: () => void;
  withIcon?: boolean;
  isSelected: boolean;
}
const PillBox = ({
  val,
  Icon,
  withIcon,
  handleClick,
  isSelected,
}: IPillBox) => {
  return (
    <Box
      onClick={handleClick}
      className={`border cursor-pointer  hover:bg-img-gray hover:shadow-bottom-md transition-all duration-150 ease-in-out w-fit flex  py-3 px-2 items-center gap-[10px] ${
        isSelected ? "border-img-black shadow-bottom-lg" : "border-[#CCCCCC]"
      } rounded-[10px] text-base text-[#262626]`}
    >
      <Text className="capitalize">{val}</Text>
      {withIcon && Icon}
    </Box>
  );
};

export default PillBox;
