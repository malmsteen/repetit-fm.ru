import { container, title } from "assets/jss/material-kit-react.js";

const mathPageStyle = {
  container: {
    ...container,
    zIndex: "12",
    color: "#FFF",
    // width: "auto",
  },
  main: {
    background: "#FDF6E3",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    paddingTop: "16px",
    paddingBottom: "16px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  title: {
    ...title,
    color: "#FFF",
    display: "inline-block",
    position: "relative",
    margin: "0 auto",
    minHeight: "32px",
    textDecoration: "none",
  },
};

export default mathPageStyle;
