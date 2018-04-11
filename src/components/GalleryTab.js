buttonBox: {
    position: 'relative',
    display: 'flex',
    justify-content: 'center',
    align-items: 'center',
    border: '2px solid hsl(0, 0%, 15%)',
    color: '#fff',
    font-family: 'Arial',
    font-weight: '600',
    height: '40px',
    width: '150px',
    margin: '0 10px',
    opacity: '0.5',
    transition: '200ms linear'
  },

  textUnderline: {
    position: 'absolute',
    width: '20px',
    height: '3px',
    backgroundColor: '#fff',
    top: '40px',
    left: 'calc(50% - 10px)'
  },

  'buttonBox.active' : {
    opacity: 1
  },

  'buttonBox:hover': {
    border: '3px solid #fff',
    cursor: 'pointer'
  },

  'button-box:hover span': {
    display: 'none'
  },

  button-box:active: {
    borderColor: '#607d8b'
  }