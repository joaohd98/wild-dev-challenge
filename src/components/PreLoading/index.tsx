import * as S from "./styles";
import { preLoadingConst as C } from "./const";
import { type PreLoadingProps } from "./props";
import { usePreLoadingAnimation } from "./animation";
import { useImageLoadTracker } from "@/hooks/useImageLoadTracker";

export const PreLoading = ({ children, onFinishLoading }: PreLoadingProps) => {
  const { containerRef, onChangeProgress } = usePreLoadingAnimation();

  useImageLoadTracker((toValue) => {
    onChangeProgress(toValue, onFinishLoading);
  });

  return (
    <S.PreLoading>
      <S.XYZContainer ref={containerRef}>
        <S.XYZName>{C.XYZPhotography}</S.XYZName>
      </S.XYZContainer>
      {children}
    </S.PreLoading>
  );
};
