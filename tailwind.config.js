/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        "basic-white": "#fff",
        lightseagreen: "#00ad98",
        dimgray: {
          "100": "#717171",
          "200": "#555",
        },
        darkslategray: "#333",
        "blue-primary": "#298ef6",
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0.05)",
        },
        gray: "rgba(255, 255, 255, 0.02)",
        tomato: "#ff3939",
      },
      spacing: {},
      fontFamily: {
        rubik: "Rubik",
        roboto: "Roboto",
        poppins: "Poppins",
        inherit: "inherit",
      },
      borderRadius: {
        "3xs": "10px",
        sm: "14px",
        "8xs": "5px",
        "6xs": "7px",
        "10xl": "29px",
      },
    },
    fontSize: {
      base: "16px",
      "13xl": "32px",
      "5xl": "24px",
      xl: "20px",
      xs: "12px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
