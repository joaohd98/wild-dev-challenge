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
        onMouseEnterOrLeave("enter");
      },
      onListenMouseLeave: () => {
        noLongerLink();
        onMouseEnterOrLeave("leave");
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

        const rotationX = gsap.utils.mapRange(-coords.height / 2, coords.height / 2, -10, 10, distanceY);
        const rotationY = gsap.utils.mapRange(-coords.width / 2, coords.width / 2, -22, 22, distanceX);

        gsap.to(current, {
          rotationX: rotationX,
          rotationY: rotationY,
          ease: "power2.out",
        });
      },
    },
    []
  );

  const onMouseEnterOrLeave = (type: "enter" | "leave") => {
    if (position !== "center") {
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power1.out", duration: 0.3 } });

    gsap.killTweensOf([artRef.current, textsRef.current]);

    switch (type) {
      case "enter": {
        tl.to(textsRef.current, { autoAlpha: 0 });
        tl.to(artRef.current, { scale: 1.15, rotationY: 0, rotateX: 0 });
        break;
      }
      case "leave": {
        tl.to(artRef.current, { scale: 1, rotationY: 0, rotateX: 0 });
        tl.to(textsRef.current, { autoAlpha: 1 });
      }
    }
  };

  return {
    cardRef,
    artRef,
    textsRef,
  };
};
