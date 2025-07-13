import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				matangi: ["var(--font-matangi)", "sans-serif"],
			},
		},
	},
	plugins: [],
};

export default config;
