import * as S from "./styles";
import { type TextOutlineSolidProps } from "@/components/TextOutlineSolid/props";
import { useTextOutlineSolidAnimation } from "@/components/TextOutlineSolid/animation";

export const TextOutlineSolid = ({ text }: TextOutlineSolidProps) => {
  const { containerRef, visibleText } = useTextOutlineSolidAnimation(text);

  return (
    <S.TextOutlineSolid ref={containerRef}>
      <S.SolidView>
        <S.SolidText>{visibleText}</S.SolidText>
      </S.SolidView>
      <S.OutlineText>{visibleText}</S.OutlineText>
    </S.TextOutlineSolid>
  );
};
