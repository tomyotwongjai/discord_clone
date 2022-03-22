module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        headline: ['Roboto', 'sans-serif'],
      },
      colors: {
        discord_bg: '#404eed',
        discord_blue: '#295DE7',
        discord_blurple: '#7289da',
        discord_purple: '#5865f2',
        discord_green: '#3ba55c',
        discord_serverbg: '#36393f',
        discord_channelbg: '#2f3136',
        custom_gray: '#72767d',
      },
      height: {
        '83vh': '83vh',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
