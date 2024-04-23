import { useEffect, useRef } from "react";
import Observer from "gsap/Observer";
import { useLoaderContext } from "@/contexts/loader";

export const useObserverTimeline = (onUp: () => void, onDown: () => void) => {
  const { hasLoading } = useLoaderContext();
  const isDuringTimeline = useRef(false);

  useEffect(() => {
    if (!hasLoading) {
      return;
    }

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
  }, [hasLoading, onDown, onUp]);

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
