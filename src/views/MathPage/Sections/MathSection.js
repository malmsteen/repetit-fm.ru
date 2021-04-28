import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Divider from "@material-ui/core/Divider";

// @material-ui/icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { ReactComponent as expertIcon } from "../../../einstein.svg";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import FileList from "components/FileList/FileList.js";

// import fileList from "fileList.js"

import styles from "assets/jss/material-kit-react/views/mathPageSections/mathSectionStyle.js";

const useStyles = makeStyles(styles);
const accordStyles = makeStyles({
  root: {
    boxShadow: "none",
    backgroundColor: "#fdf6e3",
    paddingBottom: "0px",
  },
});

export default function MathSection() {
  const accordSty = accordStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Accordion defaultExpanded className={accordSty.root}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Раз
            </AccordionSummary>
            <AccordionDetails>
              <FileList />
            </AccordionDetails>
          </Accordion>
          {/* <Divider /> */}
          {/* <Accordion className={accordSty.root}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Два
            </AccordionSummary>
            <AccordionDetails>
              <ul className={classes.uList}>
                {list.map((item) => (
                  <li>{item}</li>
                ))}                
                <li>$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$</li>
              </ul>
            </AccordionDetails>
          </Accordion> */}
        </GridItem>
        {/* <GridItem xs={12} sm={12} md={4}>
          <ul className={classes.uList}>
            {list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <ul className={classes.uList}>
            {list.map((item) => (
              <li>{item}</li>
            ))}            
          </ul>
        </GridItem> */}
      </GridContainer>
    </div>
  );
}
