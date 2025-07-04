import React from "react";

const Hero = () => {
	const scrollToSection = (sectionId: string) => {
		window.scrollTo({
			top: document.getElementById(sectionId)?.offsetTop || 0,
			behavior: "smooth",
		});
	};

	return (
		<section className="relative h-screen overflow-hidden" id="hero">
			{/* Background Image Overlay */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: "url('./bg.jpg')",
				}}
			/>

			{/* Animated stalks */}
			{/* <div className="absolute inset-0 overflow-hidden">
				{[...Array(15)].map((_, i) => (
					<div
						key={i}
						className="absolute bottom-0 opacity-40"
						style={{
							left: `${5 + i * 6}%`,
							transform: `translateY(${Math.random() * 20}px)`,
							animation: `sway ${
								3 + Math.random() * 2
							}s ease-in-out infinite alternate`,
						}}
					>
						<div
							className="w-1 bg-gradient-to-t from-green-600 to-green-400 rounded-full"
							style={{ height: `${150 + Math.random() * 100}px` }}
						>
							<div className="absolute -top-2 -left-2 w-5 h-8 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full opacity-80" />
						</div>
					</div>
				))}
			</div> */}

			{/* Hero Content */}
			<div className="relative top-1/5 z-10 text-center mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-4xl md:text-[48px] font-bold text-[#417849] mb-6">
					Empowering Farmers with Innovative Agro Solutions
				</h1>
				<p className="text-lg md:text-xl text-white font-bold mb-4 max-w-2xl mx-auto">
					Enhancing crop yields since 2015
				</p>
				<p className="text-base md:text-lg text-white font-bold mb-8 max-w-3xl mx-auto">
					Specializing in insecticides, fungicides and crop protection products.
				</p>
			</div>

			{/* Scroll indicator */}
			<div
				id="mission"
				onClick={() => scrollToSection("mission")}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
			>
				<div className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center">
					<div className="w-1 h-3 bg-green-600 rounded-full mt-2 animate-pulse" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
