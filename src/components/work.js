import React, {useState} from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';

// components
import Projects from "./projects.js";
// import Designs from "./designs.js";

const useStyles = makeStyles({
  box: {
    margin: "0 auto",
    maxWidth: "1000px",
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
    textDecoration: "none",
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
  const [projects, setProjects] = useState(true);
  const handleClick = () => setProjects(!projects);

  return (
    <React.Fragment>
      <Container className={classes.box}>
        <Hidden smDown>
            <div className={classes.titleDiv}>
              {/* <Typography variant="h1" className={classes.title} style={{ color: `${colors.projects}`}}>Projects</Typography>
              <Typography variant="h1" className={classes.title} style={{ color: `${colors.projects}`}}>Designs</Typography> */}
              <Link className={classes.title} onClick={handleClick} style={projects ? {color: `${colors.projects}`} : {color: `${colors.text}`}}>Projects</Link>
              <Link className={classes.title} onClick={handleClick} style={projects ? {color: `${colors.text}`} : {color: `${colors.projects}`}}>Designs</Link>
            </div>
          </Hidden>
          <Hidden mdUp>
            <Typography variant="h1" className={classes.titleCenter} style={{ color: `${colors.projects}`}}>Projects</Typography>
          </Hidden>
        
        <Projects colors={colors} />
        {/* <Designs colors={colors} /> */}
      </Container>
    </React.Fragment>
  );
};

Work.propTypes = {
  colors: PropTypes.object,
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
}

export default withWidth()(Work);
