"use client";

import { useRef } from "react";
import gsap from "gsap";

export const usePreLoadingAnimation = () => {
  const containerRef = useRef(null);

  const onChangeProgress = (toValue: number, onComplete: () => void) => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    if (toValue < 1) {
      const clip = gsap.getProperty(container, "--clip-percentage") as number;
      const clampClip = gsap.utils.mapRange(0, 1, 0, clip, toValue);

      gsap.to(container, { "--clip-percentage": clampClip, ease: "none" });
      return;
    }

    // has loaded all images
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to(container, { "--clip-percentage": "0" });
    tl.to(container, { scale: 1 });
    tl.to(container, { x: 0, y: 0 }, "<");
    tl.call(onComplete, [], "-=0.1");
  };

  return {
    containerRef,
    onChangeProgress,
  };
};
