import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Header from "@/components/globals/Header";
import Herosection from "@/components/home/Herosection";
import BelowHero from "@/components/home/BelowHero";
import LandScapeSeen from "@/components/home/LandScapeSeen";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header/>
      <Herosection/>
      <BelowHero/>
      <LandScapeSeen/>
    </main>
  );
}
