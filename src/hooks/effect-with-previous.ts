import { useEffect, useRef } from "react";

export const useEffectWithPrevious = <T>(callback: (preValue: T, currentValue: T) => void, value: T) => {
  const isFirstRender = useRef(true);
  const previousDependencies = useRef(value);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      callback(previousDependencies.current, value);
    }

    previousDependencies.current = value;
  }, [callback, value]);
};
