"use client";
import { teamMembers } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
});

const Partners = () => {
	return (
		<div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 mt-20 sm:mt-20 lg:mt-20">
			<div className="max-w-7xl mx-auto">
				{/* Header Section */}
				<div className="text-center mb-8 sm:mb-12 lg:mb-16 relative">
					<div className="inline-block">
						<h1 className="bg-[#417849] text-[#FFF6C4] px-4 sm:px-6 lg:px-8 sm:py-2 rounded-md text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 shadow-2xl">
							Our Partners
						</h1>
					</div>
					<h2 className="text-[#5A7B47] text-2xl sm:text-3xl lg:text-4xl font-bold px-4">
						Together we&apos;re an Ocean
					</h2>
				</div>

				{/* Team Members Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
					{teamMembers.map(
						(member, index) =>
							index % 2 === 0 && (
								// Only render odd indexed members
								<div
									key={index}
									className="bg-[#417849] rounded-sm p-6 shadow-lg"
								>
									{/* Name Header */}
									<div className="bg-[#FFF6C4] rounded-sm font-bold p-4 text-center mb-6">
										<h2 className="text-2xl font-bold text-black">
											{member.name}
										</h2>
									</div>

									<div className="flex flex-col md:flex-row gap-6">
										{/* Profile Image */}
										<div className="flex-shrink-0 flex flex-col justify-center items-center">
											<div className="w-48 h-48 rounded-full bg-green-100 overflow-hidden">
												<Image
													loading="eager"
													src={member.image}
													alt={member.name}
													className="w-full h-full object-cover"
													width={140}
													height={140}
													quality={100}
												/>
											</div>
											<div className="mt-4 bg-[#FFF6C4] rounded-sm p-2 text-center">
												<span className="text-xl font-bold text-black">
													{member.position}
												</span>
											</div>
										</div>

										{/* Description */}
										<div className="flex-1">
											<div className="bg-[#FFF6C4] rounded-sm p-4 h-full">
												<p
													className={`text-sm ${inter.className} text-black leading-relaxed`}
												>
													{member.description}
												</p>
											</div>
										</div>
									</div>
								</div>
							)
					)}
				</div>
			</div>
		</div>
	);
};

export default Partners;
