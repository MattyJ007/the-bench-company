import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { MuiThemeProvider } from 'material-ui/styles'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { theme } from './theme'
import history from './history'

const Main = () => (
  <Router history={history}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Router>
)

ReactDOM.render(<Main />, document.getElementById('root'))
registerServiceWorker()
