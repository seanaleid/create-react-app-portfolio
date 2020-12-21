import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

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
    background: "#FAFAFA",
    display: "flex",
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
    color: "#708090",
    textDecoration: "none",
    paddingLeft: "10px",
    "&:hover": {
      borderBottom: "3px solid #FC6E22",

      color: "#FC6E22",
      fontWeight: "600",
    },
  },
});

export default function ElevateAppBar(props) {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.bar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.text}>
              <Link to="/" className={classes.linkText}>
                Sean Naleid
              </Link>
            </Typography>
            <Toolbar className={classes.links}>
              <Typography variant="h6" className={classes.text}>
                <Link to="/about" className={classes.linkText}>
                  About
                </Link>
              </Typography>
              <Typography variant="h6" className={classes.text}>
                <Link to="/projects" className={classes.linkText}>
                  Projects
                </Link>
              </Typography>
              <Typography variant="h6" className={classes.text}>
                <Link to="/contact" className={classes.linkText}>
                  Contact
                </Link>
              </Typography>
            </Toolbar>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
