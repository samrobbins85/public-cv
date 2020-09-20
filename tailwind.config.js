module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "./themes/cv-theme/layouts/**/*.html",
    "./data/*.yml",
    "./layouts/**/*.html",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter var", "Inter"],
    },
  },
  variants: {},
  plugins: [],
};
