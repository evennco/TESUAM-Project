import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
      animation: {
        fade: 'fade 5s ease-in-out infinite',
        infinite_scroll: 'infinite_scroll 10s linear infinite',
      },
      keyframes: {
        infinite_scroll: {
          '100%': { transform: 'translateX(-10%)' },
        },
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      colors: {
        foundationcoloryellow2: '#FAB15B',
        foundationcoloryellow1: '#D39346',
        foundationcolorred1: '#811B10',
        foundationcolorred2: '#561B0F',
        foundationcolorwhite: '#F8EFE3',
        foundationcolorblack: '#040404',
      },
    },
  },
  plugins: [],
} satisfies Config;
