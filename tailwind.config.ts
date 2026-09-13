import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm hospital white — the page base, not a stock cream
        paper: {
          DEFAULT: "#FBFAF6",
          soft: "#F5F3ED",
          card: "#FFFFFF",
        },
        // Soft sage / clinical green — primary brand color
        sage: {
          50: "#F1F5F1",
          100: "#E1EBE3",
          200: "#C3D7C8",
          300: "#9FBFA8",
          400: "#78A186",
          500: "#588268",
          600: "#456854",
          700: "#375345",
          800: "#2C4237",
          900: "#22352C",
        },
        // Muted clinical blue — secondary accent
        mist: {
          50: "#F0F4F7",
          100: "#DCE6EC",
          200: "#B9CCDA",
          300: "#93AEC2",
          400: "#7191A8",
          500: "#57768D",
          600: "#455E72",
          700: "#374B5B",
        },
        // Light peach — warmth accent, used sparingly
        peach: {
          50: "#FDF6F0",
          100: "#FAEBDE",
          200: "#F3D3B8",
          300: "#E9B78D",
          400: "#DE9C68",
        },
        // Ink — near-black replacement, warm charcoal-green
        ink: {
          DEFAULT: "#26302A",
          soft: "#4C574F",
          faint: "#7A8480",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        organic: "2rem 1.25rem 2rem 1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(38, 48, 42, 0.04), 0 8px 24px -8px rgba(38, 48, 42, 0.10)",
        lift: "0 4px 8px rgba(38, 48, 42, 0.06), 0 16px 32px -12px rgba(38, 48, 42, 0.16)",
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(3deg)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(-4deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "floatSlow 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
