import React from "react";

interface ContactMapProps {
	title?: string;
	description?: string;
	className?: string;
	height?: string;
	showTitle?: boolean;
	showDescription?: boolean;
	borderRadius?: string;
	shadow?: boolean;
}

const ContactMap: React.FC<ContactMapProps> = ({
	title = "Visit Our Location",
	description = "Find us at Signature Asia's, Ghaziabad",
	className = "",
	height = "450px",
	showTitle = true,
	showDescription = true,
	borderRadius = "12px",
	shadow = true,
}) => {
	const containerClasses = `
    w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 rounded-lg
    ${shadow ? "shadow-lg hover:shadow-xl transition-shadow duration-300" : ""}
    ${className}
  `.trim();

	const mapContainerStyle = {
		position: "relative" as const,
		width: "100%",
		height: height,
		borderRadius: borderRadius,
		overflow: "hidden",
		backgroundColor: "#f3f4f6",
		background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
	};

	const iframeStyle = {
		width: "100%",
		height: "100%",
		border: 0,
		borderRadius: borderRadius,
		filter: "contrast(1.1) saturate(1.1)",
	};

	return (
		<div className={containerClasses}>
			{/* Header Section */}
			{(showTitle || showDescription) && (
				<div className="text-center mb-6">
					{showTitle && (
						<h2 className="text-2xl sm:text-3xl font-bold text-[#FFF6C4] mb-2">
							{title}
						</h2>
					)}
					{showDescription && (
						<p className="text-white text-sm sm:text-base max-w-2xl mx-auto">
							{description}
						</p>
					)}
				</div>
			)}

			{/* Map Container */}
			<div style={mapContainerStyle} className="relative group">
				{/* Google Maps Embed */}
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.5529633600997!2d77.43208951971562!3d28.65654682337414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf13a35dada03%3A0x15a5a00032a4e1d1!2sSignature%20Asia!5e0!3m2!1sen!2sin!4v1751630883339!5m2!1sen!2sin"
					style={iframeStyle}
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					title="Signature Asia Location Map"
					aria-label="Google Maps showing Signature Asia location in Ghaziabad"
				/>

				{/* Decorative Corner Elements */}
				<div className="absolute top-4 right-4 w-3 h-3 bg-white bg-opacity-20 rounded-full"></div>
				<div className="absolute bottom-4 left-4 w-2 h-2 bg-white bg-opacity-30 rounded-full"></div>
			</div>

			{/* Get Directions Button */}
			<div className="mt-6 text-center">
				<a
					href="https://www.google.com/maps?daddr=Mansa+complex,+7,+Ambedkar+Road,+near+chaudhary+more,+New+Gandhi+Nagar,+Bagh+Bhathyari,+Naya+Ganj,+Ghaziabad,+Uttar+Pradesh,+India"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center px-6 py-3 bg-yellow-200 hover:bg-yellow-300 text-black font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
				>
					<svg
						className="w-5 h-5 mr-2"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
						/>
					</svg>
					Get Directions
				</a>
			</div>
		</div>
	);
};

export default ContactMap;
