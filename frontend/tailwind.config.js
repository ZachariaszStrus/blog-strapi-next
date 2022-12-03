/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-dark": "#0d1117",
        "fg-default": "#fff",
        "fg-faded": "#9ca3af",
        primary: {
          50: "#feeaeb",
          100: "#fccacc",
          200: "#e8958f",
          300: "#db6d65",
          400: "#e14e3f",
          500: "#e33e21",
          600: "#d53421",
          700: "#c42a1c",
          800: "#b72315",
          900: "#a81807",
        },
        secondary: {
          50: "#e1f1f2",
          100: "#b5dedd",
          200: "#87c9c7",
          300: "#5bb4af",
          400: "#3fa39e",
          500: "#31938c",
          600: "#2d867f",
          700: "#29766e",
          800: "#26665f",
          900: "#204a43",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
