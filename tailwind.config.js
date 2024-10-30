export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(255, 255, 255, 0.1)",
        primaryBorder: "rgba(255, 255, 255, 0.5)",
        primaryBg: "rgba(255, 255, 255, 0.15)",
        gradientStart: "#4caf50",
        gradientMiddle: "#cddc39",
        gradientEnd: "#388e3c",
      },
      boxShadow: {
        custom: "0 8px 32px rgba(0, 0, 0, 0.5)",
      },
      spacing: {
        padding: "1rem", // for smaller padding on mobile
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: "375px", // small screen breakpoint for mobile
      },
    },
  },
  plugins: [],
};
