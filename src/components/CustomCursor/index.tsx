import * as S from "./styles";
import { type CustomCursorProps } from "@/components/CustomCursor/props";
import { useCursorDirections } from "@/hooks/cursor-directions";

export const CustomCursor = ({ link }: CustomCursorProps) => {
  const { cursorRef } = useCursorDirections();

  return (
    <S.CustomCursor ref={cursorRef}>
      <S.CircleSvg viewBox="-1 -1 34 34" xmlns="http://www.w3.org/2000/svg">
        <S.CircleEmpty cx="16" cy="16" r="16" />
        <S.CircleProgress cx="16" cy="16" r="16" />
      </S.CircleSvg>
      <S.Dot />
    </S.CustomCursor>
  );
};
