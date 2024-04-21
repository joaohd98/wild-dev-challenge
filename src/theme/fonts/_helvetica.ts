import localFont from "next/font/local";

export const helvetica = localFont({
  variable: "--helvetica",
  src: [
    {
      path: "../../../public/fonts/helvetica/Helvetica-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/helvetica/Helvetica-Oblique.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});
