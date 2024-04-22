import * as S from "./styles";
import { type CustomCursorProps } from "@/components/CustomCursor/props";
import { useCustomCursorAnimation } from "@/components/CustomCursor/animation";

export const CustomCursor = ({ visibleProgress, visibleLink, link, progress }: CustomCursorProps) => {
  const { cursorRef } = useCustomCursorAnimation();

  const shouldShowProgress = visibleProgress;
  const shouldShowLink = !visibleProgress && visibleLink;

  return (
    <S.CustomCursor ref={cursorRef} $visible={shouldShowProgress || shouldShowLink}>
      {shouldShowProgress && (
        <S.CircleSvg
          viewBox="-1 -1 34 34"
          xmlns="http://www.w3.org/2000/svg"
          strokeDasharray={`100 ${100 - (progress || 1) * 100}`}
        >
          <S.CircleEmpty cx="16" cy="16" r="16" />
          <S.CircleProgress cx="16" cy="16" r="16" />
        </S.CircleSvg>
      )}
      <S.Dot $hasLink={shouldShowLink} />
      {shouldShowLink && <S.Text>{link}</S.Text>}
    </S.CustomCursor>
  );
};
