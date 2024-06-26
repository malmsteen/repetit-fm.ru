import { container, title } from 'assets/jss/material-kit-react.js'

const mathPageStyle = {
  container: {
    ...container,
    zIndex: '12',
    color: '#FFF'
    // width: "auto",
  },
  main: {
    background: '#FDF6E3',
    position: 'relative',
    zIndex: '3'
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    paddingTop: '16px',
    paddingBottom: '16px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    '@media (max-width: 768px)': {
      margin: '-60px 13px 0px'
    }
  },
  title: {
    ...title,
    color: '#FFF',
    display: 'inline-block',
    position: 'relative',
    margin: '0 auto',
    minHeight: '32px',
    textDecoration: 'none'
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchField: {
    background: 'rgba(0,0,0,0.2)',
    borderRadius: '5px',
    marginTop: '30px',
    width: '40%',
    '@media (max-width: 768px)': {
      width: '80%'
    }
  },
  button: {
    '@media (max-width: 768px)': {
      padding: '5px 5px'
    }
  }
}

export default mathPageStyle
