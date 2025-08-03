"use client";
import React, { useEffect, useState } from "react";

const Hero = () => {
	const scrollToSection = (sectionId: string) => {
		window.scrollTo({
			top: document.getElementById(sectionId)?.offsetTop || 0,
			behavior: "smooth",
		});
	};

	// Array of background images
	const backgroundImages = ["/bg1.png", "/bg2.png", "/bg3.jpg", "bg4.jpg"];

	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Auto-advance slideshow every 5 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex(
				(prevIndex) => (prevIndex + 1) % backgroundImages.length
			);
		}, 5000); // Change image every 5 seconds

		return () => clearInterval(interval);
	}, []);

	return (
		<section className="relative h-screen overflow-hidden" id="hero">
			{/* Background Image Overlay */}
			{backgroundImages.map((image, index) => (
				<img
					key={index}
					className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
						index === currentImageIndex ? "opacity-100" : "opacity-0"
					}`}
					src={image}
					alt="Background"
					style={{
						imageRendering: "crisp-edges",
					}}
					loading="eager"
				/>
			))}

			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-black opacity-10" />

			{/* Hero Content */}
			<div className="relative top-1/6 z-10 text-center mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-4xl md:text-[48px] font-extrabold text-[#005249] mb-6">
					Empowering Farmers with Innovative Agro Solutions
				</h1>
				<p className="text-lg md:text-2xl text-white font-semibold mt-8 max-w-2xl mx-auto text-shadow-2xs">
					Enhancing crop yields since 2015
				</p>
				<p className="text-base md:text-2xl text-white font-semibold mb-8 max-w-4xl mx-auto text-shadow-2xs">
					Specializing in insecticides, fungicides and crop protection products.
				</p>
			</div>

			{/* Scroll indicator */}
			<div
				id="mission"
				onClick={() => scrollToSection("mission")}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
			>
				<div className="w-10 h-14 border-4 border-green-600 rounded-full flex justify-center">
					<div className="w-1 h-3 bg-green-600 rounded-full mt-2 animate-pulse" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
