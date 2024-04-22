import { type Picture } from "@/api/get-pictures/response";

export interface CardPictureProps {
  picture: Picture;
  isFocused: boolean;
  position: number;
  total: number;
  changePosition: () => void;
  className?: string;
}
