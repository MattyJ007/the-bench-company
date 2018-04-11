import React from 'react'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import compose from 'recompose/compose'

const styles = theme => {
  return {
    root: {
      flexGrow: 1,
      margin: '0 auto'
    }
  }
}

const PageContainer = props => {
  const { classes, children } = props
  return (
    <div className={classes.root}>
      <Grid container >
        {children}
      </Grid>
    </div>
  )
}

export default compose(withStyles(styles))(PageContainer)
