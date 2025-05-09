import { PositionType } from "../libs/enums";
import { ChangePositionProps } from "../libs/types";

export const changePositionProps: ChangePositionProps[] = [
  {
    positionType: PositionType.default,
    imgPath: "./wl-home-alt.png",
    imgAlt: "Go to HCM City",
    title: "Go to HCM City",
  },
  {
    positionType: PositionType.userCurrent,
    imgPath: "./current.svg",
    imgAlt: "Current Location Icon",
    title: "Go to current",
  },
];
