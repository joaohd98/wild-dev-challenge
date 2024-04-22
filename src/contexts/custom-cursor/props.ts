export interface CustomCursorContextProps {
  showAsLink: (text: string) => void;
  noLongerLink: () => void;
  showAsProgress: (value: number) => void;
  noLongerProgress: () => void;
}
