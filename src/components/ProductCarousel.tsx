import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/utils/constants";
import Image from "next/image";

const HarvestCarousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % products.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
	};

	return (
		<div className="w-full max-w-6xl mx-auto p-2 sm:p-8 rounded-2xl">
			<div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-green-700 to-green-600 shadow-lg">
				{/* Header */}
				<div className="text-center py-4 sm:py-6 bg-green-800 px-4">
					<h1 className="text-lg sm:text-3xl font-bold text-yellow-100 tracking-wide">
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
							<div key={product.id} className="min-w-full">
								{/* Mobile Layout */}
								<div className="flex flex-col sm:hidden px-4 py-6">
									{/* Product Image */}
									<div className="flex items-center justify-center">
										<Image
											src={product.image}
											alt={product.name}
											width={180}
											height={250}
										/>
									</div>

									{/* Product Details */}
									<div className="bg-green-800 rounded-lg p-4 text-white">
										<h2 className="text-xl font-bold mb-3 text-yellow-200">
											{product.name}
										</h2>

										<p className="text-xs mb-3 leading-relaxed opacity-90">
											{product.description}
										</p>

										<div className="mb-3">
											<p className="text-xs font-semibold mb-2 text-yellow-200">
												{product.dualMode}
											</p>
											<div className="ml-3">
												{product.actions.map((action, idx) => (
													<p key={idx} className="text-xs mb-1 opacity-90">
														• {action}
													</p>
												))}
											</div>
										</div>

										<p className="text-xs mb-3 leading-relaxed opacity-90">
											{product.effect}
										</p>

										<div>
											<h3 className="text-sm font-semibold mb-2 text-yellow-200">
												Benefits
											</h3>
											<div className="space-y-1">
												{product.benefits.map((benefit, idx) => (
													<p key={idx} className="text-xs opacity-90">
														• {benefit}
													</p>
												))}
											</div>
										</div>
									</div>
								</div>

								{/* Desktop Layout */}
								<div className="hidden sm:flex items-center justify-center px-12 py-8">
									{/* Product Image */}
									<div className="flex-shrink-0 mr-8">
										<Image
											src={product.image}
											alt={product.name}
											width={200}
											height={300}
										/>
									</div>

									{/* Product Details */}
									<div className="flex-1 bg-green-800 rounded-lg p-6 text-white">
										<h2 className="text-2xl font-bold mb-4 text-yellow-200">
											{product.name}
										</h2>

										<p className="text-sm mb-4 leading-relaxed opacity-90">
											{product.description}
										</p>

										<div className="mb-4">
											<p className="text-sm font-semibold mb-2 text-yellow-200">
												{product.dualMode}
											</p>
											<div className="ml-4">
												{product.actions.map((action, idx) => (
													<p key={idx} className="text-sm mb-1 opacity-90">
														• {action}
													</p>
												))}
											</div>
										</div>

										<p className="text-sm mb-4 leading-relaxed opacity-90">
											{product.effect}
										</p>

										<div>
											<h3 className="text-lg font-semibold mb-3 text-yellow-200">
												Benefits
											</h3>
											<div className="space-y-1">
												{product.benefits.map((benefit, idx) => (
													<p key={idx} className="text-sm opacity-90">
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
						className="absolute left-2 sm:left-4 top-1/3 lg:1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 z-10"
					>
						<ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
					</button>

					<button
						onClick={nextSlide}
						className="absolute right-2 sm:right-4 top-1/3 lg:1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 z-10"
					>
						<ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
					</button>
				</div>

				{/* Slide Indicators */}
				<div className="flex justify-center space-x-2 py-4 bg-green-800">
					{products.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentSlide(index)}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								index === currentSlide
									? "bg-yellow-400 scale-125"
									: "bg-green-600 hover:bg-green-500"
							}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default HarvestCarousel;
