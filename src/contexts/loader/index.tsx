import { createContext, type ReactNode, useContext, useEffect, useState } from "react";
import gsap from "gsap";
import { type LoaderContextProps } from "./props";

const DEFAULT_STATE: LoaderContextProps = {
  hasLoading: true,
  onFinishLoad: () => null,
};

const LoaderContext = createContext(DEFAULT_STATE);

export const LoaderProvider = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const [hasLoading, setLoading] = useState(true);

  useEffect(() => {
    if (hasLoading) {
      return;
    }

    const main = document.querySelector("main");

    gsap.set(main, { pointerEvents: "auto" });
    gsap.to(main, { autoAlpha: 1, duration: 0.3 });
  }, [hasLoading]);

  const onFinishLoad: LoaderContextProps["onFinishLoad"] = () => {
    setLoading(false);
  };

  return (
    <LoaderContext.Provider
      value={{
        hasLoading,
        onFinishLoad,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoaderContext = () => useContext(LoaderContext);
