import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import { orange, green, blue, cyan, red } from "@material-ui/core/colors";

import { sizing } from "@material-ui/system";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/001.webp";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);
const callbuttonStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
});

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: cyan[700],
    },
  },
});

function Hook() {
  const classes = callbuttonStyles();
  return (
    <Button className={classes.root} href="#form" size="lg">
      записаться
    </Button>
  );
}

const outerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: orange[500],
    },
  },
});

const innerTheme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[700],
    },
    secondary: {
      main: red[700],
    },
  },
});

function ThemeNesting() {
  return (
    <div>
      <Checkbox defaultChecked />
      <Checkbox defaultChecked />
    </div>
  );
}

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <ThemeProvider theme={innerTheme}>
        {/* <header>
        <AppBar>
          <Toolbar>
            <IconButton>
              <MenuIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </header> */}
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Repetit-FM"
          rightLinks={<HeaderLinks selectedItem="Home" />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        <Parallax
          filter
          image={require("assets/img/Plam_inCoral_green1_reduced.jpg")}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Готовимся к ЕГЭ и олимпиадам</h1>
                <h4>
                  Приветствую вас на своем сайте. Я частный репетитор по
                  математике и физике. Здесь вы можете найти полезные материалы
                  для подготовки, а также записаться ко мне на занятия
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
                  <img alt="..." src={profile} className={classes.mainPhoto} />
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            {/* <ThemeNesting /> */}
            <ProductSection />
            {/* <TeamSection /> */}
            <WorkSection />
          </div>
        </div>

        <Footer />
      </ThemeProvider>
    </div>
  );
}
