import { useRef } from "react";
import gsap from "gsap";
import { useCursorListener } from "@/hooks/cursor-listener";
import { useCustomCursorContext } from "@/contexts/custom-cursor";
import { type CardPictureProps } from "@/components/CardPicture/props";

export const useCardPictureAnimation = ({ picture, position }: Pick<CardPictureProps, "picture" | "position">) => {
  const { showAsLink, noLongerLink } = useCustomCursorContext();
  const cardRef = useRef(null);
  const artRef = useRef<HTMLDivElement>(null);
  const textsRef = useRef(null);

  useCursorListener(
    cardRef,
    {
      onListenMouseEnter: () => {
        showAsLink(picture.name);
        onMouseEnterOrLeave(1.15, 0);
      },
      onListenMouseLeave: () => {
        noLongerLink();
        onMouseEnterOrLeave(1, 1);
      },
      onListenMouseMove: ({ clientX, clientY }) => {
        const current = artRef.current;
        if (!current || position !== "center") {
          return;
        }

        const coords = current.getBoundingClientRect();
        const centerY = coords.y + coords.height / 2;
        const centerX = coords.x + coords.width / 2;

        const distanceX = clientX - centerX;
        const distanceY = clientY - centerY;

        const rotationX = gsap.utils.mapRange(-coords.height / 2, coords.height / 2, -8, 8, distanceY);
        const rotationY = gsap.utils.mapRange(-coords.width / 2, coords.width / 2, -16, 16, distanceX);

        gsap.to(current, {
          rotationX: rotationX,
          rotationY: rotationY,
          ease: "power2.out",
        });
      },
    },
    []
  );

  const onMouseEnterOrLeave = (scale: number, autoAlpha: number) => {
    if (position !== "center") {
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power1.out", duration: 0.3 } });

    gsap.killTweensOf([artRef.current, textsRef.current]);

    tl.to(textsRef.current, { autoAlpha });
    tl.to(artRef.current, { scale });
  };

  return {
    cardRef,
    artRef,
    textsRef,
  };
};
