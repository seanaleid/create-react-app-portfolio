import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ReactRotatingText from "react-rotating-text";
import PropTypes from "prop-types";
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';

const useStyles = makeStyles({
  box: {
    margin: "0 auto",
    maxWidth: "1000px",
  },
  titleTop: {
    display: "flex",
    alignItems: "baseline",
  },
  hiddenTitleTop: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    fontWeight: "1000",
    fontFamily: "Fjalla one",
  },
  name: {
    fontWeight: "1000",
    fontFamily: "Fjalla one",
    fontSize: "10rem",
    marginLeft: "0.5rem"
  },
  hiddenName: {
    fontWeight: "1000",
    fontFamily: "Fjalla one",
    fontSize: "8rem",
    marginTop: "0",
  },
  inside: {
    display: "flex",
    alignItems: "center",
    margin: "0"
  },
  hiddenInside: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0"
  },
  typewriter: {
    fontSize: "3rem",
    fontFamily: "Fjalla one",
    fontWeight: "1000",
    marginLeft: "0.5rem"
  },
  hiddenTypewriter: {
    fontSize: "1.8rem",
    fontFamily: "Fjalla one",
    fontWeight: "1000",
    marginLeft: "0.5rem"
  }
});

const Home = (props) => {
const classes = useStyles();
const {colors} = props;

  return (
    <React.Fragment>
      <Hidden smDown>
        <Container className={classes.box}>
          <div className={classes.titleTop}>
            <Typography 
              variant="h3" 
              className={classes.title}
              style={{color: `${colors.home}`}}
            >
              Hi, my name is 
            </Typography>
            <h1 
              className={classes.name} 
              style={{color: `${colors.home}`}}
            >
              Sean!</h1>
          </div>
          <div className={classes.inside}>
            <Typography variant="h3" className={classes.title} style={{color: `${colors.home}`}}>
              I&#39;m   
            </Typography>
            {/* <TypeWriter/> */}
            <ReactRotatingText 
              items={["a software developer.", "a project manager.", "a problem solver.", "a leader.", "an educator.", "a designer."]}
              className={classes.typewriter}
              color={colors.home}
            />
          </div>
        </Container>
      </Hidden>
      <Hidden mdUp>
        <Container className={classes.box}>
          <div className={classes.hiddenTitleTop}>
            <Typography 
              variant="h4" 
              className={classes.title}
              style={{color: `${colors.home}`}}
            >
              Hi, my name is 
            </Typography>
            <h1 
              className={classes.hiddenName} 
              style={{color: `${colors.home}`}}
            >
              Sean!</h1>
          </div>
          <div className={classes.hiddenInside}>
            <Typography variant="h4" className={classes.title} style={{color: `${colors.home}`}}>
              I&#39;m   
            </Typography>
            {/* <TypeWriter/> */}
            <ReactRotatingText 
              items={["a software developer.", "a project manager.", "a problem solver.", "a leader.", "an educator.", "a designer."]}
              className={classes.hiddenTypewriter}
              color={colors.home}
            />
          </div>
        </Container>
      </Hidden>
    </React.Fragment>
  );
};

Home.propTypes = {
  colors: PropTypes.object,
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
}

export default withWidth()(Home);

