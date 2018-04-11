import compose from 'recompose/compose'
import { withStyles } from 'material-ui/styles'
import withWidth from 'material-ui/utils/withWidth'
import React, { Component } from 'react'
import Menu from './Menu'

const styles = theme => {
  return {
    '@global body': {
      padding: 0,
      margin: 0,
      fontFamily: theme.typography.body1.fontFamily
    },
    content: {
      flex: 1,
      marginTop: theme.spacing.unit * 7,
      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing.unit * 8
      },
      [theme.breakpoints.up('md')]: {
        marginTop: 0,
        marginLeft: theme.spacing.unit * 32
      }
    }
  }
}

export class Layout extends Component {
  render () {
    const {children, classes} = this.props
    return (
      <div>
        <Menu />
        <div className={classes.content}>
          {children}
        </div>
      </div>
    )
  }
}

export default compose(
  withStyles(styles),
  withWidth({ resizeInterval: 16 })
)(Layout)
