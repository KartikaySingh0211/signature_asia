"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/utils/constants";
import Image from "next/image";

const ProductCarousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % products.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
	};

	return (
		<div className="w-full max-w-full mx-auto sm:p-8 md:px-32  rounded-2xl">
			<div className="relative overflow-hidden rounded-xl bg-[#417849] shadow-lg">
				{/* Header */}
				<div className="text-center py-4 sm:py-6 bg-[#11582A] px-4">
					<h1 className="text-lg sm:text-3xl font-extrabold text-[#E9E5B4] tracking-wide">
						Boost Your Harvest with Our Solutions
					</h1>
				</div>

				{/* Carousel Container */}
				<div className="relative h-auto sm:h-fit overflow-hidden">
					{/* Slides */}
					<div
						className="flex transition-transform duration-500 ease-in-out"
						style={{ transform: `translateX(-${currentSlide * 100}%)` }}
					>
						{products.map((product) => (
							<div key={product.id} className="min-w-full h-fit">
								{/* Mobile Layout */}
								<div className="flex flex-col items-center justify-center sm:hidden px-4 py-6 min-h-[500px]">
									{/* Product Image */}
									<div className="flex items-center justify-center">
										<Image
											src={product.image}
											alt={product.name}
											width={180}
											height={250}
											quality={100}
											loading="eager"
										/>
									</div>

									{/* Product Details */}
									<div
										className={`bg-[#E9E5B4] rounded-lg p-4 text-black ${
											product.id === 1 || product.id === 3 || product.id === 4
												? "mt-10"
												: ""
										}`}
									>
										<h2 className="text-xl font-bold mb-3 text-black">
											{product.name}
										</h2>

										<p className="text-xs mb-3 font-bold leading-relaxed">
											{product.description}
										</p>

										<div className="mb-3">
											<p className="text-xs font-bold mb-2 text-black">
												{product.dualMode}
											</p>
											<div className="ml-3">
												{product.actions.map((action, idx) => (
													<p key={idx} className="text-xs mb-1 font-bold">
														• {action}
													</p>
												))}
											</div>
										</div>

										<p className="text-xs mb-3 leading-relaxed font-bold">
											{product.effect}
										</p>

										<div>
											<h3 className="text-sm font-bold mb-2 text-black">
												Benefits
											</h3>
											<div className="space-y-1">
												{product.benefits.map((benefit, idx) => (
													<p key={idx} className="text-xs font-bold">
														• {benefit}
													</p>
												))}
											</div>
										</div>
									</div>
								</div>

								{/* Desktop Layout */}
								<div className="hidden sm:flex items-center justify-center px-12 py-8 min-h-[600px]">
									{/* Product Image */}
									<div className="flex-shrink-0 mr-32 flex items-center justify-center">
										<Image
											src={product.image}
											alt={product.name}
											width={200}
											height={300}
											quality={100}
											loading="eager"
										/>
									</div>

									{/* Product Details */}
									<div className="flex-1 bg-[#E9E5B4] lg:max-w-4xl rounded-lg p-6 text-black">
										<h2 className="text-2xl font-bold mb-4 text-black">
											{product.name}
										</h2>

										<p className="text-sm mb-4 font-bold leading-relaxed ">
											{product.description}
										</p>

										<div className="mb-4">
											<p className="text-sm font-bold mb-2 text-black">
												{product.dualMode}
											</p>
											<div className="ml-4">
												{product.actions.map((action, idx) => (
													<p key={idx} className="text-sm mb-1 font-bold ">
														• {action}
													</p>
												))}
											</div>
										</div>

										<p className="text-sm mb-4 leading-relaxed font-bold ">
											{product.effect}
										</p>

										<div>
											<h3 className="text-lg font-bold mb-3 text-black">
												Benefits
											</h3>
											<div className="space-y-1">
												{product.benefits.map((benefit, idx) => (
													<p key={idx} className="text-sm font-bold ">
														• {benefit}
													</p>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Navigation Arrows */}
					<button
						onClick={prevSlide}
						className="absolute left-2 sm:left-4 top-1/3 lg:top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-[#C2F195] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 z-10"
					>
						<ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-[#417849]" />
					</button>

					<button
						onClick={nextSlide}
						className="absolute right-2 sm:right-4 top-1/3 lg:top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-[#C2F195] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 z-10"
					>
						<ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-[#417849]" />
					</button>
				</div>

				{/* Slide Indicators */}
				<div className="flex justify-center space-x-2 py-4 bg-[#417849]">
					{products.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentSlide(index)}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								index === currentSlide
									? "bg-[#f3e9c4] scale-125"
									: "bg-[#11582A] hover:bg-[#f3e9c4]"
							}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductCarousel;
