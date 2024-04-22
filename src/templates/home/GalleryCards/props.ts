import { type Picture } from "@/api/get-pictures/response";

export interface GalleryCardsProps {
  current: number;
  pictures: Picture[];
  changeCurrent: (value: number) => void;
}
