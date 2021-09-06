module.exports = {
  purge: ["./src/pages/**/*.js", "./src/components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightBlue: "#F6F8FB",
        normalBlue: "#6C63FB",
        lightGray: "#3F3D56",
        brightYellow: "#25AD78",
        lightWhite: "#E6E8C9",
      },
       height: {
       cl: '37.8rem',
      },
      fontFamily: {
        plex: "'IBM Plex Sans', monospace",
      },
      lineHeight: {
        "extra-loose": "4rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
