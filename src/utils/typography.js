import Typography from 'typography'
//import gray from "gray-percentage"
//import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
//import verticalRhythm from 'compass-vertical-rhythm'
import altonTheme from 'typography-theme-alton'

// altonTheme.overrideThemeStyles = ({ rhythm }, options) => ({
altonTheme.overrideThemeStyles = () => ({
  a: {
    color: 'rgb(59, 115, 188)',
    transition: 'color .5s',
    textDecoration: 'underline',
  },
  'a:hover': {
    color: 'rgb(65, 105, 225)',
  },
  'a.darklink': {
    color: '#888888',
    textDecoration: 'none',
  },
  'a.darklink:hover, a.darklink:active, a.darklink.active': {
    color: '#c29948',
  },
  'article, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary': {
    display: 'flex',
    flexDirection: 'column'
  },

})

const typography = new Typography(altonTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
