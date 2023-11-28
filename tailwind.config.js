module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#FF6B6B', // Primary color
        secondary: '#67EACA', // Secondary color
        accent: '#FFCC5B', // Accent color
        background: '#F9F7F3', // Background color
        text: '#333333', // Text color
        black: '#000000', // Black color
      },
    },
  },
  darkMode: "class", // Enable dark mode based on the 'dark' class

  plugins: [
    require('@tailwindcss/forms'),
  ],
};
