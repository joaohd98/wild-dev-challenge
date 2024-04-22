"use client";

import { useState } from "react";
import { PreLoading } from "@/components/PreLoading";
import { type HomeTemplateProps } from "@/templates/home/props";
import { CardPicture } from "@/components/CardPicture";
import { ArtBackground } from "@/templates/home/ArtBackground";
import { checkBoundaries } from "@/utils/check-boundaries";
import { type CardPicturePosition } from "@/components/CardPicture/props";

export const HomeTemplate = ({ pictures }: HomeTemplateProps) => {
  const [current, setCurrent] = useState(0);

  const picturesQt = pictures.length;
  const prev = checkBoundaries(picturesQt, current - 1);
  const next = checkBoundaries(picturesQt, current + 1);

  const getPosition = (index: number): CardPicturePosition => {
    if (index === current) {
      return "center";
    }

    if (index === prev) {
      return "left";
    }

    if (index === next) {
      return "right";
    }

    return "none";
  };

  return (
    <>
      <PreLoading onFinishLoading={() => null} />
      <ArtBackground current={current} pictures={pictures}>
        {pictures.map((picture, index) => (
          <CardPicture
            picture={picture}
            total={picturesQt}
            current={index}
            position={getPosition(index)}
            changeCurrent={setCurrent}
          />
        ))}
      </ArtBackground>
    </>
  );
};
