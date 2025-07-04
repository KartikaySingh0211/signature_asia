import type { Metadata } from "next";
import "./globals.css";

import { Maitree } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const maitree = Maitree({
	subsets: ["latin"],
	weight: ["400", "700"], // Adjust weights as needed
});

export const metadata: Metadata = {
	title: "Signature Asia",
	description:
		"Enhancing crop yields since 2015. Specializing in insecticides, fungicides and crop protection products.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${maitree.className} antialiased`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
