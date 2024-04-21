import { createContext, type ReactNode, useContext } from "react";
import { type CustomCursorContextProps } from "./props";
import { CustomCursor } from "@/components/CustomCursor";

const DEFAULT_STATE: CustomCursorContextProps = {
  showAsLink: () => null,
  removeLink: () => null,
  showAsProgress: () => null,
  removeProgress: () => null,
};

const CustomCursorContext = createContext(DEFAULT_STATE);

export const CustomCursorProvider = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const showAsLink: CustomCursorContextProps["showAsLink"] = (value) => null;

  const removeLink: CustomCursorContextProps["removeLink"] = () => null;

  const showAsProgress: CustomCursorContextProps["showAsProgress"] = (value) => null;

  const removeProgress: CustomCursorContextProps["removeProgress"] = () => null;

  return (
    <CustomCursorContext.Provider
      value={{
        showAsLink,
        removeLink,
        showAsProgress,
        removeProgress,
      }}
    >
      <CustomCursor />
      {children}
    </CustomCursorContext.Provider>
  );
};

export const useCustomCursorContext = () => useContext(CustomCursorContext);
