/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        "default-app": "638px",
        "modal-app": "546px",
        "box-76": "76px",
      },
      height: {
        "box-76": "76px",
      },
      colors: {
        "soft-gray": "#F3F3F3",
        "soft-gray-opacity": "rgba(243, 243, 243, 0.89)",
        "sub-soft-gray": "rgba(218, 220, 224, 0.30)",
        "mid-gray": "rgba(147, 155, 159, 0.30)",
        "sub-mid-gray": "#D3D6DA",
        "hard-gray": "#939B9F",
        "hard-yellow": "#CEB02C",
        "hard-green": "#66A060",
        "soft-black": "#202537",
        "low-gray": "#56575E",
        "dark-app-transparent": "rgba(38, 43, 60, 0.89)",
        "dark-app": "#262B3C",
        "hard-blue": "#2c3141",
        "mid-blue": "#565f7e",
        "gray-icons": "#818181",
      },
      borderRadius: {
        soft: "5px",
        hard: "15px",
      },
      fontSize: {
        big: [
          "40px",
          {
            lineHeight: "normal",
            letterSpacing: "3px",
            fontWeight: "600",
          },
        ],
        "sub-big": [
          "35px",
          {
            lineHeight: "normal",
            fontWeight: "800",
          },
        ],
        little: [
          "18px",
          {
            lineHeight: "normal",
            fontWeight: "600",
          },
        ],
        "little-light": [
          "19px",
          {
            lineHeight: "normal",
            fontWeight: "400",
          },
        ],
        "little-bold": [
          "19px",
          {
            lineHeight: "normal",
            fontWeight: "800",
          },
        ],
        "mid-bold": [
          "28px",
          {
            lineHeight: "normal",
            fontWeight: "800",
          },
        ],
      },
      minWidth: {
        "key-board": "45px",
      },
      minHeight: {
        "1/2": "50%",
        "key-board": "51px",
      },
      maxHeight: {
        95: "95vh",
      },
    },
  },
  plugins: [],
};
