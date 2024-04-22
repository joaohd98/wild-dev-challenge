import { type Picture } from "@/api/get-pictures/response";

export type CardPicturePosition = "left" | "center" | "right" | "none";

export interface CardPictureProps {
  picture: Picture;
  current: number;
  total: number;
  position: CardPicturePosition;
  changeCurrent: (value: number) => void;
}
