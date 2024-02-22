import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Header from "@/components/globals/Header";
import Herosection from "@/components/home/Herosection";
import BelowHero from "@/components/home/BelowHero";
import LandScapeSeen from "@/components/home/LandScapeSeen";
import Footer from "@/components/globals/Footer";
import { WelcomeSection } from "@/components/home/sections/WelcomeSection";
import { EventSection } from "@/components/home/sections/EventSection";
import { BlogSection } from "@/components/home/sections/BlogSection";
import { TasteSection } from "@/components/home/sections/TasteSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main>
			<Header />
			<Herosection />
			<WelcomeSection />
			<EventSection />
			<TasteSection />
			<BlogSection />
			<BelowHero />
			<LandScapeSeen />
			<Footer />
		</main>
	);
}
