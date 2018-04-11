import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import ButtonBase from 'material-ui/ButtonBase'
import { NavLink } from 'react-router-dom'
import Typography from 'material-ui/Typography'
import { routes } from '../routes'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 50,
    width: '100%'
  },
  navButton: {
    position: 'relative',
    height: 100,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100
    },
    '&:hover': {
      zIndex: 1
    },
    '&:hover $imageMarked': {
      opacity: 0
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor'
    }
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.4,
    transition: theme.transitions.create('opacity')
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  },
  selected: {
    background: `${theme.palette.primary.dark} !important`
  },
  navStyle: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '20%',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    justifyContent: 'center'
  }
})

function ButtonBases (props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      {Object.keys(routes).map(navigationOption => (
        <NavLink
          key={navigationOption}
          to={routes[navigationOption].path}
          activeClassName={classes.selected}
          className={classes.navStyle}
          exact={routes[navigationOption].exact}>
          <ButtonBase
            focusRipple
            key={navigationOption}
            className={classes.navButton}
            activeClassName={classes.selected}
          >
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component='span'
                variant='subheading'
                color='inherit'
                className={classes.imageTitle}
              >
                {navigationOption}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        </NavLink>
      ))}
    </div>
  )
}

ButtonBases.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ButtonBases)
