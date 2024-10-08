/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			keyframes: {
				fade: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				marquee: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(-100%)" },
				},
				gradientX: {
					"0%, 100%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
				},
			},
			animation: {
				fadeIn: "fade 1s ease-in-out",
				marquee: "marquee 15s linear infinite",
				gradientAnimation: "gradientX 1s ease infinite",
			},
		},
	},
	plugins: [],
};
