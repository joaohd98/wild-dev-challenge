import { type Metadata } from "next";
import { HomeTemplate } from "@/templates/home";

export const metadata: Metadata = {
  title: "WILD - Code Challenge",
  description: "WILD - Code Challenge",
};

export default function Home() {
  return <HomeTemplate />;
}
