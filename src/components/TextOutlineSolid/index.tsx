import * as S from "./styles";
import { type TextOutlineSolidProps } from "@/components/TextOutlineSolid/props";

export const TextOutlineSolid = ({ text }: TextOutlineSolidProps) => {
  return (
    <S.TextOutlineSolid>
      <S.SolidView>
        <S.SolidText>{text}</S.SolidText>
      </S.SolidView>
      <S.OutlineText>{text}</S.OutlineText>
    </S.TextOutlineSolid>
  );
};
