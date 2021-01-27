import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import { Link, Route, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// import { Typography } from "@material-ui/core";
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';

// components
import Projects from "./projects.js";
import Designs from "./designs.js";

const useStyles = makeStyles({
  box: {
    margin: "0 auto",
    maxWidth: "1000px",
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
    fontFamily: "Fjalla one",
    marginTop: "3rem",
    marginBottom: "3rem",
    fontSize: "6rem",
    // textDecoration: "none",
  },
  titleCenter: {
    fontWeight: "bold",
    fontFamily: "Fjalla one",
    marginTop: "3rem",
    marginBottom: "3rem",
    display: "flex",
    justifyContent: "center",
  }
});

const Work = ({colors}) => {
  const classes = useStyles();
  const history = useLocation();
  const slug = history.pathname.split("/")[2]
  // console.log(`HISTORY`, typeof history.pathname.split("/")[2]);
  // const [slug, setSlug] = useState(history.pathname.split("/")[2]);
  // const [designs, setDesigns] = useState(false);
  // console.log('SLUG', setSlug());

  return (
    <React.Fragment>
      <Container className={classes.box}>
        <Hidden smDown>
          <nav className={classes.titleNav}>
            <Link to="/work/projects" id="projectsLink" className={classes.title} style={slug === "projects" ? {color: `${colors.projects}`} : {color: `${colors.text}`, textDecoration: "none"}} >Projects</Link>
            <Link to="/work/designs" id="designsLink" className={classes.title} style={slug === "designs" ? {color: `${colors.projects}`} : {color: `${colors.text}`, textDecoration: "none"}}>Designs</Link>
          </nav>
        </Hidden>
        {/* <Hidden mdUp>
          <Typography variant="h1" className={classes.titleCenter} style={{ color: `${colors.projects}`}}>Projects</Typography>
        </Hidden> */}
        <Route path="/work/projects" render={props => <Projects {...props} colors={colors}/>}/>
        {/* <Route exact path="/work/designs" render={props => <Designs {...props} colors={colors}/>}/> */}
        <Route path="/work/designs" render={props => <Designs {...props} colors={colors}/>}/>
      </Container>
    </React.Fragment>
  );
};



Work.propTypes = {
  colors: PropTypes.object,
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
}

export default withWidth()(Work);
