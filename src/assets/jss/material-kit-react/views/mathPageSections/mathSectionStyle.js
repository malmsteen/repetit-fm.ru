import { container, title } from "assets/jss/material-kit-react.js";

const mathSectionStyle = {
  container: {
    zIndex: "12",
    color: "#657B83",
    ...container,
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important",
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "auto",
    minHeight: "32px",
    textDecoration: "none",
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
};

export default mathSectionStyle;
