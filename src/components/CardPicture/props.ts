import { type Picture } from "@/api/get-pictures/response";

export interface CardPictureProps {
  picture: Picture;
  position: "left" | "center" | "right";
  shouldAnimatedWhenChange: () => boolean;
}
