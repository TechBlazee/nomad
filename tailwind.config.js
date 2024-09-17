/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: false,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mintGreen: "#00DBDB",
        Yellow: "#F6BD60",
        LilacWhite: "#EAE8FF",
        Black: "#001313",
        deepGreen: "#334242",
        White: "#FAFAFA",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // other plugins...
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          /* For Firefox */
          "scrollbar-width": "none",
          /* For Chrome, Safari, and Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};
