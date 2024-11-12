module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        "xl-title": ["36px", { lineHeight: "normal" }],
        "sm-body": ["16px", { lineHeight: "1.5" }],
        "tab-text": ["14px", { lineHeight: "normal" }],
      },
      colors: {
        primaryText: "#3e4056",
        secondaryText: "#3e3f58",
        customOrange: "#FF974F",
        customPink: "#E32C75",
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1)",
        customDrop: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      opacity: {
        60: "0.6",
      },
      fontWeight: {
        semibold: "600",
      },
    },
  },
  plugins: [],
};
