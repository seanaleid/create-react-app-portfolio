import React, {useState} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

// import {useDarkMode} from "../hooks/useDarkMode.js";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const useStyles = makeStyles({
  bar: {
    display: "flex",
    boxShadow: 'none',
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  links: {
    display: "flex",
  },
  text: {
    minWidth: "120px",
    display: "flex",
    justifyContent: "flex-end",
  },
  linkText: {
    marginLeft: "20px",
    textDecoration: "none",
    paddingLeft: "10px",
    fontFamily: 'Roboto',
    "&:hover": {
      fontWeight: "600",
    },
  },
  btn: {
    marginLeft: "20px",
    textDecoration: "none",
    minWidth: "40px",
    border: "none",
    backgroundColor: "#FAFAFA",
    fontSize: "2rem",
  }
});

export default function ElevateAppBar(props) {
  // const [darkMode, setDarkMode] = useDarkMode('Dark Mode', false);
  // const toggleMode = e => {
  //     e.preventDefault();
  //     setDarkMode(!darkMode);
  // };
  const [homeHover, setHomeHover] = useState(false)
  const [aboutHover, setAboutHover] = useState(false)
  const [projectsHover, setProjectsHover] = useState(false)
  const [contactHover, setContactHover] = useState(false)
  const classes = useStyles();
  const {colors} = props;

  // const lightMoon = <span role="img" aria-label="light mode moon emoji">🌝</span>;
  // const darkMoon = <span role="img" aria-label="dark mode moon emoji">🌚</span>
  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.bar} style={{background: `${colors.body}`}}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.text}>
              <Link to="/" 
                className={classes.linkText} 
                onMouseEnter={() => {setHomeHover(true)}}
                onMouseLeave={() => {setHomeHover(false)}}
                style={{
                  color: (homeHover ? `${colors.highlight}` : `${colors.text}`),
                  borderBottom: (homeHover ? `${colors.border}` : null),
                }} 
              >
                Home
              </Link>
            </Typography>
            <Toolbar className={classes.links}>
              <Typography variant="h6" className={classes.text}>
                <Link to="/about" 
                  className={classes.linkText} 
                  onMouseEnter={() => {setAboutHover(true)}}
                  onMouseLeave={() => {setAboutHover(false)}}
                  style={{
                    color: (aboutHover ? `${colors.highlight}` : `${colors.text}`),
                    borderBottom: (aboutHover ? `${colors.border}` : null),
                  }}   
                >
                  About
                </Link>
              </Typography>
              <Typography variant="h6" className={classes.text}>
                <Link to="/projects" 
                  className={classes.linkText} 
                  onMouseEnter={() => {setProjectsHover(true)}}
                  onMouseLeave={() => {setProjectsHover(false)}}
                  style={{
                    color: (projectsHover ? `${colors.highlight}` : `${colors.text}`),
                    borderBottom: (projectsHover ? `${colors.border}` : null),
                  }} 
                >
                  Projects
                </Link>
              </Typography>
              <Typography variant="h6" className={classes.text}>
                <Link to="/contact" 
                  className={classes.linkText} 
                  onMouseEnter={() => {setContactHover(true)}}
                  onMouseLeave={() => {setContactHover(false)}}
                  style={{
                    color: (contactHover ? `${colors.highlight}` : `${colors.text}`),
                    borderBottom: (contactHover ? `${colors.border}` : null),
                  }} 
                >
                  Contact
                </Link>
              </Typography>
              {/* <button onClick={toggleMode} className={classes.btn}>{ darkMode ? lightMoon : darkMoon }</button> */}
            </Toolbar>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}

ElevateAppBar.propTypes = {
  colors: PropTypes.object,
}