// tailwind.config.js
export default {
    darkMode: 'class', // enables class-based dark mode
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
      extend: {
        colors: {
            yellow: {
              100: '#fef3c7',
              300: '#fcd34d',
              600: '#d97706',
              700: '#b45309',
            },
      },
    },
    plugins: [],
  }
}