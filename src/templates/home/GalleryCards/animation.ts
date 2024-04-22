import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { useEffectWithPrevious } from "@/hooks/effect-with-previous";
import { checkBoundaries } from "@/utils/check-boundaries";
import { useCustomCursorContext } from "@/contexts/custom-cursor";

export const useGalleryCardsAnimation = (current: number, total: number) => {
  const { showAsProgress, noLongerProgress } = useCustomCursorContext();

  const galleryRef = useRef<HTMLDivElement>(null);

  const { leftPosition, centerPosition, rightPosition, disappear, appear } = useMemo(
    () => ({
      leftPosition: { left: 0, top: "100%", x: 0, y: "-100%" },
      centerPosition: { left: "50%", top: "50%", x: "-50%", y: "-50%", scale: 2.06 },
      rightPosition: { top: 0, left: "100%", x: "-100%", y: 0 },
      disappear: { scale: 0.8, autoAlpha: 0 },
      appear: { scale: 1, autoAlpha: 1 },
    }),
    []
  );

  useEffect(() => {
    const cards = gsap.utils.selector(galleryRef.current)(":scope > div");

    const prevCard = cards[total - 1];
    const actualCard = cards[0];
    const nextCard = cards[1];

    gsap.set(prevCard, leftPosition);
    gsap.set(actualCard, centerPosition);
    gsap.set(nextCard, rightPosition);
  }, [centerPosition, leftPosition, rightPosition, total]);

  useEffectWithPrevious((preValue, currentValue) => {
    // first
    if (preValue === 0 && currentValue === total - 1) {
      onNavigateCard(preValue, currentValue, false);
      // last
    } else if (preValue === total - 1 && currentValue === 0) {
      onNavigateCard(preValue, currentValue, true);
    } else if (currentValue < preValue) {
      onNavigateCard(preValue, currentValue, false);
    } else if (currentValue > preValue) {
      onNavigateCard(preValue, currentValue, true);
    }
  }, current);

  const onNavigateCard = (preValue: number, currentValue: number, isNext: boolean) => {
    const cards = gsap.utils.selector(galleryRef.current)(":scope > div");

    const willDisappear = cards[checkBoundaries(total, isNext ? preValue - 1 : preValue + 1)];
    const actual = cards[preValue];
    const future = cards[currentValue];
    const willAppear = cards[checkBoundaries(total, isNext ? currentValue + 1 : currentValue - 1)];

    const tl = gsap.timeline({
      defaults: { ease: "power1.out" },
    });

    tl.to(future, {
      ...centerPosition,
      onUpdate: function () {
        showAsProgress(this.progress());
      },
      onComplete: () => {
        noLongerProgress();
      },
      duration: 0.8,
    });

    tl.to(actual, { ...(isNext ? leftPosition : rightPosition), scale: 1, duration: 0.8 }, "<");
    tl.to(willDisappear, { ...disappear, duration: 0.4 }, "<");
    tl.set(willAppear, { ...(isNext ? rightPosition : leftPosition) }, "<");
    tl.to(willAppear, { ...appear, duration: 0.8 }, "-=0.3");
  };

  return {
    galleryRef,
  };
};
