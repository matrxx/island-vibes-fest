import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        ocean: {
          deep: "hsl(var(--ocean-deep))",
          light: "hsl(var(--ocean-light))",
        },
        coral: {
          DEFAULT: "hsl(var(--coral))",
          light: "hsl(var(--coral-light))",
        },
        gold: "hsl(var(--gold))",
        sand: "hsl(var(--sand))",
        forest: "hsl(var(--forest))",
        neon: {
          cyan: "hsl(var(--neon-cyan))",
          magenta: "hsl(var(--neon-magenta))",
        },
      },
      backgroundImage: {
        'gradient-premium': 'var(--gradient-premium)',
        'gradient-sunset': 'var(--gradient-sunset)',
        'gradient-ocean': 'var(--gradient-ocean)',
        'gradient-overlay': 'var(--gradient-overlay)',
        'gradient-dark': 'var(--gradient-dark)',
        'gradient-animated': 'var(--gradient-animated)',
      },
      boxShadow: {
        'premium': 'var(--shadow-premium)',
        'soft': 'var(--shadow-soft)',
        'glow': 'var(--shadow-glow)',
        'neon': 'var(--shadow-neon)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-slow": {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "slide-left": {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-right": {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "parallax": {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-20px)" },
        },
        "morph": {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(180 100% 50% / 0.4), 0 0 40px hsl(320 100% 60% / 0.2)" },
          "50%": { boxShadow: "0 0 40px hsl(180 100% 50% / 0.6), 0 0 80px hsl(320 100% 60% / 0.4)" },
        },
        "text-shimmer": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        "bounce-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "rotate-3d": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "fade-in-slow": "fade-in-slow 1.2s ease-out forwards",
        "scale-in": "scale-in 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "slide-left": "slide-left 0.8s ease-out forwards",
        "slide-right": "slide-right 0.8s ease-out forwards",
        "morph": "morph 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "text-shimmer": "text-shimmer 3s linear infinite",
        "bounce-in": "bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
        "rotate-3d": "rotate-3d 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
