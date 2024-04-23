import { useEffect, useRef } from "react";
import { useLoaderContext } from "@/contexts/loader";

export const useEffectLoadedOnce = (callback: () => void) => {
  const { hasLoading } = useLoaderContext();
  const executed = useRef(false);

  if (hasLoading) {
    callback();
  }
  useEffect(() => {
    if (hasLoading || executed.current) {
      return;
    }
    callback();
    executed.current = true;
  }, [hasLoading, callback]);
};
