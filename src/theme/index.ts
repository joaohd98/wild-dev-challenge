import "styled-components";

const padding = 16;

export const theme = {
  colors: {
    white: "#fff",
    black: "#000",
    blackCharcoal: "#303030",
    blackRaisin: "#202020",
  },
  screenHeight: `calc(100% - ${padding * 2}px)`,
  padding: `${padding}px`,
  position: {
    xLeft: `${padding}px`,
    xCenter: `calc(50vw - 50% - ${padding}px)`,
    xRight: `calc(100vw - 100% - ${padding}px)`,
    yTop: `${padding}px`,
    yCenter: `calc(50vh - 50% - ${padding}px)`,
    yBottom: `calc(100vh - 100% - ${padding}px)`,
  },
};

type Theme = typeof theme;

declare module "styled-components" {
  //eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
