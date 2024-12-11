import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {          
      fontFamily: {
        'buongiorno': ['Buongiorno Rastellino', 'cursive'], // Add your custom font
        'sans': ['Josefin Sans', 'sans-serif'], // Add Josefin Sans for body text
      },      
    },
  },
  plugins: [],
};

export default config;