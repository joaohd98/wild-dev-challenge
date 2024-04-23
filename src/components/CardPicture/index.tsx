import * as S from "./styles";
import { type CardPictureProps } from "@/components/CardPicture/props";
import { useCardPictureCursor } from "@/components/CardPicture/cursor";
import { useCardPictureAnimation } from "@/components/CardPicture/animation";

export const CardPicture = ({ picture, isFocused, changePosition, className }: CardPictureProps) => {
  const { cardRef, artRef, onMouseMoveCard, onMouseEnterOrLeaveCard } = useCardPictureAnimation(isFocused);

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
      <S.Art ref={artRef} $picture={picture} />
    </S.CardPicture>
  );
};
