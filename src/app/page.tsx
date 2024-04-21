import type { Metadata } from "next";
import { HomeTemplate } from "@/templates/home";
import { getPictures } from "@/api/get-pictures";

export const metadata: Metadata = {
  title: "WILD - Code Challenge",
  description: "WILD - Code Challenge",
};

export default async function Home() {
  const pictures = await getPictures();

  return <HomeTemplate pictures={pictures} />;
}
