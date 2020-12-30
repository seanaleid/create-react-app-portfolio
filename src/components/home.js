import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ReactRotatingText from "react-rotating-text";

const useStyles = makeStyles({
  box: {
    margin: "0 auto",
    maxWidth: "1000px",
  },
  title: {
    color: "#6C63FF",
    fontWeight: "1000",
    fontFamily: "Fjalla one",
    marginTop: "3rem",
    marginBottom: "3rem",
  },
  inside: {
    display: "flex",
    alignItems: "center",
    margin: "0"
  },
});

const Home = () => {
const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.box}>
        <Typography variant="h3" className={classes.title}>
          Hi, my name is <h1 style={{display: "inline", fontSize: "10rem"}}>Sean!</h1>
        </Typography>
        <div className={classes.inside}>
          <Typography variant="h3" className={classes.title}>
            I&#39;m   
          </Typography>
          {/* <TypeWriter/> */}
          <ReactRotatingText 
            items={["a software developer.", "a project manager.", "a problem solver.", "a leader.", "an educator.", "a designer."]}
            className="typewriter"
            color={"#6C63FF"}
          />
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Home;

