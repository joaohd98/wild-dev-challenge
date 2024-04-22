import * as S from "./styles";
import { preLoadingConst as C } from "./const";
import { usePreLoadingAnimation } from "./animation";
import { useImageLoadTracker } from "@/hooks/image-load-tracker";

export const PreLoading = () => {
  const { containerRef, onChangeProgress } = usePreLoadingAnimation();

  useImageLoadTracker((toValue) => {
    onChangeProgress(toValue);
  });

  return (
    <S.PreLoading>
      <S.XYZContainer ref={containerRef}>
        <S.XYZName>{C.XYZPhotography}</S.XYZName>
      </S.XYZContainer>
    </S.PreLoading>
  );
};
