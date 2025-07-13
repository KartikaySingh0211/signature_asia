"use client";
import React from "react";
import ContactForm from "../ContactForm";
import ContactMap from "../ContactMap";

interface ContactSectionProps {
	className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ className = "" }) => {
	return (
		<div
			className={`mt-10 p-6 pb-[10vh] w-full flex flex-col items-center ${className}`}
		>
			<div className="bg-[#417849] rounded-3xl p-8 w-fit max-w-7xl shadow-2xl relative overflow-hidden">
				{/* Noise texture overlay */}
				<div
					className="absolute inset-0 opacity-40 pointer-events-none"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.8' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
						backgroundSize: "128px 128px",
						mixBlendMode: "multiply",
					}}
				></div>

				{/* Header decoration line */}
				<div className="w-full h-3 bg-[#FFF6C4] rounded-full mb-8 relative z-10"></div>

				<div className="grid lg:grid-cols-2 gap-8 items-start relative z-10">
					{/* Left side - Form */}
					<ContactForm />

					{/* Right side - Map placeholder */}
					<ContactMap />
				</div>

				{/* Bottom decoration line */}
				<div className="w-full h-3 bg-[#FFF6C4] rounded-full mt-8 relative z-10"></div>
			</div>
		</div>
	);
};

export default ContactSection;
