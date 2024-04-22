import * as S from "./styles";
import { type GalleryCardsProps } from "@/templates/home/GalleryCards/props";
import { useGalleryCardsAnimation } from "@/templates/home/GalleryCards/animation";
import { useRefUpdateByState } from "@/hooks/ref-updated-by-state";
import { useObserverTimeline } from "@/hooks/observer-timeline";
import { checkBoundaries } from "@/utils/check-boundaries";

export const GalleryCards = ({ current, pictures, changeCurrent }: GalleryCardsProps) => {
  const currentRef = useRefUpdateByState(current);
  const total = pictures.length;

  const { onStartTimeline, onEndTimeline } = useObserverTimeline(
    () => {
      changeCurrent(checkBoundaries(total, currentRef.current - 1));
    },
    () => {
      changeCurrent(checkBoundaries(total, currentRef.current + 1));
    }
  );

  const { galleryRef } = useGalleryCardsAnimation(current, total, onStartTimeline, onEndTimeline);

  return (
    <S.GalleryCards ref={galleryRef}>
      {pictures.map((picture, index) => (
        <S.Card
          key={picture.name}
          picture={picture}
          total={total}
          position={index}
          isFocused={index === current}
          changePosition={() => changeCurrent(index)}
        />
      ))}
    </S.GalleryCards>
  );
};
