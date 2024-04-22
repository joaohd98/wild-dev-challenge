import { useEffect, useRef } from "react";
import Observer from "gsap/Observer";
import { useLoaderContext } from "@/contexts/loader";

export const useObserverTimeline = (onUp: () => void, onDown: () => void) => {
  const { hasLoading } = useLoaderContext();
  const isDuringTimeline = useRef(false);

  useEffect(() => {
    if (hasLoading) {
      return;
    }

    Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !isDuringTimeline.current && onDown(),
      onUp: () => !isDuringTimeline.current && onUp(),
      tolerance: 10,
      preventDefault: true,
    });
  }, [hasLoading, onDown, onUp, isDuringTimeline]);

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
