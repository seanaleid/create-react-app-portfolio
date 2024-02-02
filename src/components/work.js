import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
// import { Link, Route, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// import { Typography } from "@material-ui/core";
// import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';

// components
// import Projects from "./projects.js";
// import Designs from "./designs.js";

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
  // const history = useLocation();
  // const slug = history.pathname.split("/")[2]
  // console.log(`HISTORY`, typeof history.pathname.split("/")[2]);
  // const [slug, setSlug] = useState(history.pathname.split("/")[2]);
  // const [designs, setDesigns] = useState(false);
  // console.log('SLUG', setSlug());

  return (
    <React.Fragment>
      <Container className={classes.box}>
        
        
      </Container>
    </React.Fragment>
  );
};



Work.propTypes = {
  colors: PropTypes.object,
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
}

export default withWidth()(Work);
