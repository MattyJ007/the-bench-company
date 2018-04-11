import { createMuiTheme } from 'material-ui/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#607D8B',
      main: '#455A64',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#0097A7',
      dark: '#00838F',
      contrastText: '#ED3A84'
    },
    type: 'light'
  }
})
