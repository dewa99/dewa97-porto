/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.js",
    {
      relative: true,
      transform: (content) => content.replace(/taos:/g, ''),
      files: ['./src/*.{html,js}'],
    }
  ],
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors : {
      'coffee-pink' : '#D74B76',
      'coffee-dark' : '#FB6D48',
      'coffee-light' : '#FFAF45',
      'coffee-purple' : '#673F69'
    },
    extend: {
      fontFamily : {
        custom : ['Roboto']
      },

    },

  },
  plugins: [
    require('flowbite/plugin'),
    require('taos/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
}

