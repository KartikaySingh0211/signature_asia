import React from "react";
import Image from "next/image";
import Link from "next/link";

const PartnerMotoPage: React.FC = () => {
	return (
		<div className="cursor-default">
			<div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
				{/* Header */}
				<div className="mb-14 mt-40">
					<Image src={"/moto.png"} alt="Moto" width={600} height={500} />
				</div>

				{/* Main content */}
				<div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-7xl mx-auto">
					{/* Profile Card */}
					<div className="md:min-w-sm">
						<div className="bg-[#417849] rounded-sm p-6 shadow-lg">
							{/* Name Header */}
							<div className="bg-[#FFF6C4] rounded-sm font-bold px-4 py-1 text-center mb-6">
								<h2 className="text-2xl font-semibold text-black">
									Subhash Chaudhary
								</h2>
							</div>

							<div className="flex flex-col bg-[#FFF6C4] md:flex-row items-center justify-center rounded-sm py-5">
								{/* Profile Image */}
								<div className="flex justify-center items-center">
									<div className="w-48 h-48 flex justify-center items-center rounded-full bg-green-100 overflow-hidden">
										<Image
											loading="eager"
											src={"/founder.png"}
											alt="Subhash Chaudhary"
											className={`w-full h-full object-cover `}
											width={140}
											height={140}
											quality={100}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Company Description */}
					<div className="flex-1 max-w-2xl">
						<div className=" backdrop-blur-xs p-6 rounded-lg shadow-lg">
							<p className="text-black font-bold leading-relaxed text-sm md:text-base">
								Founded in 2015, Signature Asia&apos;s is more than just a
								pesticides company; it&apos;s a friend and partner to farmers.
								With the heartfelt vision of bringing smiles to farmers&apos;
								faces, the company has worked tirelessly to provide safe,
								effective, and reliable crop protection solutions. Over the past
								decade, Signature Asia&apos;s has flourished, growing
								exponentially and building a warm network of trust across Uttar
								Pradesh. Farmers have embraced the brand for its unwavering
								support, quality products, and genuine care. At Signature
								Asia&apos;s, every effort is rooted in gratitude and dedication,
								because when our farmers thrive, we all flourish together.
							</p>
						</div>
					</div>
				</div>

				{/* Bottom Link */}
				<div className="text-center mt-12">
					<div className="inline-block">
						<Link
							href="/partner-moto/partners"
							className="text-lg font-bold text-black underline"
						>
							See all partners
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PartnerMotoPage;
