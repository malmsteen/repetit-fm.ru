import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

function ThemeNesting() {
  return (
    <div>
      <Checkbox defaultChecked color="primary" />
      <Checkbox defaultChecked />
    </div>
  );
}

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      {/* <ThemeNesting /> */}
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <p>
            <a name="form"></a>
          </p>
          <h2 className={classes.title}>Напишите мне</h2>
          <h4 className={classes.description}>
            Если вы хотите записаться на занятие, получить консультацию, или
            задать какие-либо вопросы.
          </h4>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              console.log(event.target[1].value);
            }}
          >
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Ваше имя"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Ваша почта"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Сообщение"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                {/* <ThemeNesting /> */}
                <Button
                  type="submit"
                  size="large"
                  variant="contained"
                  color="primary"
                  // onClick={() => {
                  //   alert("clicked");
                  // }}
                >
                  Жамкнуть
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
