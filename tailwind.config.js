/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#030C07",        // Deep Obsidian Green Black (ThriveWeb3 aesthetic)
          card: "#081610",      // Dark Emerald Card Background
          border: "#0F2A1D",    // Deep Emerald Border
          hover: "#123624"
        },
        brand: {
          emerald: "#10B981",
          cyan: "#06B6D4",
          teal: "#14B8A6",
          greenGlow: "rgba(16, 185, 129, 0.35)",
          cyanGlow: "rgba(6, 182, 212, 0.35)",
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-emerald': '0 0 35px -5px rgba(16, 185, 129, 0.4)',
        'glow-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.4)',
        'glow-lg': '0 0 60px -10px rgba(16, 185, 129, 0.5)',
      },
      backgroundImage: {
        'emerald-gradient': 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(16, 185, 129, 0.22), transparent 70%)',
        'grid-pattern': 'linear-gradient(rgba(16, 185, 129, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.04) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
