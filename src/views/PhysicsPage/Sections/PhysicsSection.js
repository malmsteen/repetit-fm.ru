import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/physicsPageSections/physicsSectionStyle.js";

const useStyles = makeStyles(styles);

export default function PhysicsSection() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer className={classes.container} justify="center">
        <h4>Здесь пока ничего нет, потихоньку будет наполняться</h4>
      </GridContainer>
    </div>
  );
}
