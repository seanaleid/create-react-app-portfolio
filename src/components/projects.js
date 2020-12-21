import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  box: {
    margin: "0 auto",
    maxWidth: "1000px",
  },
  title: {
    color: "#ff1493",
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

const Projects = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.box}>
        <Typography variant="h1" className={classes.title}>
          Projects
        </Typography>
        <div>
          <h2>Projects test</h2>
          <h2>Projects test 2</h2>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Projects;
