import compose from 'recompose/compose'
import { withStyles } from 'material-ui/styles'
import withWidth from 'material-ui/utils/withWidth'
import React, { Component } from 'react'
import Menu from './Menu'

const styles = theme => {
  return {
    content: {
      flex: 1
    },
    nav: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80px',
      backgroundColor: 'hsl(0, 0%, 15%)'
    }
  }
}

export class Layout extends Component {
  render () {
    const {children, classes} = this.props
    return (
      <div className={classes.content}>
        <Menu />
        {children}
      </div>
    )
  }
}

export default compose(
  withStyles(styles),
  withWidth({ resizeInterval: 16 })
)(Layout)
