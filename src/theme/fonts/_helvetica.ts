import localFont from "next/font/local";

export const helvetica = localFont({
  variable: "--helvetica",
  src: [
    {
      path: "../../../public/fonts/helvetica/Helvetica-Light.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/helvetica/Helvetica-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});
