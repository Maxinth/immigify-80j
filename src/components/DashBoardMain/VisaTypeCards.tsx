import { Box, Text } from "@chakra-ui/react";

const VisaTypeCards = () => {
  return (
    <Box className="shadow-bottom-md rounded-[20px] py-6 px-[26px]">
      <Text className="font-bold mb-4">H-1B Visa (Skilled Worker)</Text>
      <Text className="text-[12px] leading-[15px] mb-1">
        {" "}
        Key Eligibility Criteria Met:
      </Text>
      <ul className="text-[12px] leading-[15px] list-disc ml-5 flex flex-col items-start justify-start gap-1">
        <li>Undergraduate</li>
        <li>Nigerian</li>
        <li>Job Experience</li>
      </ul>
    </Box>
  );
};

export default VisaTypeCards;
