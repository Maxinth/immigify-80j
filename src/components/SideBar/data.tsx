import { TbHome, TbHomeFilled } from "react-icons/tb";
import {
  MdOutlineVerifiedUser,
  MdVerifiedUser,
  MdOutlineEditCalendar,
  MdEditCalendar,
  MdOutlineHeadphones,
  MdHeadphones,
  MdHistory,
  MdOutlineHistory,
  MdOutlineSettings,
  MdSettings,
} from "react-icons/md";
import { BsClipboardCheck, BsClipboard2CheckFill } from "react-icons/bs";
import { RiShieldStarLine, RiShieldStarFill } from "react-icons/ri";

const initClassProps = {
  color: "black",
  className: "group-hover:hidden text-2xl ",
};

const hoverClassProps = {
  color: "black",
  className: "hidden group-hover:block text-2xl",
};
export const sidebarItems = [
  {
    title: "Home",
    InitIcon: <TbHome {...initClassProps} />,
    HoverIcon: <TbHomeFilled {...hoverClassProps} />,
  },

  {
    title: "Eligibility Agent",
    InitIcon: <MdOutlineVerifiedUser {...initClassProps} />,
    HoverIcon: <MdVerifiedUser {...hoverClassProps} />,
  },
  {
    title: "Document Agent",
    InitIcon: <BsClipboardCheck {...initClassProps} />,
    HoverIcon: <BsClipboard2CheckFill {...hoverClassProps} />,
  },
  {
    title: "Form-filling Agent",
    InitIcon: <MdOutlineEditCalendar {...initClassProps} />,
    HoverIcon: <MdEditCalendar {...hoverClassProps} />,
  },
  {
    title: "Interview Prep Agent",
    InitIcon: <MdOutlineHeadphones {...initClassProps} />,
    HoverIcon: <MdHeadphones {...hoverClassProps} />,
  },
  {
    title: "Subscription",
    InitIcon: <RiShieldStarLine {...initClassProps} />,
    HoverIcon: <RiShieldStarFill {...hoverClassProps} />,
  },
  {
    title: "History",
    InitIcon: <MdOutlineHistory {...initClassProps} />,
    HoverIcon: <MdHistory {...hoverClassProps} />,
  },
  {
    title: "Settings",
    InitIcon: <MdOutlineSettings {...initClassProps} />,
    HoverIcon: <MdSettings {...hoverClassProps} />,
  },
];
