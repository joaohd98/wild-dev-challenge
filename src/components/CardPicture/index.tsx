import * as S from "./styles";
import { type CardPictureProps } from "@/components/CardPicture/props";
import { TextOutlineSolid } from "@/components/TextOutlineSolid";
import { cardPictureConst as C } from "@/components/CardPicture/const";
import { useCardPictureAnimation } from "@/components/CardPicture/animation";

export const CardPicture = ({ picture, position, current, total, changeCurrent }: CardPictureProps) => {
  const { cardRef, artRef, textsRef } = useCardPictureAnimation({ picture, position });

  const onClickCard = () => {
    if (position !== "center") {
      changeCurrent(current);
      return;
    }

    window.open(picture.link, "_blank", "noopener,noreferrer");
  };

  return (
    <S.CardPicture ref={cardRef} $position={position} onClick={onClickCard}>
      <S.Art ref={artRef} $picture={picture} />
      <S.TextContainer ref={textsRef} $visible={position === "center"}>
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
    </S.CardPicture>
  );
};
