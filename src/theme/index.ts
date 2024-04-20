import "styled-components";

export const theme = {
  white: "#fff",
  black: "#000",
  blackCharcoal: "#303030",
};

type Theme = typeof theme;

declare module "styled-components" {
  //eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
