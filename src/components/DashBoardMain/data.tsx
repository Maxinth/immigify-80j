import {
  GhanaFlagIcon,
  SouthAfricanFlagIcon,
  NigerianFlagIcon,
} from "@/assets/icons";

export const countryData = [
  { country: "Nigeria", flag: <NigerianFlagIcon /> },
  { country: "Ghana", flag: <GhanaFlagIcon /> },
  { country: "South Africa", flag: <SouthAfricanFlagIcon /> },
];

export const visaCardsData = [
  {
    title: "H-1B Visa (Skilled Worker)",
    criteria: ["Undergraduate", "Nigerian", "Job Experience"],
  },
  {
    title:
      "EB-2 Visa (Employment-Based Green Card for Advanced Degree Holders or Exceptional Ability)",
    criteria: ["Undergraduate Degree", "Significant Skills", "Job Experience"],
  },
  {
    title: "O-1 Visa (Extraordinary Ability)",
    criteria: [
      "Undergraduate Degree",
      "Achievements or Unique skills",
      "Job Experience",
    ],
  },

  {
    title: "HM-1B-Visa (Skilled Worker)",
    criteria: ["Undergraduate", "Nigerian", "Job Experience"],
  },
];
