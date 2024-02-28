import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import withWidth from '@material-ui/core/withWidth';

// import font styles
import { fontStyles } from "../utils/fontStyle.js";

const useStyles = makeStyles({
  projectContainer: {
    border: "1px solid pink",
    display: "flex",
    padding: "0px", 
    borderRadius: "10px"
  },
  projectLeftContainer: {
    maxWidth: "30%",
    border: "1px solid blue",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: "11.93rem",
    width: "16.43rem",
    borderRadius: "0.5rem",
    margin: "1rem 0rem 0rem 0rem"
  },
  year: {
    marginTop: "1.2rem",
    fontFamily: `${fontStyles.text}`,
    textAlign: "justify",
  },
  projectRightContainer: {
    maxWidth: "70%",
    border: "1px solid green",
  },
});

const ProjectCard = ({colors}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.projectContainer}>
        <Container className={classes.projectLeftContainer}>
          <img src="https://kobalt-pics.s3.amazonaws.com/developer/Screen+Recording+2020-12-30+at+10.58.03+PM.gif"
            className={classes.image}
          ></img>
          <Typography variant="h6" className={classes.year} style={{color:`${colors.primary}`}}
          >2019</Typography>
        </Container>
        <Container className={classes.projectRightContainer}>

        </Container>        
      </Container>
    </React.Fragment>
  );
};

ProjectCard.propTypes = {
  colors: PropTypes.object,
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(ProjectCard);