module.exports = {
  content: [
    './index.html',
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5', // Roxo-vibrante Hivox
        background: '#f9fafb',
        texto: '#111827',
      },
      fontFamily: {
        sans: ['Roboto', 'Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
