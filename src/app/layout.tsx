import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { matangi } from "@/app/fonts/matangi";

export const metadata: Metadata = {
	title: "Signature Asia's",
	description:
		"Specializing in insecticides, fungicides and crop protection products. Signature Asia's is a trusted name in the agro-chemical industry, committed to providing high-quality agricultural solutions since 2015. devill, nakail, sysstem, shikanja, hunkaar",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${matangi.variable} antialiased`}>
				<Analytics />
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
