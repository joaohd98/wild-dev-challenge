import { useEffect, useRef } from "react";

export const useRefUpdateByState = <T>(value: T) => {
  const valueRef = useRef<T>(value);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
};
