import { type DependencyList, type RefObject, useEffect } from "react";

export const useCursorListener = (
  refElement: RefObject<HTMLElement | null> | "body",
  callbacks: {
    onListenMouseEnter?: (event: MouseEvent) => void;
    onListenMouseMove?: (event: MouseEvent) => void;
    onListenMouseLeave?: (event: MouseEvent) => void;
  },
  deps: DependencyList
) => {
  useEffect(() => {
    const element = refElement === "body" ? document.body : refElement.current;
    if (!element) {
      return;
    }

    if (callbacks.onListenMouseEnter) {
      element.addEventListener("mouseenter", callbacks.onListenMouseEnter);
    }

    if (callbacks.onListenMouseMove) {
      element.addEventListener("mousemove", callbacks.onListenMouseMove);
      element.addEventListener("wheel", callbacks.onListenMouseMove);
    }

    if (callbacks.onListenMouseLeave) {
      element.addEventListener("mouseleave", callbacks.onListenMouseLeave);
    }

    return () => {
      if (callbacks.onListenMouseEnter) {
        element.removeEventListener("mouseenter", callbacks.onListenMouseEnter);
      }

      if (callbacks.onListenMouseMove) {
        element.removeEventListener("mousemove", callbacks.onListenMouseMove);
        element.removeEventListener("mouseenter", callbacks.onListenMouseMove);
        element.removeEventListener("wheel", callbacks.onListenMouseMove);
      }

      if (callbacks.onListenMouseLeave) {
        element.removeEventListener("mouseleave", callbacks.onListenMouseLeave);
      }
    };
  }, [refElement, callbacks, deps]);
};
