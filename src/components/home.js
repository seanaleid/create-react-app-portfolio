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
  titleTop: {
    color: "#6C63FF",
    display: "flex",
    alignItems: "baseline",
  },
  title: {
    color: "#6C63FF",
    fontWeight: "1000",
    fontFamily: "Fjalla one",
  },
  name: {
    fontWeight: "1000",
    fontFamily: "Fjalla one",
    fontSize: "10rem",
    marginLeft: "0.5rem"
  },
  inside: {
    display: "flex",
    alignItems: "center",
    margin: "0"
  },
  typewriter: {
    fontSize: "3rem",
    fontFamily: "Fjalla one",
    fontWeight: "1000",
    marginLeft: "0.5rem"
  }
});

const Home = (props) => {
const classes = useStyles();
console.log(props)

  return (
    <React.Fragment>
      <Container className={classes.box}>
        <div className={classes.titleTop}>
          <Typography 
            variant="h3" 
            className={classes.title}
            // style={{color: `${props.colors.}`}}
          >
            Hi, my name is 
          </Typography>
          <h1 className={classes.name}>Sean!</h1>
        </div>
        <div className={classes.inside}>
          <Typography variant="h3" className={classes.title}>
            I&#39;m   
          </Typography>
          {/* <TypeWriter/> */}
          <ReactRotatingText 
            items={["a software developer.", "a project manager.", "a problem solver.", "a leader.", "an educator.", "a designer."]}
            className={classes.typewriter}
            color={"#6C63FF"}
          />
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Home;

