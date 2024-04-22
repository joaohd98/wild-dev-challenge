import { type MutableRefObject, useRef } from "react";

export const useRefElements = <Type extends HTMLElement>(
  initial: Type[] = []
): [MutableRefObject<(Type | null)[]>, (index?: number | "push") => (element: Type | null) => void] => {
  const ref = useRef<(Type | null)[]>(initial);

  const setRef =
    (index: number | "push" = 0) =>
    (element: Type | null) => {
      if (index === "push") {
        ref.current.push(element);
        return;
      }

      ref.current[index] = element;
    };

  return [ref, setRef];
};
