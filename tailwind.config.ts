// tailwind.config.js
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'marina-blue': '#27419C', // Custom blue color
        'alice-blue': '#E5E9F2', // Custom light blue color
        crimson: '#D92332',
        mutedPink: '#8C4653',
        lightGray: '#D9D9D9',
        offWhite: '#F2F2F2',
        darkGray: '#0D0D0D',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
