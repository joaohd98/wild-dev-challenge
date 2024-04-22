"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useTheme } from "styled-components";
import { useLoaderContext } from "@/contexts/loader";

export const usePreLoadingAnimation = () => {
  const { onFinishLoad } = useLoaderContext();
  const { padding } = useTheme();
  const containerRef = useRef(null);

  const onChangeProgress = (progress: number) => {
    const container = containerRef.current;
    const letters = gsap.utils.selector(container)("div");

    if (!container) {
      return;
    }

    const tl = gsap.timeline();

    // initial animation
    tl.to(letters, {
      opacity: 1,
      rotate: 0,
      y: 0,
      ease: "back",
      stagger: 0.05,
      duration: 0.4,
    });

    tl.call(() => {
      const tlLoading = gsap.timeline({
        paused: true,
        onComplete: () => {
          // change position of logo animation
          tl.to(containerRef.current, { x: padding, y: padding, scale: 1, duration: 0.6, ease: "back(0.5)" }, "+=0.1");
          tl.call(onFinishLoad, [], "-=0.4");
        },
      });

      // progress animation
      tlLoading.to(letters, { "--background-progress": "100%", ease: "none", stagger: 0.06 });

      tl.to(tlLoading, { progress });
    });
  };

  return {
    containerRef,
    onChangeProgress,
  };
};
