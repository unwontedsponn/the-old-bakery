import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'banana-mania': '#ffe9af',
        'pastel-turquoise': '#9fccc3',
        'coral-blush': '#f7b5a4',
        'lavender-blue': '#c3baf9',
        'mint-cream': '#e8f8f5',
      },    
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Define your custom font
        merriweather: ['Merriweather', 'serif'], // Optionally add Merriweather too
      },      
    },
  },
  plugins: [],
};

export default config;