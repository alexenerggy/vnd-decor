import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "var(--color-primary)",
          background: "var(--color-bg)",
          text: "var(--color-text)",
          soft: "var(--color-soft)",
          border: "var(--color-border)",
          muted: "var(--color-muted)"
        }
      },
      spacing: {
        section: "clamp(3.5rem, 7vw, 7rem)"
      },
      borderRadius: {
        lg: "0.9rem",
        xl: "1.35rem",
        "2xl": "1.85rem"
      },
      fontFamily: {
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"]
      },
      maxWidth: {
        content: "var(--container-content)",
        text: "var(--container-text)"
      },
      boxShadow: {
        card: "0 18px 50px -36px rgba(55, 38, 45, 0.42)"
      }
    }
  },
  plugins: []
};

export default config;
