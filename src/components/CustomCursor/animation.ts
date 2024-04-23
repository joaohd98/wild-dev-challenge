import gsap from "gsap";
import { useRef } from "react";

export const useCustomCursorAnimation = () => {
  const cursorRef = useRef(null);

  const onMouseListener = (event: MouseEvent) =>
    gsap.to(cursorRef.current, { x: event.clientX, y: event.clientY, duration: 0.05 });

  return { cursorRef, onMouseListener };
};
