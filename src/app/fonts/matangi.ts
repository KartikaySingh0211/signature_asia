// app/fonts/matangi.ts
import localFont from "next/font/local";

export const matangi = localFont({
	src: [
		{
			path: "./Matangi-Light.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "./Matangi-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./Matangi-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "./Matangi-SemiBold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "./Matangi-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "./Matangi-ExtraBold.ttf",
			weight: "800",
			style: "normal",
		},
	],
	variable: "--font-matangi",
	display: "swap",
});
