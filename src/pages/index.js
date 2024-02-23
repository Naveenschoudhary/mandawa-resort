import { Inter } from "next/font/google";
import Header from "@/components/globals/Header";
import Footer from "@/components/globals/Footer";
import { WelcomeSection } from "@/components/home/sections/WelcomeSection";
import { EventSection } from "@/components/home/sections/EventSection";
import { BlogSection } from "@/components/home/sections/BlogSection";
import { TasteSection } from "@/components/home/sections/TasteSection";
import BackgroundVideo from "@/components/about/HeroSection";
import { IMAGE_BASE_URL } from "@/utlis/config";
import ExploreSection from "@/components/home/sections/ExploreSection";
import HighlightsSectionComponent from "@/components/home/section_components/HighlightsSectionComponent";
import Testimonials from "@/components/home/section_components/TestimonialSectionComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main>
			<Header />
			<BackgroundVideo
				videoSrc={`${IMAGE_BASE_URL}/VIDEO-2024-01-23-12-29-29.mp4`}
				thumbnailSrc={`${IMAGE_BASE_URL}/PHOTO-2023-07-23-13-41-30.jpg`}
			/>
			<WelcomeSection />
			<HighlightsSectionComponent />
			<ExploreSection />
			<EventSection />
			<TasteSection />
			<Testimonials />
			<BlogSection />
			{/* <Footer /> */}
		</main>
	);
}
