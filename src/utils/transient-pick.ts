export type TransientPick<T, K extends keyof T> = {
  [P in K as `$${P}`]: T[P];
};
