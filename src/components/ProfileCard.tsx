import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
});

interface ProfileCardProps {
	name: string;
	imageSrc: string;
	position: string;
	description: string;
	index: number;
}

const ProfileCard = ({
	name,
	imageSrc,
	position,
	description,
	index,
}: ProfileCardProps) => {
	return (
		<div key={index} className="bg-[#417849] rounded-sm p-6 shadow-lg">
			{/* Name Header */}
			<div className="bg-[#FFF6C4] rounded-sm font-bold p-4 text-center mb-6">
				<h2 className="text-2xl font-semibold text-black">{name}</h2>
			</div>

			<div className="flex flex-col md:flex-row gap-6">
				{/* Profile Image */}
				<div className="flex-shrink-0 flex flex-col justify-center items-center">
					<div className="w-48 h-48 rounded-full bg-green-100 overflow-hidden">
						<Image
							loading="eager"
							src={imageSrc}
							alt={name}
							className={`w-full h-full object-cover ${
								index === 2 ? "mt-6 " : ""
							}`}
							width={140}
							height={140}
							quality={100}
						/>
					</div>
					<div className="mt-4 bg-[#FFF6C4] rounded-sm p-2 text-center">
						<span className="text-xl font-bold text-black">{position}</span>
					</div>
				</div>

				{/* Description */}
				<div className="flex-1">
					<div className="bg-[#FFF6C4] rounded-sm p-4 h-full">
						<p
							className={`text-sm ${inter.className} text-black leading-relaxed`}
						>
							{description}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
