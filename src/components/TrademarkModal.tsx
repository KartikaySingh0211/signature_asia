import { trademarks } from "@/utils/constants";
import React, { useEffect, useState } from "react";

const TrademarkModal = ({
	setIsOpen,
}: {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Trigger the animation after component mounts
		setIsVisible(true);
	}, []);

	const handleClose = () => {
		setIsVisible(false);
		// Wait for animation to complete before closing
		setTimeout(() => setIsOpen(false), 200);
	};

	return (
		<div
			className={`fixed inset-0 bg-black/50 flex justify-center items-center z-50 cursor-default transition-opacity duration-200 ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
		>
			{/* Modal Content */}
			<div
				className={`bg-[#417849] rounded-2xl shadow-xl p-6 w-11/12 md:w-2/3 lg:w-1/2 relative transition-all duration-200 ${
					isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
				}`}
			>
				<h2 className="text-xl font-semibold mb-4 text-center">
					Registered Trademarks
				</h2>

				{/* Close Button */}
				<button
					onClick={handleClose}
					className="absolute top-3 right-3 text-[#FFF6C4] cursor-pointer hover:scale-110 transition-transform duration-200 text-xl"
				>
					✕
				</button>

				{/* Table */}
				<div className="overflow-x-auto">
					<table className="min-w-full border border-gray-200">
						<thead>
							<tr className="bg-[#FFF6C4] text-black">
								<th className="border p-2">Trademark</th>
								<th className="border p-2">Registration No.</th>
								<th className="border p-2">Date of Registration</th>
							</tr>
						</thead>
						<tbody>
							{trademarks.map((t, index) => (
								<tr key={index}>
									<td className="border p-2">{t.name}</td>
									<td className="border p-2">{t.regNo}</td>
									<td className="border p-2">{t.date}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<p className="text-sm text-[#FFF6C4] mt-4 text-center">
					All trademarks mentioned above are the property of their respective
					owners and are protected under applicable trademark laws. Unauthorized
					use is strictly prohibited.
				</p>
			</div>
		</div>
	);
};

export default TrademarkModal;
