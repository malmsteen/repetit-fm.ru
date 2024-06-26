import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
import Testimonials from './Sections/Testimonials.js'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// core components
import Header from 'components/Header/Header.js'
import Footer from 'components/Footer/Footer.js'
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Button from 'components/CustomButtons/Button.js'
import HeaderLinks from 'components/Header/HeaderLinks.js'
import Parallax from 'components/Parallax/Parallax.js'

import profile from 'assets/img/faces/001.webp'

import styles from 'assets/jss/material-kit-react/views/landingPage.js'

// Sections for this page
import ProductSection from './Sections/ProductSection.js'
import TeamSection from './Sections/TeamSection.js'
import WorkSection from './Sections/WorkSection.js'
import FeaturesSection from './Sections/FeaturesSection.js'
// import SectionCarousel from './Sections/SectionCarousel.js'
// import { Link } from 'react-router-dom'
// import SectionCarousel from 'views/Components/Sections/SectionCarousel.js'

const dashboardRoutes = []

const useStyles = makeStyles(styles)
const callbuttonStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  }
})

function Hook () {
  const classes = callbuttonStyles()
  return (
    <Button className={classes.root} href='#form' size='small'>
      записаться
    </Button>
  )
}

export default function LandingPage (props) {
  const classes = useStyles()
  const { ...rest } = props

  return (
    <div>
      <Header
        color='transparent'
        routes={dashboardRoutes}
        brand='Repetit-FM'
        rightLinks={<HeaderLinks selectedItem='Home' />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white'
        }}
        {...rest}
      />
      <Parallax
        filter
        // image={require('assets/img/Plam_inCoral_green1_reduced.jpg')}
        style={{ backgroundColor: 'green' }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Готовимся к ЕГЭ и олимпиадам</h1>
              <h4>
                Приветствую вас на своем сайте. Я частный репетитор по
                математике и физике, выпускник мехмата МГУ, много лет помогаю
                готовиться к экзаменам. Здесь вы можете записаться ко мне на
                занятия, а также найти полезные материалы для подготовки - все
                они бесплатны и доступны без регистрации.
                {/* Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression. */}
              </h4>
              <br />
              {/* <Button color="success" size="lg" href="#form">
                записаться
              </Button> */}
              <Hook />
              <Button type='button' href='/profile-page' size='small'>
                Подробнее
              </Button>
              {/* <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button> */}
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div>
                <img
                  alt='фото репетитора'
                  src={profile}
                  className={classes.mainPhoto}
                />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {/* <ThemeNesting /> */}
          <ProductSection />
          <FeaturesSection />
          {/* <TeamSection /> */}
          {/* <Testimonials /> */}
          {/* <SectionCarousel /> */}
          <WorkSection />
        </div>
      </div>

      <Footer />
      {/* </ThemeProvider> */}
    </div>
  )
}
