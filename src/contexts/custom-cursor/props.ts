export interface CustomCursorContextProps {
  showAsLink: (text: string) => void;
  removeLink: () => void;
  showAsProgress: (value: number) => void;
  removeProgress: () => void;
}
