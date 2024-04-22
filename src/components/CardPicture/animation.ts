import { useEffect, useRef } from "react";
import gsap from "gsap";

export const useCardPictureAnimation = (isFocused: boolean) => {
  const cardRef = useRef(null);
  const artRef = useRef<HTMLDivElement>(null);
  const textsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out", duration: 0.3 } });

    tl.to(textsRef.current, { autoAlpha: isFocused ? 1 : 0 });
    tl.to(artRef.current, { scale: 1, rotationY: 0, rotationX: 0, overwrite: "auto" }, "<");
  }, [isFocused]);

  const onMouseEnterOrLeaveCard = (type: "enter" | "leave") => {
    if (!isFocused) {
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power1.out", duration: 0.3 } });

    gsap.killTweensOf([artRef.current, textsRef.current]);

    switch (type) {
      case "enter": {
        tl.to(textsRef.current, { autoAlpha: 0 });
        tl.to(artRef.current, { scale: 1.12 }, "-=0.1");
        break;
      }
      case "leave": {
        tl.to(artRef.current, { scale: 1, rotationY: 0, rotationX: 0 });
        tl.to(textsRef.current, { autoAlpha: 1 });
      }
    }
  };

  const onMouseMoveCard = ({ clientX, clientY }: MouseEvent) => {
    const current = artRef.current;
    if (!current || !isFocused) {
      return;
    }

    const coords = current.getBoundingClientRect();
    const centerY = coords.y + coords.height / 2;
    const centerX = coords.x + coords.width / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    const rotationY = gsap.utils.mapRange(-coords.width / 2, coords.width / 2, -18, 18, distanceX);
    const rotationX = gsap.utils.mapRange(-coords.height / 2, coords.height / 2, -12, 12, distanceY);

    gsap.to(current, {
      rotationY,
      rotationX,
      ease: "power2.out",
    });
  };

  return {
    cardRef,
    artRef,
    textsRef,
    onMouseEnterOrLeaveCard,
    onMouseMoveCard,
  };
};
