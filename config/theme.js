const colors = {
  white: {
    base: '#fff',
    light: '#f0f0f0',
    blueish: '#d6e1ff',
    blue: '#a8b8e1',
  },
  black: {
    base: '#333438',
    light: '#4b4e57',
    lighter: '#696d77',
    blue: '#2e3246',
  },
  primary: {
    base: '#3498db',
    light: '#5abdff',
    lightest: '#7cc9ff',
    dark: '#4768b4',
    darker: '#45458d',
  },
  secondary: {
    base: '#db8834',
    light: '#ffaf60',
    dark: '#d17c26',
  },
  background: {
    light: '#46507a',
    dark: '#262c41',
  },
  brands: {
    github: '#24292E',
    instagram: {
      yellow: '#f7eb4c',
      pink: '#ee2a7b',
      blue: '#4c6aff',
    },
    behance: '#191919',
    youtube: '#ff0000',
  },
}

const shadow =  {
  card: ''
}

const button = {
  default: {

  },
  primary: {

  },
  secondary: {

  }
}

const transitions = {
  easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  duration: '0.4s',
}

const theme = {
  colors,
  shadow,
  button,
  transitions,
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px'
  },
  fontFamily: {
    body: `${'lol'}'lol'`,
    heading: `${'lol'}'lol'`
  },
  layout: {

  },
  borderRadius: {

  },
}

export default theme
