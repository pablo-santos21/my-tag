import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
      fontFamily: {
        //   bodyFont: ['Poppins', 'sans-serif'],
        //   titleFont: ['Montserrat', 'sans-serif'],
      },
      colors: {
        bodyColorDark: '#212428',
        mainColor: '#2B575C',
        infosColor: '#E3DFB3',
        btnColor: '#2B575C',
      },
      boxShadow: {
        shadowOne: '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',
      },
      backgroundColor: {
        mainColor: '#2B575C',
      },
    },
  },
  plugins: [],
} satisfies Config;
