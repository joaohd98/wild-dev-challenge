import { type Picture } from "@/api/get-pictures/response";

export interface CardPictureProps {
  picture: Picture;
  current: number;
  total: number;
  position: "left" | "center" | "right";
  shouldAnimatedWhenChange: () => boolean;
}
