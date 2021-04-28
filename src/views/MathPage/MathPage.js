import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/mathPage.js";

// Sections for this page
import MathSection from "./Sections/MathSection.js";

const useStyles = makeStyles(styles);

export default function MathPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        color="transparent"
        brand="Repetit-FM"
        rightLinks={<HeaderLinks selectedItem="Materials" />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        small
        image={require("assets/img/Plam_inCoral_red1_reduced.jpg")}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <h1 className={classNames(classes.title)}>Математика</h1>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <MathSection />
          {/* <div className={classes.description}>
              <p>Я репетитор по математике и физике.</p>
            </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}
