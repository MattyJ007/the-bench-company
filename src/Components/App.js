import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './HomeTab'

const theme = createMuiTheme()

export class App extends Component {
  render() {
		return (
			<MuiThemeProvider theme={ theme }>
				<Router>
					<div>
						<Route exact path='/' component={ Home } />
					</div>
				</Router>
			</MuiThemeProvider>
		)
	}
}

export default App