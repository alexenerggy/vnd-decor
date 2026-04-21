import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "var(--color-primary)",
          accent: "var(--color-accent)",
          background: "var(--color-bg)",
          bgDark: "var(--color-bg-dark)",
          soft: "var(--color-soft)",
          text: "var(--color-text)",
          muted: "var(--color-muted)",
          border: "var(--color-border)"
        }
      },
      spacing: {
        section: "clamp(5rem, 12vw, 10rem)"
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
        pill: "999px"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Manrope", "system-ui", "sans-serif"]
      },
      maxWidth: {
        content: "var(--container-content)",
        text: "var(--container-text)"
      },
      boxShadow: {
        soft: "0 8px 24px rgba(61, 26, 46, 0.08)",
        card: "0 12px 32px rgba(61, 26, 46, 0.10)",
        "card-hover": "0 18px 40px rgba(61, 26, 46, 0.14)"
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-in-up": "fade-in-up 600ms cubic-bezier(0.16, 1, 0.3, 1) both"
      }
    }
  },
  plugins: []
};

export default config;
