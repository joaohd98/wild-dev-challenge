import { useRef } from "react";
import Observer from "gsap/Observer";
import { useEffectOnce } from "@/hooks/use-effect-once";

export const useObserverTimeline = (onUp: () => void, onDown: () => void) => {
  const isDuringTimeline = useRef(false);

  useEffectOnce(() => {
    Observer.create({
      type: "wheel,touch",
      onDown: () => {
        if (!isDuringTimeline.current) {
          isDuringTimeline.current = true;
          onDown();
        }
      },
      onUp: () => {
        if (!isDuringTimeline.current) {
          isDuringTimeline.current = true;
          onUp();
        }
      },
      wheelSpeed: -1,
      tolerance: 100,
      preventDefault: true,
    });
  });

  const onStartTimeline = () => {
    isDuringTimeline.current = true;
  };

  const onEndTimeline = () => {
    isDuringTimeline.current = false;
  };

  return {
    onStartTimeline,
    onEndTimeline,
  };
};
