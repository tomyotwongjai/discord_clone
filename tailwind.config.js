module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        login_image: 'url("./assets/hero_img_3.svg")',
      },
      boxShadow: {
        custom_shadow: '0px 2px 10px 0 rgb(0,0,0 / 20%)',
      },
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
