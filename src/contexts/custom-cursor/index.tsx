import { createContext, type ReactNode, useContext, useEffect, useState } from "react";
import gsap from "gsap";
import { type CustomCursorContextProps } from "./props";
import { CustomCursor } from "@/components/CustomCursor";
import { type CustomCursorProps } from "@/components/CustomCursor/props";

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
  const [props, setProps] = useState<CustomCursorProps>({ visible: false });

  useEffect(() => {
    gsap.set(document.body, { cursor: props.visible ? "none" : "inherit" });
  }, [props.visible]);

  const showAsLink: CustomCursorContextProps["showAsLink"] = (link) => {
    setProps({
      link,
      visible: true,
      progress: undefined,
    });
  };

  const noLongerLink: CustomCursorContextProps["noLongerLink"] = () => setProps({ ...props, visible: false });

  const showAsProgress: CustomCursorContextProps["showAsProgress"] = (progress) => {
    setProps({
      progress,
      visible: true,
      link: undefined,
    });
  };

  const noLongerProgress: CustomCursorContextProps["noLongerProgress"] = () => setProps({ ...props, visible: false });

  return (
    <CustomCursorContext.Provider
      value={{
        showAsLink,
        noLongerLink,
        showAsProgress,
        noLongerProgress,
      }}
    >
      <CustomCursor {...props} />
      {children}
    </CustomCursorContext.Provider>
  );
};

export const useCustomCursorContext = () => useContext(CustomCursorContext);
