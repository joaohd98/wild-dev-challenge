"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTheme } from "styled-components";
import { useLoaderContext } from "@/contexts/loader";

export const usePreLoadingAnimation = () => {
  const { onFinishLoad } = useLoaderContext();
  const { padding } = useTheme();
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const letters = gsap.utils.selector(container)("div");

    gsap.set(containerRef.current, { xPercent: -50, yPercent: -50, left: "50%", top: "50%" });
    gsap.set(letters, { y: -300, rotate: 60 });
  }, []);

  const onChangeProgress = (progress: number) => {
    const container = containerRef.current;
    const title = gsap.utils.selector(container)("h1");
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
          tl.to(
            containerRef.current,
            { xPercent: 0, yPercent: 0, left: padding, top: padding, duration: 0.6, ease: "back(0.5)" },
            "+=0.1"
          );
          tl.to(title, { fontSize: 18, "--stroke-width": 0 }, "<");

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
