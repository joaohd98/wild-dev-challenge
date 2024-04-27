import gsap from "gsap";
import { useRef } from "react";

export const useCustomCursorAnimation = () => {
  const cursorRef = useRef(null);

  const onListenMouseEnter = (event: MouseEvent) => gsap.set(cursorRef.current, { x: event.clientX, y: event.clientY });

  const onListenMouseMove = (event: MouseEvent) =>
    gsap.to(cursorRef.current, { x: event.clientX, y: event.clientY, duration: 0.5, ease: "power1.out" });

  return { cursorRef, onListenMouseEnter, onListenMouseMove };
};
