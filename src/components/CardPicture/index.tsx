import * as S from "./styles";
import { type CardPictureProps } from "@/components/CardPicture/props";

export const CardPicture = ({ picture, position, shouldAnimatedWhenChange }: CardPictureProps) => {
  return (
    <S.CardPicture $position={position}>
      <S.Art $picture={picture} />
    </S.CardPicture>
  );
};
