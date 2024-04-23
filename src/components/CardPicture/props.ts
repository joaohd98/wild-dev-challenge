import { type ReactNode } from "react";
import { type Picture } from "@/api/get-pictures/response";

export interface CardPictureProps {
  picture: Picture;
  isFocused: boolean;
  changePosition: () => void;
  changeMouseHover: (isHover: boolean) => void;
  complement?: ReactNode;
  className?: string;
}
