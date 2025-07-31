"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {
	const pathname = usePathname();
	const router = useRouter();
	const isHomePage = pathname === "/";

	const scrollToSection = (sectionId: string) => {
		if (isHomePage) {
			// If on home page, scroll to section
			window.scrollTo({
				top: document.getElementById(sectionId)?.offsetTop || 0,
				behavior: "smooth",
			});
		} else {
			// If on other pages, navigate to home page with hash using router
			router.push(`/#${sectionId}`);
		}
	};

	return (
		<footer className="bg-gray-800 text-white py-12 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Main Footer Content */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-32 mb-8">
					<div className="flex flex-col items-center justify-center rounded-full">
						<Image
							src={"/logo.png"}
							alt="Signature Asia's Logo"
							width={160}
							height={160}
						/>
						<span className="font-bold pt-5">Since 2015</span>
					</div>
					{/* Quick Links */}
					<div>
						<h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
						<ul className="space-y-3">
							<li>
								<div
									onClick={() => scrollToSection("mission")}
									className="text-gray-300 hover:text-green-400 transition-colors duration-200 cursor-pointer"
								>
									Our mission
								</div>
							</li>
							<li>
								<div
									onClick={() => scrollToSection("product")}
									className="text-gray-300 hover:text-green-400 transition-colors duration-200 cursor-pointer"
								>
									Products
								</div>
							</li>
							<li>
								<Link
									href={"/partners"}
									className="text-gray-300 hover:text-green-400 transition-colors duration-200 cursor-pointer"
								>
									Partners
								</Link>
							</li>
						</ul>
					</div>

					{/* Legal Info */}
					<div>
						<h3 className="text-xl font-bold mb-4 text-white">Legal Info</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="#license"
									className="text-gray-300 hover:text-green-400 transition-colors duration-200"
								>
									Product License
								</a>
							</li>
							<li>
								<a
									href="#copyright"
									className="text-gray-300 hover:text-green-400 transition-colors duration-200"
								>
									Copyright
								</a>
							</li>
						</ul>
					</div>

					{/* Follow Us */}
					<div>
						<h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="https://www.instagram.com/signatureasias/?__pwa=1"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-300 hover:text-green-400 transition-colors duration-200"
								>
									Instagram
								</Link>
							</li>

							<li>
								<Link
									href="https://www.youtube.com/@signatureasias"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-300 hover:text-green-400 transition-colors duration-200"
								>
									Youtube
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="tel:+919837066801"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-300 hover:text-green-400 transition-colors duration-200"
								>
									Phone number
								</Link>
							</li>
							<li>
								<Link
									href="https://maps.app.goo.gl/RWMm4o9E171PFJci9"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-300 hover:text-green-400 transition-colors duration-200"
								>
									Office
								</Link>
							</li>
							<li>
								<Link
									href="mailto:signatureasias@gmail.com"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-300 hover:text-green-400 transition-colors duration-200"
								>
									Email
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
