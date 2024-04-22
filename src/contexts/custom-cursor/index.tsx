import { createContext, type ReactNode, useContext, useEffect, useState } from "react";
import gsap from "gsap";
import { type CustomCursorContextProps } from "./props";
import { CustomCursor } from "@/components/CustomCursor";

const DEFAULT_STATE: CustomCursorContextProps = {
  showAsLink: () => null,
  noLongerLink: () => null,
  showAsProgress: () => null,
  noLongerProgress: () => null,
};

const CustomCursorContext = createContext(DEFAULT_STATE);

export const CustomCursorProvider = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const [visibleLink, setVisibleLink] = useState(false);
  const [visibleProgress, setVisibleProgress] = useState(false);
  const [progress, setProgress] = useState(0);
  const [link, setLink] = useState<string>();

  useEffect(() => {
    gsap.set(document.body, { cursor: visibleLink || visibleProgress ? "none" : "inherit" });
  }, [visibleLink, visibleProgress]);

  const showAsLink: CustomCursorContextProps["showAsLink"] = (newLink) => {
    setLink(newLink);
    setVisibleLink(true);
  };

  const noLongerLink: CustomCursorContextProps["noLongerLink"] = () => {
    setVisibleLink(false);
  };

  const showAsProgress: CustomCursorContextProps["showAsProgress"] = (newProgress) => {
    setProgress(newProgress);
    setVisibleProgress(true);
  };

  const noLongerProgress: CustomCursorContextProps["noLongerProgress"] = () => {
    setVisibleProgress(false);
  };

  return (
    <CustomCursorContext.Provider
      value={{
        showAsLink,
        noLongerLink,
        showAsProgress,
        noLongerProgress,
      }}
    >
      <CustomCursor link={link} progress={progress} visibleProgress={visibleProgress} visibleLink={visibleLink} />
      {children}
    </CustomCursorContext.Provider>
  );
};

export const useCustomCursorContext = () => useContext(CustomCursorContext);
