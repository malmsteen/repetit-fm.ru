import React, { useState, useContext, createContext } from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import {
  makeStyles,
  createTheme,
  ThemeProvider
} from '@material-ui/core/styles'
import { orange, green, blue, cyan, red, grey } from '@material-ui/core/colors'

// core components
import Header from 'components/Header/Header.js'
import Footer from 'components/Footer/Footer.js'
import GridContainer from 'components/Grid/GridContainer.js'
import HeaderLinks from 'components/Header/HeaderLinks.js'
import Parallax from 'components/Parallax/Parallax.js'
import Paginations from 'components/Pagination/Pagination.js'
import MyPagination from 'components/Pagination/MyPagination.js'
import Button from 'components/CustomButtons/Button.js'
import { TextField, Box } from '@material-ui/core'

// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
// import { Document, Page } from 'react-pdf';

import styles from 'assets/jss/material-kit-react/views/mathPage.js'

// Sections for this page
import MathSection from './Sections/MathSection.js'
import planeGeometry from './Sections/problem16.js'
import inequality from './Sections/problem15.js'
import parameter from './Sections/problem18.js'
import stereometry from './Sections/problem14.js'
import equation from './Sections/problem13.js'
import economy from './Sections/problem17.js'
import numberTheory from './Sections/problem19.js'
import DVI from './Sections/DVI.js'
import hse from './Sections/hse.js'
// import filter from './Sections/filter.js'
const useStyles = makeStyles(styles)

// const sty = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4'
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1
//   }
// });

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '300',
    height: '1.5em'
  },
  palette: {
    secondary: {
      main: grey[400]
    }
  }
})

const planeG = planeGeometry
export const myContext = createContext(false)
// planeGeometry = null
export default function MathPage (props) {
  const classes = useStyles()
  const { ...rest } = props
  const [searchValue, setSearchValue] = useState('')
  const [isSearch, setIsSearch] = useState(false)

  const [filteredProblemList, setFilteredProblemList] = useState([])
  const handleSearch = e => {
    e.preventDefault()
    if (searchValue !== '') {
      setIsSearch(true)
    }
    const problems = [
      ...stereometry,
      ...planeGeometry,
      ...inequality,
      ...economy,
      ...numberTheory,
      ...parameter,
      ...DVI,
      ...hse
    ]
    const searchFilter = problem =>
      problem.text[0].toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    if (searchValue.length > 1)
      setFilteredProblemList(problems.filter(searchFilter))
  }

  return (
    <div>
      <myContext.Provider value={[isSearch, setIsSearch]}>
        <Header
          color='transparent'
          brand='Repetit-FM'
          rightLinks={<HeaderLinks selectedItem='Materials' />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />
        <Parallax
          small
          // image={require('assets/img/Plam_inCoral_red1_reduced.jpg')}
          style={{ backgroundColor: '#f53b57' }}
        >
          <div className={classes.container}>
            <GridContainer justify='center'>
              <Button
                className={classes.button}
                style={{ textTransform: 'none' }}
                // href='/math-page'
                color='transparent'
                //target="_blank"
                onClick={() => setIsSearch(false)}
              >
                <h1 className={classNames(classes.title)}>Математика</h1>
              </Button>
            </GridContainer>
            <ThemeProvider theme={theme}>
              <form
                className={classes.searchContainer}
                noValidate
                autoComplete='off'
                onSubmit={handleSearch}
              >
                <TextField
                  margin='none'
                  color='secondary'
                  className={classes.searchField}
                  id='standard-search'
                  label='Поиск'
                  type='search'
                  variant='outlined'
                  onChange={e => setSearchValue(e.target.value)}
                />
                {handleSearch}
              </form>
            </ThemeProvider>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <MathSection
              // search={isSearch}
              filteredProblemList={filteredProblemList}
            />
          </div>
        </div>
        <Footer />
      </myContext.Provider>
    </div>
  )
}
