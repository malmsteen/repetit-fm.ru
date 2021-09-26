import zIndex from '@material-ui/core/styles/zIndex'
import { title } from 'assets/jss/material-kit-react.js'

const featuresStyle = {
  section: {
    padding: '70px 0',
    textAlign: 'center'
  },
  aboutStudy: {
    ...title,
    // color: '#657b83',
    marginTop: '0px',
    display: 'block'
    // fontSize: '14px'
  },
  title: {
    ...title,
    marginBottom: '1rem',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none'
  },

  description: {
    color: '#657b83',
    overflow: 'hidden',
    marginTop: '0px',
    fontSize: '14px'
  },
  featuresVideo: {
    position: 'absolute',
    // margin: '0 10%',
    padding: '0 5%',
    // width: '100%',
    left: '0%',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: '10'
  },
  videoBG: {
    background: '#faba5a',
    marginTop: '15%',
    borderRadius: '50%',
    width: '100%',
    height: 'auto',
    aspectRatio: '1/1',
    // position: 'absolute',
    zIndex: '0',
    '@media (max-width: 943px)': {
      margin: 'auto'
    }
  },
  centerVideo: {
    alignItems: 'center',
    width: '100%',
    '@media (max-width: 943px)': {
      width: '60%',
      order: -1
    },
    '@media (max-width: 768px)': {
      width: '90%',
      order: -1
    }
  }
}

export default featuresStyle
