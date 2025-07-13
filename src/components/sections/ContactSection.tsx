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
			className={`mt-10 p-6 min-h-screen w-full flex items-center justify-center ${className}`}
		>
			<div className="bg-[#417849] rounded-3xl p-8 w-fit max-w-7xl shadow-2xl">
				{/* Header decoration line */}
				<div className="w-full h-3 bg-[#FFF6C4] rounded-full mb-8"></div>

				<div className="grid lg:grid-cols-2 gap-8 items-start">
					{/* Left side - Form */}
					<ContactForm />

					{/* Right side - Map placeholder */}
					<ContactMap />
				</div>

				{/* Bottom decoration line */}
				<div className="w-full h-3 bg-[#FFF6C4] rounded-full mt-8"></div>
			</div>
		</div>
	);
};

export default ContactSection;
