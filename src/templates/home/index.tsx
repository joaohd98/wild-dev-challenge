"use client";

import { PreLoading } from "@/components/PreLoading";
import { type HomeTemplateProps } from "@/templates/home/props";
import { CardPicture } from "@/components/CardPicture";
import { ArtBackground } from "@/templates/home/ArtBackground";

export const HomeTemplate = ({ pictures }: HomeTemplateProps) => {
  return (
    <>
      <PreLoading onFinishLoading={() => null} />
      <ArtBackground current={pictures[3]} pictures={pictures}>
        <CardPicture picture={pictures[2]} position="left" shouldAnimatedWhenChange={() => true} />
        <CardPicture picture={pictures[3]} position="center" shouldAnimatedWhenChange={() => true} />
        <CardPicture picture={pictures[4]} position="right" shouldAnimatedWhenChange={() => true} />
      </ArtBackground>
    </>
  );
};