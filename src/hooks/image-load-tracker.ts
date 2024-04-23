import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const useImageLoadTracker = (onEachImageLoaded: (toValue: number) => void) => {
  const loadedImagesQt = useRef(0);

  useGSAP(() => {
    const images = document.querySelectorAll<HTMLImageElement>("img");
    const imagesQt = images.length;

    if (imagesQt === 0) {
      onEachImageLoaded(1);
      return;
    }

    const onLoadMedia = () => {
      loadedImagesQt.current++;
      onEachImageLoaded(loadedImagesQt.current / imagesQt);
    };

    images.forEach((image) => {
      if (image.complete) {
        onLoadMedia();
      } else {
        image.addEventListener("load", onLoadMedia);
      }
    });
  }, []);
};
