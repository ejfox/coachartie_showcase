/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
        fraunces: ['Fraunces', 'serif']
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            lineHeight: '2.1',
            fontSize: '1.125rem',
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
              lineHeight: '2.1',
              letterSpacing: '0.01em'
            },
            li: {
              marginTop: '0.75em',
              marginBottom: '0.75em',
              lineHeight: '2'
            },
            h1: {
              lineHeight: '1.1',
              marginBottom: '1em'
            },
            h2: {
              lineHeight: '1.2',
              marginBottom: '0.75em',
              marginTop: '2em'
            },
            h3: {
              lineHeight: '1.3',
              marginBottom: '0.75em',
              marginTop: '1.5em'
            },
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            code: {
              fontFamily: '"IBM Plex Mono", monospace',
              fontWeight: '500'
            }
          }
        },
        lg: {
          css: {
            lineHeight: '2.1',
            p: {
              marginTop: '1.75em',
              marginBottom: '1.75em'
            }
          }
        },
        xl: {
          css: {
            lineHeight: '2',
            p: {
              marginTop: '1.75em',
              marginBottom: '1.75em'
            }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
