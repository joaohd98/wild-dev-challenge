import * as S from "./styles";
import { type GalleryCardsProps } from "@/templates/home/GalleryCards/props";
import { useGalleryCardsAnimation } from "@/templates/home/GalleryCards/animation";

export const GalleryCards = ({ current, pictures, changeCurrent }: GalleryCardsProps) => {
  const total = pictures.length;

  const { galleryRef } = useGalleryCardsAnimation(current, total);

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
