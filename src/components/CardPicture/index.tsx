import * as S from "./styles";
import { type CardPictureProps } from "@/components/CardPicture/props";
import { TextOutlineSolid } from "@/components/TextOutlineSolid";
import { cardPictureConst as C } from "@/components/CardPicture/const";
import { useCardPictureAnimation } from "@/components/CardPicture/animation";

export const CardPicture = ({ picture, position, current, total, shouldAnimatedWhenChange }: CardPictureProps) => {
  const { cardRef, artRef, textsRef } = useCardPictureAnimation({ picture, position });

  return (
    <S.CardPicture ref={cardRef} $position={position}>
      <S.Art ref={artRef} $picture={picture} />
      {position === "center" && (
        <S.TextContainer ref={textsRef}>
          <TextOutlineSolid text={picture.name} />
          <S.IndicatorSlideView>
            <S.IndicatorText>{C.qtSlide(current, total)}</S.IndicatorText>
            <S.Slides>
              {C.slides(current, total).map((isCurrent, index) => (
                <S.SlideDot key={index} $isCurrent={isCurrent} />
              ))}
            </S.Slides>
          </S.IndicatorSlideView>
        </S.TextContainer>
      )}
    </S.CardPicture>
  );
};
