import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        gruvbox: {
          dark0: '#282828',
          dark1: '#3c3836',
          dark2: '#504945',
          dark3: '#665c54',
          dark4: '#7c6f64',
          light0: '#fbf1c7',
          light1: '#ebdbb2',
          light2: '#d5c4a1',
          light3: '#bdae93',
          light4: '#a89984',
          red: '#cc241d',
          green: '#98971a',
          yellow: '#d79921',
          blue: '#458588',
          purple: '#b16286',
          aqua: '#689d6a',
          gray: '#a89984',
          orange: '#d65d0e'
        }
      }
    }
  },
  plugins: []
}
export default config
