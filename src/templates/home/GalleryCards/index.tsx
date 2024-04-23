import { useState } from "react";
import * as S from "./styles";
import { type GalleryCardsProps } from "@/templates/home/GalleryCards/props";
import { useGalleryCardsAnimation } from "@/templates/home/GalleryCards/animation";
import { TextOutlineSolid } from "@/components/TextOutlineSolid";
import { galleryCardsConst as C } from "@/templates/home/GalleryCards/const";

export const GalleryCards = ({ current, pictures, changeCurrent }: GalleryCardsProps) => {
  const total = pictures.length;

  const [isMouseHover, setMouseHover] = useState(false);
  const { galleryRef } = useGalleryCardsAnimation(current, total, changeCurrent);

  return (
    <S.GalleryCards ref={galleryRef}>
      {pictures.map((picture, position) => (
        <S.Card
          key={picture.name}
          picture={picture}
          isFocused={position === current}
          changePosition={() => changeCurrent(position)}
          changeMouseHover={setMouseHover}
          complement={
            <S.TextContainer $visible={position === current && !isMouseHover}>
              <TextOutlineSolid text={picture.name} />
              <S.IndicatorSlideView>
                <S.IndicatorText>{C.qtSlide(position, total)}</S.IndicatorText>
                <S.Slides>
                  {C.slides(position, total).map((isCurrent, index) => (
                    <S.SlideDot key={index} $isCurrent={isCurrent} />
                  ))}
                </S.Slides>
              </S.IndicatorSlideView>
            </S.TextContainer>
          }
        />
      ))}
    </S.GalleryCards>
  );
};
