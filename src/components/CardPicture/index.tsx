import * as S from "./styles";
import { type CardPictureProps } from "@/components/CardPicture/props";
import { TextOutlineSolid } from "@/components/TextOutlineSolid";
import { cardPictureConst as C } from "@/components/CardPicture/const";
import { useCardPictureCursor } from "@/components/CardPicture/cursor";
import { useCardPictureAnimation } from "@/components/CardPicture/animation";

export const CardPicture = ({ picture, isFocused, position, total, changePosition, className }: CardPictureProps) => {
  const { cardRef, artRef, textsRef, onMouseMoveCard, onMouseEnterOrLeaveCard } = useCardPictureAnimation(isFocused);

  useCardPictureCursor({ name: picture.name, cardRef, onMouseMoveCard, onMouseEnterOrLeaveCard });

  const onClickCard = () => {
    if (!isFocused) {
      changePosition();
      return;
    }

    window.open(picture.link, "_blank", "noopener,noreferrer");
  };

  return (
    <S.CardPicture ref={cardRef} className={className} onClick={onClickCard}>
      <S.Art ref={artRef} $picture={picture}>
        <S.TextContainer ref={textsRef}>
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
      </S.Art>
    </S.CardPicture>
  );
};
