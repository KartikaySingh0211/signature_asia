"use client";
import React from "react";
import Image from "next/image";

export default function MissionSection() {
	return (
		<section className="py-16 cursor-default">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="relative text-center mb-16 pt-8">
					<div className="absolute left-8 top-0 inline-block bg-[#417849] text-[#f3e9c4] px-4 py-2 rounded-xl text-sm font-medium mb-4">
						Our mission
					</div>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#005249] mb-6">
						Innovative Solutions for Modern Agriculture
					</h2>
					<p className="text-lg text-[#623E15] max-w-3xl mx-auto leading-relaxed">
						At Signature Asias, we specialize in agricultural chemicals that
						boost productivity. Our products are designed to meet the diverse
						needs of farmers.
					</p>
				</div>

				{/* Three Column Layout */}
				<div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
					{/* Left Column - Pest Protection */}
					<div className="text-center">
						{/* Bug Icon */}
						<div className="flex flex-col items-center justify-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
							<div className="flex justify-center mb-6 ">
								<div className="relative">
									<Image
										src={"/Bug.png"}
										alt="Bug Icon"
										width={160}
										height={160}
									/>
								</div>
							</div>

							<h3 className="text-xl md:text-3xl text-[#417849] mb-4">
								Expertise in Pesticides and Insecticides
							</h3>
							<p className="text-[#623E15] mb-6 leading-relaxed">
								Our pesticide solutions effectively manage pest populations.
							</p>
						</div>

						<div className="text-left p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
							<h4 className="text-3xl font-semibold text-[#417849] mb-3">
								Pest Protection
							</h4>
							<p className="text-[#623E15] text-sm">
								Safeguard your crops with our effective pesticides and
								fungicides for optimal health.
							</p>
						</div>
					</div>

					{/* Middle Column - Fungicides */}
					<div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 pt-28">
						{/* Shield Icon */}
						<div className="flex justify-center mb-6">
							<div className="relative">
								<Image
									src={"/Shield.png"}
									alt="Shield Icon"
									width={160}
									height={160}
								/>
							</div>
						</div>

						<h3 className="text-xl md:text-3xl text-[#417849] mb-4">
							Advanced Fungicides for Crop Protection
						</h3>
						<p className="text-[#623E15] mb-6 leading-relaxed">
							We offer fungicides that safeguard your crops.
						</p>
					</div>

					{/* Right Column - Plant Growth */}
					<div className="text-center ">
						{/* Award/Medal Icon */}
						<div className="flex flex-col items-center justify-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
							<div className="flex justify-center mb-6 ">
								<div className="relative">
									<Image
										src={"/quality.png"}
										alt="Quality Icon"
										width={160}
										height={160}
									/>
								</div>
							</div>

							<h3 className="text-xl md:text-3xl text-[#417849] mb-4">
								High-Quality Plant Growth Regulator for Optimal Growth
							</h3>
							<p className="text-[#623E15] leading-relaxed">
								Our products enhance plant health and crop yield.
							</p>
						</div>

						<div className=" text-right p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
							<h4 className="text-3xl font-semibold text-[#417849] mb-3">
								Crop Yield
							</h4>
							<p className="text-[#623E15] text-sm">
								Increase your productivity with our advanced plant growth
								regulator and crop protection products.
							</p>
						</div>
					</div>
				</div>

				{/* Bottom decorative elements */}
				<div
					id="product"
					className="mt-16 flex justify-center space-x-4 opacity-30"
				>
					<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
					<div
						className="w-3 h-3 bg-green-400 rounded-full animate-pulse"
						style={{ animationDelay: "0.2s" }}
					></div>
					<div
						className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
						style={{ animationDelay: "0.4s" }}
					></div>
				</div>
			</div>
		</section>
	);
}
