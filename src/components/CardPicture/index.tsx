import * as S from "./styles";
import { type CardPictureProps } from "@/components/CardPicture/props";

import { useCardPictureAnimation } from "@/components/CardPicture/animation";
import { useCustomCursorContext } from "@/contexts/custom-cursor";
import { useCursorListener } from "@/hooks/cursor-listener";

export const CardPicture = ({
  picture,
  isFocused,
  changePosition,
  changeMouseHover,
  complement,
  className,
}: CardPictureProps) => {
  const { showAsLink, noLongerLink } = useCustomCursorContext();
  const { cardRef, artRef, onMouseMoveCard, onMouseEnterOrLeaveCard } = useCardPictureAnimation(
    isFocused,
    changeMouseHover
  );

  useCursorListener(
    cardRef,
    {
      onListenMouseEnter: () => {
        showAsLink(picture.name);
        onMouseEnterOrLeaveCard("enter");
      },
      onListenMouseLeave: () => {
        noLongerLink();
        onMouseEnterOrLeaveCard("leave");
      },
      onListenMouseMove: onMouseMoveCard,
    },
    []
  );

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
        {complement}
      </S.Art>
    </S.CardPicture>
  );
};
