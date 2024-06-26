import { FormatAlignJustifyOutlined } from '@material-ui/icons'
import { title, container } from 'assets/jss/material-kit-react.js'

const testimonialsStyle = {
  section: {
    padding: '70px 0',
    textAlign: 'center'
  },
  container,
  marginAuto: {
    marginLeft: 'auto !important',
    marginRight: 'auto !important'
  },
  title: {
    ...title,
    marginBottom: '1rem',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none'
  },
  testimonial: {
    padding: '0 15%',
    top: '50%'
  },
  description: {
    color: '#657B83',
    minHeight: '20px',
    textAlign: 'center'
    // padding: '0 100px'
  },
  name: {
    textAlign: 'right',
    color: '#657B83',
    // paddingBottom: '3rem',
    paddingRight: '2rem',
    fontStyle: 'italic'
  }
}

export default testimonialsStyle
