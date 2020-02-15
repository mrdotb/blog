import Typography from 'typography'
//import gray from "gray-percentage"
//import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
//import verticalRhythm from 'compass-vertical-rhythm'
import altonTheme from 'typography-theme-alton'

// altonTheme.overrideThemeStyles = ({ rhythm }, options) => ({
altonTheme.overrideThemeStyles = () => ({
  a: {
    color: 'rgb(64, 120, 192)',
    transition: 'color .5s',
  },
  'a.darklink': {
    color: '#888888'
  },
  'a.darklink:hover, a.darklink:active, a.darklink.active': {
    color: '#c29948',
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
