import gsap from "gsap";
import { useEffectWithPrevious } from "@/hooks/effect-with-previous";
import { useRefElements } from "@/hooks/ref-elements";

export const useArtBackgroundAnimation = (current: number) => {
  const [backgroundsRef, setBackgroundRef] = useRefElements();

  useEffectWithPrevious((preValue, currentValue) => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power1.out",
        duration: 0.6,
      },
    });

    tl.to(backgroundsRef.current[preValue], { autoAlpha: 0 });
    tl.to(backgroundsRef.current[currentValue], { autoAlpha: 1 }, "<");
  }, current);

  return {
    setBackgroundRef,
  };
};
