import { teamMembers } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const Team = () => {
	return (
		<div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 lg:mt-10">
			<div className="max-w-7xl mx-auto">
				{/* Header Section */}
				<div className="text-center mb-8 sm:mb-12 lg:mb-16">
					<div className="inline-block">
						<h1 className="bg-[#417849] text-[#FFF6C4] px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 shadow-lg">
							Meet our Team
						</h1>
					</div>
					<h2 className="text-[#5A7B47] text-2xl sm:text-3xl lg:text-4xl font-bold px-4">
						The Architects of Progress
					</h2>
				</div>

				{/* Team Members Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start justify-items-center">
					{teamMembers.map((member) => (
						<div
							key={member.id}
							className="flex flex-col items-center w-full max-w-md lg:max-w-none"
						>
							{/* Member Image and Info Card */}
							<div className="relative mb-8 rounded-3xl hover:shadow-xl transition-shadow duration-300">
								<div className="w-64 h-80 sm:w-72 sm:h-90 lg:w-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
									<Image
										height={384}
										width={320}
										src={member.image}
										alt={member.name}
										className="w-full h-full object-cover"
									/>
								</div>

								{/* Name and Position Badge */}
								<div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-xs sm:max-w-sm px-2">
									<div className="bg-[#BBD199] px-4 sm:px-6 py-3 rounded-2xl shadow-lg text-center min-w-0">
										<h3 className="text-black text-lg sm:text-xl font-bold leading-tight">
											{member.name}
										</h3>
										<p className="text-black text-base sm:text-lg font-semibold leading-tight">
											{member.position}
										</p>
									</div>
								</div>
							</div>

							{/* Description (only for CEO) */}
							{member.description && (
								<div className="mt-8 w-full max-w-sm sm:max-w-md">
									<div className="bg-[#BBD1B1] p-4 sm:p-6 rounded-2xl shadow-lg">
										<p className="text-black text-sm sm:text-base leading-relaxed">
											{member.description}
										</p>
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Team;
