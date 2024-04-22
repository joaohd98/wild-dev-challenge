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

    tl.set(backgroundsRef.current[currentValue], { "--blur": 100 });
    tl.to(backgroundsRef.current[preValue], { autoAlpha: 0 });
    tl.to(backgroundsRef.current[currentValue], { autoAlpha: 1 }, "<");
    tl.set(backgroundsRef.current[preValue], { "--blur": 0 });
  }, current);

  return {
    setBackgroundRef,
  };
};
