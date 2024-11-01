import { Box, Text } from "@chakra-ui/react";

interface IProps {
  Icon: React.ReactNode;
  text: string;
}
const StepItem = ({ Icon, text }: IProps) => {
  return (
    <Box className="flex items-center justify-center flex-col">
      {Icon}
      <Text className="text-base font-semibold text-center">{text}</Text>
    </Box>
  );
};

export default StepItem;
