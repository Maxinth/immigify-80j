import { Box } from "@chakra-ui/react";
import { CurrentStepIcon, CompletedStepIcon } from "@/assets/icons";
import StepItem from "./StepItem";
export const Stepper = () => {
  return (
    <Box className="!text-img-black px-4 hidden lg:flex items-center justify-between font-bold text-4xl  -top-4 relative mb-4 z-100 ">
      <StepItem Icon={<CompletedStepIcon />} text="Eligibility Agent" />
      <hr className="border-2 border-[#F3F3F3] w-1/6 relative -top-6" />
      <StepItem Icon={<CurrentStepIcon />} text="Document Agent" />{" "}
      <hr className="border-2 border-[#F3F3F3] w-1/6 relative -top-6" />
      <StepItem Icon={<CurrentStepIcon />} text="Form-Filling Agent" />{" "}
      <hr className="border-2 border-[#F3F3F3] w-1/6 relative -top-6" />
      <StepItem Icon={<CurrentStepIcon />} text="Interview Prep Agent" />
    </Box>
  );
};
