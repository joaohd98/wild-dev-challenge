import { type Picture } from "@/api/get-pictures/response";

export interface CardPictureProps {
  picture: Picture;
  isFocused: boolean;
  changeMouseHover: (isHover: boolean) => void;
  changePosition: () => void;
  className?: string;
}
