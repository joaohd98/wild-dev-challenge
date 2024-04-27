import { useEffect } from "react";
import { useLoaderContext } from "@/contexts/loader";

export const useEffectOnce = (callback: () => void) => {
  const { hasLoading } = useLoaderContext();

  useEffect(() => {
    if (hasLoading) {
      return;
    }

    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasLoading]);
};
