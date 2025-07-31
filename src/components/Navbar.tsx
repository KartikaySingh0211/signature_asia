"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navLinks } from "@/utils/constants";

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const pathname = usePathname();
	const router = useRouter();
	const isHomePage = pathname === "/";

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

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

	const handleLogoClick = () => {
		if (isHomePage) {
			scrollToSection("hero");
		} else {
			router.push("/");
		}
	};

	return (
		<header className="bg-[#417849] navbar-bottom-fade fixed w-full top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4">
					{/* Logo */}
					<div
						className="flex items-center space-x-2 cursor-pointer"
						onClick={handleLogoClick}
					>
						<div className="bg-white rounded-full">
							<Image
								src={"/logo.png"}
								alt="Signature Asia Logo"
								width={50}
								height={50}
								className="h-[100%] w-[100%]"
							/>
						</div>
						<span className="text-white font-semibold text-xl">
							Signature Asia&apos;s
						</span>
					</div>

					{/* Centered Navigation for desktop */}
					<nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
						{/* Navigation Links */}
						{navLinks.map((link) => (
							<div
								key={link.href}
								onClick={() => scrollToSection(link.href)}
								className="text-white font-bold hover:text-green-200 transition-colors duration-200 cursor-pointer"
							>
								{link.name}
							</div>
						))}
					</nav>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={toggleMobileMenu}
							className="text-white hover:text-green-200 transition-colors duration-200"
						>
							{isMobileMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Navigation Menu */}
				{isMobileMenuOpen && (
					<div className="md:hidden">
						<div className="bg-green-800 rounded-b-lg shadow-lg">
							<div className="px-4 pt-3 pb-4 space-y-1">
								{/* Mobile Navigation Links */}
								{navLinks.map((link) => (
									<div
										key={link.href}
										onClick={() => {
											toggleMobileMenu();
											scrollToSection(link.href);
										}}
										className="block px-4 py-3 text-white hover:text-green-200 hover:bg-green-600 rounded-lg transition-all duration-200 cursor-pointer active:bg-green-500 font-medium"
									>
										{link.name}
									</div>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
