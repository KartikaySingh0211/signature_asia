"use client";
import Image from "next/image";
import React from "react";

// Leaf Component
const LeafIcon = ({ className = "", style = {} }) => (
	<Image
		className={className}
		style={style}
		src={"/leaf.png"}
		alt="Leaf Icon"
		width={100}
		height={100}
	/>
);

// Background Pattern Component
type LeafBackgroundPatternProps = {
	children: React.ReactNode;
	className?: string;
};

const LeafBackgroundPattern = ({
	children,
	className = "",
}: LeafBackgroundPatternProps) => {
	// Generate leaf positions and rotations
	const leaves = Array.from({ length: 24 }, (_, i) => {
		const row = Math.floor(i / 6);
		const col = i % 6;

		return {
			id: i,
			left: `${col * 20 + (row % 2 === 0 ? 0 : 10)}%`,
			top: `${row * 25}%`,
			scale: 0.8 + Math.random() * 0.4, // Random scale between 0.8 and 1.2
			opacity: 0.06 + Math.random() * 0.02, // Random opacity
		};
	});

	return (
		<div className={`relative min-h-screen ${className}`}>
			{/* Background Pattern */}
			<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
				{leaves.map((leaf) => (
					<div
						key={leaf.id}
						className="absolute"
						style={{
							left: leaf.left,
							top: leaf.top,
							transform: ` scale(${leaf.scale})`,
							opacity: leaf.opacity,
						}}
					>
						<LeafIcon className="w-16 h-24 sm:w-20 sm:h-28 md:w-24 md:h-36 text-green-600" />
					</div>
				))}
			</div>

			{/* Content */}
			<div className="relative z-10">{children}</div>
		</div>
	);
};
export default LeafBackgroundPattern;
