/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
      },
      spacing: {
        // 128: "32rem", // Add a new custom spacing value (128)
        // 144: "36rem", // Add another larger value (144)
        // 112: "28rem",
        // 116: "29rem", // Slightly more than 28rem
        // 120: "30rem",
        // '110': '27.5rem',
        // '107': '26.75rem', // Slightly less than 27rem
        // '108': '27rem',    // Exactly 27rem
        // '109': '27.25rem',
          '106': '26.5rem'
      },
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
        BackColor: "#EBF1FF",
        arrcolor: "#FFFFFF",
        mainpagetextcolor: "#2F5EFF",
        graycolor : "##7F93A7"
        
      },
    },
  },
  plugins: [],
};
