import Typography from 'typography'
import theme from './theme'
//import verticalRhythm from 'compass-vertical-rhythm'

const defaultFonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol'
]

const typography = new Typography({
  title: 'mrdotb',
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  blockMarginBottom: 0.8,
  headerFontFamily: [
    'Domine',
    ...defaultFonts,
  ],
  bodyFontFamily: [
    'Open Sans',
    ...defaultFonts,
  ],
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    'h1,h2,h3,h4,h5,h6': {
      lineHeight: 1.1,
    },
    a: {
      color: 'rgb(59, 115, 188)',
      transition: 'color .5s',
      textDecoration: 'underline',
    },
    'a:hover': {
      color: 'rgb(65, 105, 225)',
    },
    blockquote: {
      ...scale(1 / 5),
      //color: gray(41),
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      marginLeft: 0,
      //borderLeft: `${rhythm(3 / 16)} solid ${gray(10)}`,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    [`@media only screen and (max-width:${theme.breakpoints.s})`]: {
      html: {
        fontSize: `${(16 / 16) * 100}%`,
      },
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16),
      },
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
