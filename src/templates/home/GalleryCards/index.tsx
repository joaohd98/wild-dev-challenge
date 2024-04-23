import { useState } from "react";
import * as S from "./styles";
import { type GalleryCardsProps } from "@/templates/home/GalleryCards/props";
import { useGalleryCardsAnimation } from "@/templates/home/GalleryCards/animation";
import { TextOutlineSolid } from "@/components/TextOutlineSolid";
import { cardPictureConst as C } from "@/components/CardPicture/const";

export const GalleryCards = ({ current, pictures, changeCurrent }: GalleryCardsProps) => {
  const [isMouseHover, setMouseHover] = useState(false);
  const total = pictures.length;
  const { galleryRef } = useGalleryCardsAnimation(current, total, changeCurrent);

  return (
    <S.GalleryCards>
      <S.CardsContainer ref={galleryRef}>
        {pictures.map((picture, index) => (
          <S.Card
            key={picture.name}
            picture={picture}
            isFocused={index === current}
            changePosition={() => changeCurrent(index)}
            changeMouseHover={setMouseHover}
          />
        ))}
      </S.CardsContainer>
      <S.TextContainer $visible={!isMouseHover}>
        <TextOutlineSolid text={pictures[current].name} />
        <S.IndicatorSlideView>
          <S.IndicatorText>{C.qtSlide(current, total)}</S.IndicatorText>
          <S.Slides>
            {C.slides(current, total).map((isCurrent, index) => (
              <S.SlideDot key={index} $isCurrent={isCurrent} />
            ))}
          </S.Slides>
        </S.IndicatorSlideView>
      </S.TextContainer>
    </S.GalleryCards>
  );
};
