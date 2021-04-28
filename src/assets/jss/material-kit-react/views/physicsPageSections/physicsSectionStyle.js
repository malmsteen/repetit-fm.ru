import { container, title } from "assets/jss/material-kit-react.js";

const physicsSectionStyle = {
  container: {
    zIndex: "12",
    color: "#657B83",
    paddingTop: "50px",
    ...container,
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important",
  },
  main: {
    background: "#FDF6E3",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    paddingBottom: "16px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "auto",
    minHeight: "32px",
    textDecoration: "none",
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999",
  },
  uList: {
    listStyle: "square",
    color: "#657B83",
  },
  anchor: {
    color: "#2AA198",
    "&:hover": {
      color: "#B83B5E",
    },
  },
  mainTitle: {
    color: "#FFFFFF",
  },
};

export default physicsSectionStyle;
