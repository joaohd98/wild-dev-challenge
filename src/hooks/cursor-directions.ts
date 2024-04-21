import { useEffect, useRef } from "react";
import gsap from "gsap";

export const useCursorDirections = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const { body } = document;

    body.addEventListener("mousemove", onListenMouseMove);
    body.addEventListener("mouseenter", onListenMouseMove);
    body.addEventListener("wheel", onListenMouseMove);
  }, []);

  const onListenMouseMove = (event: MouseEvent) => {
    gsap.to(cursorRef.current, { x: event.clientX, y: event.clientY, duration: 0.05 });
  };

  return { cursorRef };
};
