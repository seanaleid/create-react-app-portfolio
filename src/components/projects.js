import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
// import { Link, Route, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';

// import font styles
import { fontStyles } from "../utils/fontStyle.js";

// import component
import ProjectCard from "./projectCard.js";
import { projectDetails } from "./projectDetails.js";

const useStyles = makeStyles({
  box: {
    maxWidth: "100vw",
    
    zIndex: "2",
    // border: "1px solid blue",
    display: "flex",
    justifyContents: "flexStart"
  },
  leftContainer: {
    // border: "1px solid green",
    maxWidth: "35%",
    paddingTop: "5rem",
    display: "flex",
    flexDirection: "column",
  },
  rightContainer: {
    // border: "1px solid orange",
    maxHeight: "100vh",
    paddingTop: "5rem",
    maxWidth: "65%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  projectContainer: {
    overflow: "scroll",
  },
  titleNav: {
    display: "flex",
    justifyContent: "space-between",
  },
  titleDiv: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "1000",
    fontFamily: `${fontStyles.text}`,
    // border: "1px solid orange",
    fontSize: "2.25rem",
    // marginTop: "3rem",
    // marginBottom: "3rem",
    // textDecoration: "none",
  },
  titleCenter: {
    fontWeight: "bold",
    fontFamily: "Fjalla one",
    marginTop: "3rem",
    marginBottom: "3rem",
    display: "flex",
    justifyContent: "center",
  },
  text: {
    marginBottom: "1rem",
    fontFamily: `${fontStyles.text}`,
    textAlign: "justify",
  },
  // projectContainer: {
  //   border: "1px solid pink",
  //   display: "flex",
  //   padding: "0px", 
  //   borderRadius: "10px"
  // },
  // projectLeftContainer: {
  //   maxWidth: "30%",
  //   border: "1px solid blue",
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center"
  // },
  // image: {
  //   height: "11.93rem",
  //   width: "16.43rem",
  //   borderRadius: "0.5rem",
  //   margin: "1rem 0rem 0rem 0rem"
  // },
  // year: {
  //   marginTop: "1.2rem",
  //   fontFamily: `${fontStyles.text}`,
  //   textAlign: "justify",
  // },
  // projectRightContainer: {
  //   maxWidth: "70%",
  //   border: "1px solid green",
  // },
});

const Projects = ({colors}) => {
  const classes = useStyles();
  // const history = useLocation();
  // const slug = history.pathname.split("/")[2]
  // console.log(`HISTORY`, typeof history.pathname.split("/")[2]);
  // const [slug, setSlug] = useState(history.pathname.split("/")[2]);
  // const [designs, setDesigns] = useState(false);
  // console.log('SLUG', setSlug());
  // console.log(projectDetails)
  const projectData = [...projectDetails];

  return (
    <React.Fragment>
      <Container className={classes.box}>
      <Container className={classes.leftContainer}>
        <Hidden smDown>
          <Typography variant="h1" className={classes.title} style={{color:`${colors.primary}`}}>Check out my work</Typography>
          <Typography variant="h6" className={classes.text} style={{color:`${colors.primary}`, lineHeight: "250%"}}>
            This is a showcase of the different types of projects I have worked on in a designing, coding, leading, or managing role. 
          </Typography>
          <Typography variant="h6" className={classes.text} style={{color:`${colors.primary}`, lineHeight: "250%"}}>
            As the worlds of software development and product evolve, so does my role. I am continually learning and adding to my skillset. 
          </Typography>
        </Hidden>
      </Container>
      <Container className={classes.rightContainer}>
        <div className={classes.projectContainer}>
          {projectData.map((x,i)  => (
            <ProjectCard details={x} colors={colors} key={`${i}`}/>
          ))}
        </div>
      </Container>
        
        <Hidden mdUp>
          <Typography variant="h1" className={classes.titleCenter} style={{color:`${colors.primary}`}}>Projects</Typography>
        </Hidden>
      </Container>
    </React.Fragment>
  );
};



Projects.propTypes = {
  colors: PropTypes.object,
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
}

export default withWidth()(Projects);
