import { useMemo } from "react";
import * as S from "./styles";
import { type CustomCursorProps } from "@/components/CustomCursor/props";
import { useCustomCursorAnimation } from "@/components/CustomCursor/animation";
import { useCursorListener } from "@/hooks/cursor-listener";

export const CustomCursor = ({ visibleProgress, visibleLink, link, progress }: CustomCursorProps) => {
  const { cursorRef, onMouseListener } = useCustomCursorAnimation();

  useCursorListener(
    "body",
    {
      onListenMouseEnter: onMouseListener,
      onListenMouseMove: onMouseListener,
    },
    []
  );

  const shouldShowProgress = visibleProgress;
  const shouldShowLink = !visibleProgress && visibleLink;

  const progressCursor = useMemo(
    () => (
      <S.ProgressSVG
        $visible={shouldShowProgress}
        viewBox="-1 -1 34 34"
        xmlns="http://www.w3.org/2000/svg"
        strokeDasharray={`100 ${100 - (progress || 0.4) * 100}`}
      >
        <S.CircleEmpty cx="16" cy="16" r="16" />
        <S.CircleProgress cx="16" cy="16" r="16" />
        <S.CircleSmallDot cx="16" cy="16" r="3" />
      </S.ProgressSVG>
    ),
    [shouldShowProgress, progress]
  );

  const linkCursor = useMemo(
    () => (
      <S.LinkContainer $visible={shouldShowLink}>
        <S.Dot />
        <S.Text>{link}</S.Text>
      </S.LinkContainer>
    ),
    [shouldShowLink, link]
  );

  return (
    <S.CustomCursor ref={cursorRef}>
      {linkCursor}
      {progressCursor}
    </S.CustomCursor>
  );
};
