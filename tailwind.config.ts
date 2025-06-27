import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				ubuntu: ["ubuntu", "sans-serif"],
				inter: ["Inter", "sans-serif"],
				mono: ["JetBrains Mono", "monospace"],
			},
			colors: {
				primary: {
					DEFAULT: "#2B2B2B",
					dark: "#1A1A1A",
					hover: "#404040",
					foreground: "#FFFFFF",
				},
				secondary: {
					DEFAULT: "#B3B3B3",
					dark: "#2B2B2B",
					foreground: "#2B2B2B",
				},
				gray: {
					DEFAULT: "#2B2B2B",
					light: "#D4D4D4",
					"50": "#FFFFFF",
					"100": "#F8F8F8",
					"200": "#E8E8E8",
					"300": "#D4D4D4",
					"400": "#B3B3B3",
					"500": "#909090",
					"600": "#707070",
					"700": "#505050",
					"800": "#2B2B2B",
					"900": "#1A1A1A",
				},
				darkBlue: "#2B2B2B",
				footer: "#2B2B2B",
				border: "rgb(var(--border))",
				input: "rgb(var(--input))",
				ring: "rgb(var(--ring))",
				background: "rgb(var(--background))",
				foreground: "rgb(var(--foreground))",
				destructive: {
					DEFAULT: "rgb(var(--destructive))",
					foreground: "rgb(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "rgb(var(--muted))",
					foreground: "rgb(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "rgb(var(--accent))",
					foreground: "rgb(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "rgb(var(--popover))",
					foreground: "rgb(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "rgb(var(--card))",
					foreground: "rgb(var(--card-foreground))",
				},
			},
			fontSize: {
				default: "1.6rem",
				big: "4rem",
				mid: "2.5rem",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out",
			},
		},
	},
	plugins: [animate],
} satisfies Config;
