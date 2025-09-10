import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",

        "primary-accent": "var(--primary-accent)",
        "foreground-accent": "var(--foreground-accent)",
        "hero-background": "var(--hero-background)",
        "luxury-black": "var(--luxury-black)",
        "warm-gray": "var(--warm-gray)",
        
        // EIFEL brand colors
        "eifel-blue": "#2b6cb8",
        "eifel-navy": "#1e4a73",
        "eifel-gray": "#718096",
        "eifel-light": "#f7fafc",
      },
      fontFamily: {
        'prompt': ['Prompt', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
