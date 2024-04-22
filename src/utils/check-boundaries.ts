export const checkBoundaries = (total: number, current: number) => {
  if (current > total - 1) {
    return 0;
  }

  if (current < 0) {
    return total - 1;
  }

  return current;
};
