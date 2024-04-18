import type { Config } from "tailwindcss";

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        '2xl': {'min': '1280px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
      keyframes: {
        slideDown : {
          '0%' : { transform: 'translateY(-100%)', opacity: '0' },
          '100%' : { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        }
      },
      animation: {
        slideDown : 'slideDown 1s ease-in-out',
        fadeIn: 'fadeIn 1s ease-in-out',
        slideIn: 'slideIn 0.8s linear',
      },
      gridTemplateColumns: {
        'auto-fit-300': 'repeat(auto-fit, minmax(300px, 1fr))',
        'auto-fit-650': 'repeat(auto-fit, minmax(650px, 1fr))',
        'auto-fit-150': 'repeat(auto-fit, minmax(150px, 1fr))',
      },
    },
  },
  plugins: [],
};
export default config;
