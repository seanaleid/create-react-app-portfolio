import React from "react";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles({
  box: {
    margin: "0 auto",
    maxWidth: "1000px",
  },
  title: {
    color: "#c24cf6",
    fontWeight: "bold",
    fontFamily: "Fjalla one",
    marginTop: "3rem",
    marginBottom: "3rem",
  },
  subtitle: {
    marginBottom: "3rem",
  },
  text: {
    marginBottom: "1rem",
  },
});

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.box}>
        <Typography variant="h1" className={classes.title}>
          Contact
        </Typography>
      </Container>
    </>
  )
}

export default Contact;