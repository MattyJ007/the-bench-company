import React, { Component } from 'react'

export class ErrorBoundry extends Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch (error, info) {
    this.setState({ hasError: true, error, info })
  }

  // TODO : Complete this
  render () {
    const { hasError, error, info } = this.state
    if (hasError) {
      return (
        <div>
          <h1>Something has gone wrong</h1>
          <p>{JSON.stringify(error)}</p>
          <p>{JSON.stringify(info)}</p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundry
