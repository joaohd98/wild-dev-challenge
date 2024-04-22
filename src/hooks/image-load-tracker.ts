import { useEffect, useRef } from "react";
import gsap from "gsap";

export const useImageLoadTracker = (onEachImageLoaded: (toValue: number) => void) => {
  const loadedImagesQt = useRef(0);

  useEffect(() => {
    const backgroundImages = document.querySelectorAll<HTMLElement>("div");
    const urls: string[] = [];

    backgroundImages.forEach((bg) => {
      const url = gsap.getProperty(bg, "background-image") as string;
      if (url.startsWith("url")) {
        // extract the url from the property
        urls.push(url.replace(/^url\(["']?/, "").replace(/["']?\)$/, ""));
      }
    });

    const urlsQt = urls.length;
    if (urlsQt === 0) {
      onEachImageLoaded(1);
      return;
    }

    const onLoadMedia = () => {
      loadedImagesQt.current++;
      onEachImageLoaded(loadedImagesQt.current / urlsQt);
    };

    urls.forEach((url) => {
      const img = new Image();
      img.src = url;

      if (img.complete) {
        onLoadMedia();
      } else {
        img.addEventListener("load", onLoadMedia);
      }
    });
  }, [onEachImageLoaded]);
};
