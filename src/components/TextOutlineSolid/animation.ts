import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const useTextOutlineSolidAnimation = (text: string) => {
  const [visibleText, setVisibleText] = useState(text);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.4, ease: "none" } });

    tl.to(containerRef.current, { autoAlpha: 0 });
    tl.call(() => setVisibleText(text));
    tl.to(containerRef.current, { autoAlpha: 1 });
  }, [text]);

  return {
    containerRef,
    visibleText,
  };
};
