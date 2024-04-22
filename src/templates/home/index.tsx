"use client";

import { useState } from "react";
import { type HomeTemplateProps } from "@/templates/home/props";
import { ArtBackground } from "@/templates/home/ArtBackground";
import { GalleryCards } from "@/templates/home/GalleryCards";

export const HomeTemplate = ({ pictures }: HomeTemplateProps) => {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <ArtBackground current={current} pictures={pictures}>
        <GalleryCards current={current} pictures={pictures} changeCurrent={setCurrent} />
      </ArtBackground>
    </>
  );
};
