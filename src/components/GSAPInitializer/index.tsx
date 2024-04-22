import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Observer from "gsap/Observer";

gsap.registerPlugin(useGSAP, Observer);

export const GSAPInitializer = () => {
  return null;
};
