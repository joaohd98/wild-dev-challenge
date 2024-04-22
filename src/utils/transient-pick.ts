export type TransientPick<T, K extends keyof T> = {
  [P in K as P extends string ? `$${P}` : never]: T[P];
};
