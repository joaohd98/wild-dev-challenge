export interface CustomCursorProps {
  progress?: { value: number; visible: boolean };
  link?: { text: string; onClick: () => void };
}
