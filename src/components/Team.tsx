"use client";
import { teamMembers } from "@/utils/constants";
import React from "react";
import ProfileCard from "./ProfileCard";

const Team = () => {
	return (
		<div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 lg:mt-20">
			<div className="max-w-7xl mx-auto">
				{/* Header Section */}
				<div className="text-center mb-8 sm:mb-12 lg:mb-16 relative">
					<div className="inline-block">
						<h1 className="bg-[#417849] text-[#FFF6C4] px-4 sm:px-6 lg:px-8 sm:py-2 rounded-md text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 shadow-2xl">
							Meet our Team
						</h1>
					</div>
					<h2 className="text-[#5A7B47] text-2xl sm:text-3xl lg:text-4xl font-bold px-4">
						The Architects of Progress
					</h2>
				</div>

				{/* Team Members Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
					{teamMembers.map(
						(member, index) =>
							index < 2 && (
								<ProfileCard
									key={index}
									name={member.name}
									imageSrc={member.image}
									position={member.position}
									description={member.description}
									index={index}
								/>
							)
					)}
				</div>
			</div>
		</div>
	);
};

export default Team;
