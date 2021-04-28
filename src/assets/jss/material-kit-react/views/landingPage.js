import { container, title } from "assets/jss/material-kit-react.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "50px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none",
    "@media (max-width: 992px)": {
      marginTop: "100px",
    },
    "@media (max-width: 768px)": {
      marginTop: "100px",
    },
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
  },
  main: {
    background: "#FDF6E3",
    position: "relative",
    zIndex: "3",
  },

  mainPhoto: {
    borderRadius: "10px",
    position: "absolute",
    left: "35%",
    top: "15%",
    width: "50%",
    zIndex: "25",
    transform: "rotate(20deg)",
    // transform: "translate3d(0, -50%, 0)",
    "@media (max-width: 1200px)": {
      width: "50%",
      transform: "rotate(20deg)",
      top: "30%",
      left: "25%",
    },
    "@media (max-width: 992px)": {
      width: "50%",
      transform: "none",
      top: "20%",
      left: "25%",
    },
    "@media (max-width: 768px)": {
      width: "50%",
      top: "20%",
      left: "25%",
      transform: "none",
      // position: "absolute"
    },
  },
  mainRaised: {
    margin: "-60px 30px 10px",
    "@media (max-width: 960px)": {
      margin: "40% 30px 0px",
    },
    "@media (max-width: 768px)": {
      margin: "60% 30px 0px",
    },
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
};

export default landingPageStyle;
