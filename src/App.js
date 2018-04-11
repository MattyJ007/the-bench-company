import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './components/Layout'
import PageNotFound from './components/PageNotFound'
import { routes } from './routes'
import AppRoute from './components/AppRoute'
import { ErrorBoundry } from './components/ErrorBoundry'

export class App extends Component {
  render () {
    return (
      <Layout>
        <ErrorBoundry>
          <Switch>
            {Object.keys(routes).map(k => (
              <AppRoute key={k} component={routes[k].component} {...routes[k]} />
            ))}
            <Route key='notfound' component={PageNotFound} />
          </Switch>
        </ErrorBoundry>
      </Layout>
    )
  }
}

export default App
