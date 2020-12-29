import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  box: {
    margin: "0 auto",
    maxWidth: "1000px",
    display: "flex",
    justifyContent: "center"
  },
  title: {
    color: "#708090",
    fontWeight: "400",
    fontFamily: "Fjalla one",
    marginTop: "3rem",
    marginBottom: "3rem",
    position: "relative",
    bottom: "0px",
    margin: "0 auto",
  },
});

const Footer = () => {
const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.box}>
        <Typography variant="h6" className={classes.title}>
          Sean Naleid &#169; 2020
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default Footer;

