/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'primary-blue': 'var(--primary-blue)',
        'primary-white': 'var(--primary-white)',
        'accent-aqua': 'var(--accent-aqua)',
        'accent-coral': 'var(--accent-coral)',
        'accent-green': 'var(--accent-green)',
        'charcoal': 'var(--text-charcoal)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}





