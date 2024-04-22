import { type ReactNode } from "react";
import { type Picture } from "@/api/get-pictures/response";

export interface ArtBackgroundProps {
  current: number;
  pictures: Picture[];
  children: ReactNode;
}
