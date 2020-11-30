module.exports = {
  purge: [
    "./themes/cv-theme/layouts/**/*.html",
    "./data/*.yml",
    "./layouts/**/*.html",
  ],
  theme: {
    extend: {
      borderWidth: {
        6: "6px",
      },
      maxWidth: {
        ch85: "85ch",
      },
      screens: {
        print: { raw: "print" },
      },
    },
    fontFamily: {
      sans: ["Inter var", "Inter"],
    },
  },
  variants: {},
  plugins: [],
};
