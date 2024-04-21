export const cardPictureConst = {
  qtSlide: (current: number, total: number) => `${current} OF ${total}`,
  slides: (current: number, total: number) => Array.from({ length: total }).map((_, index) => index === current - 1),
};
