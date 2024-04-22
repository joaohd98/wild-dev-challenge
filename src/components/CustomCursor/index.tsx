import * as S from "./styles";
import { type CustomCursorProps } from "@/components/CustomCursor/props";
import { useCustomCursorAnimation } from "@/components/CustomCursor/animation";

export const CustomCursor = ({ visible, link, progress }: CustomCursorProps) => {
  const { cursorRef } = useCustomCursorAnimation();

  return (
    <S.CustomCursor ref={cursorRef} $visible={visible}>
      {!!progress && (
        <S.CircleSvg viewBox="-1 -1 34 34" xmlns="http://www.w3.org/2000/svg">
          <S.CircleEmpty cx="16" cy="16" r="16" />
          <S.CircleProgress cx="16" cy="16" r="16" />
        </S.CircleSvg>
      )}
      <S.Dot $hasLink={!!link} />
      {!!link && <S.Text>{link}</S.Text>}
    </S.CustomCursor>
  );
};
