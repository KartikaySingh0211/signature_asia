"use client";

import LeafBackgroundPattern from "@/components/LeafBackgroundPattern";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

import HeroSection from "@/components/sections/HeroSection";
import MissionSection from "@/components/sections/Mission";
import ProductSection from "@/components/sections/ProductSection";

export default function LandingPage() {
	return (
		<LeafBackgroundPattern className="min-h-screen bg-[#FFF6C4]">
			<HeroSection />
			<MissionSection />
			<ProductSection />
			<AboutSection />
			<ContactSection />

			<style jsx>{`
				@keyframes sway {
					0% {
						transform: translateX(0) rotate(0deg);
					}
					100% {
						transform: translateX(5px) rotate(2deg);
					}
				}
			`}</style>
		</LeafBackgroundPattern>
	);
}
