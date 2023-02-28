import React from "react";
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  card: {
    borderRadius: "0",
    margin: "20px",
    height: "600px",
  },
  img: {
    position: "absolute",
  },

  hoverImg: {
    position: "absolute",
    opacity: "0",
    "&:hover": {
      opacity: "1",
    },
  },
  imgColor: {
    height: "20px",
    width: "20px",
  },
  imgColorHover: {
    position: "absolute",
    opacity: "0",
  },
  hoverColor: {
    position: "absolute",
    // opacity: "0",
  },
  rate: {
    color: "#2979ff",
  },
  button: {
    backgroundColor: "lightgrey",
    textTransform: "capitalize",
    height: "25px",
  },
  viewer: {
    fontSize: "14px",
    textTransform: "capitalize",
  },
  link: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: "grey",
      textDecoration: "underline",
    },
  },
  price: {
    paddingTop: "30px",
  },
  label: {
    fontSize: "12px",
    color: "#424242",
    paddingBottom: "10px",
  },
}));
