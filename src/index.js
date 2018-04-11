import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider } from 'material-ui/styles'
import { theme } from './theme'

const Main = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>
)

ReactDOM.render(<Main />, document.getElementById('root'))
registerServiceWorker()
