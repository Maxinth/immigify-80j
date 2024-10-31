import { TbHome, TbHomeFilled } from "react-icons/tb";

const initClassProps = {
  color: "black",
  className: "group-hover:hidden text-2xl",
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
];
