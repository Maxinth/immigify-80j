import { Box, Text } from "@chakra-ui/react";

interface VisaTypeCardProps {
  title: string;
  criteria: string[];
}
const VisaTypeCards = ({ title, criteria }: VisaTypeCardProps) => {
  return (
    <Box className="shadow-bottom-sm rounded-[20px] py-6 px-[26px] border border-[#DADADA] w-full">
      <Text className="font-bold mb-4">{title}</Text>
      <Text className="text-[12px] leading-[15px] mb-1">
        {" "}
        Key Eligibility Criteria Met:
      </Text>
      <ul className="text-[12px] leading-[15px] list-disc ml-5 flex flex-col items-start justify-start gap-1">
        {criteria.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Box>
  );
};

export default VisaTypeCards;
