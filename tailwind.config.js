module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    
    extend: {
      minWidth: {
        64: '16rem',
        68: '17rem',
      },
      maxWidth: {
        68: '16rem',
      }
    },
  },
  plugins: [],
};
