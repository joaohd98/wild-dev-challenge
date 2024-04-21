import * as S from "./styles";
import { type CardPictureProps } from "@/components/CardPicture/props";
import { TextOutlineSolid } from "@/components/TextOutlineSolid";
import { cardPictureConst as C } from "@/components/CardPicture/const";

export const CardPicture = ({ picture, position, current, total, shouldAnimatedWhenChange }: CardPictureProps) => {
  return (
    <S.CardPicture $position={position}>
      <S.Art $picture={picture} />
      {position === "center" && (
        <S.TextContainer>
          <TextOutlineSolid text={picture.name} />
          <S.IndicatorSlideView>
            <S.IndicatorText>{C.qtSlide(current, total)}</S.IndicatorText>
            <S.Slides>
              {C.slides(current, total).map((isCurrent) => (
                <S.SlideDot $isCurrent={isCurrent} />
              ))}
            </S.Slides>
          </S.IndicatorSlideView>
        </S.TextContainer>
      )}
    </S.CardPicture>
  );
};
