import localFont from "next/font/local";

export const tungsten = localFont({
  variable: "--tungsten",
  src: [
    {
      path: "../../../public/fonts/tungsten/Tungsten-Semibold.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/tungsten/Tungsten-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});
