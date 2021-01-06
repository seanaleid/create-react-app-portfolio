import React, {useState} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Grid from "@material-ui/core/Grid";
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

// import {useDarkMode} from "../hooks/useDarkMode.js";

const drawerWidth = '100%';

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

const useStyles = makeStyles((theme) => ({
  bar: {
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "red"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuIconToolbar: {
    width: "100%",
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
  },
  closeIcon: {
    height: "3rem",
    width: "3rem"
  }
}));

const ElevateAppBar = (props) => {
  // const [darkMode, setDarkMode] = useDarkMode('Dark Mode', false);
  // const toggleMode = e => {
  //     e.preventDefault();
  //     setDarkMode(!darkMode);
  // };
  // const theme = useTheme();
  const [hover, setHover] = useState(false);
  const [hoverId, setHoverId] = useState(null);
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const {colors} = props;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const lightMoon = <span role="img" aria-label="light mode moon emoji">🌝</span>;
  // const darkMoon = <span role="img" aria-label="dark mode moon emoji">🌚</span>
  return (
    <>
      <Hidden smDown>
        <CssBaseline />
        <ElevationScroll {...props}>
          <AppBar className={classes.bar} style={{background: `${colors.body}`}}>
            <Grid item xs={12}>
              <Toolbar className={classes.toolbar}>
                  <Typography variant="h6" className={classes.text}>
                    <Link to="/" 
                      className={classes.linkText} 
                      id="home"
                      onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
                      onMouseLeave={() => {setHover(false)}}
                      style={{
                        color: (hover && hoverId === 'home' ? `${colors.highlight}` : `${colors.text}`),
                        borderBottom: (hover && hoverId === 'home' ? `${colors.border}` : null),
                      }} 
                    >
                      Home
                    </Link>
                  </Typography>
                <Toolbar className={classes.links}>
                  <Typography variant="h6" className={classes.text}>
                    <Link to="/about" 
                      className={classes.linkText} 
                      id="about"
                      onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
                      onMouseLeave={() => {setHover(false)}}
                      style={{
                        color: (hover && hoverId === 'about' ? `${colors.highlight}` : `${colors.text}`),
                        borderBottom: (hover && hoverId === 'about' ? `${colors.border}` : null),
                      }}   
                    >
                      About
                    </Link>
                  </Typography>
                  <Typography variant="h6" className={classes.text}>
                    <Link to="/projects" 
                      className={classes.linkText} 
                      id="projects"
                      onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
                      onMouseLeave={() => {setHover(false)}}
                      style={{
                        color: (hover && hoverId === 'projects' ? `${colors.highlight}` : `${colors.text}`),
                        borderBottom: (hover && hoverId === 'projects' ? `${colors.border}` : null),
                      }}   
                    >
                      Projects
                    </Link>
                  </Typography>
                  <Typography variant="h6" className={classes.text}>
                    <Link to="/contact" 
                      className={classes.linkText} 
                      id="contact"
                      onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
                      onMouseLeave={() => {setHover(false)}}
                      style={{
                        color: (hover && hoverId === 'contact' ? `${colors.highlight}` : `${colors.text}`),
                        borderBottom: (hover && hoverId === 'contact' ? `${colors.border}` : null),
                      }}
                    >
                      Contact
                    </Link>
                  </Typography>
                  {/* <button onClick={toggleMode} className={classes.btn}>{ darkMode ? lightMoon : darkMoon }</button> */}
                </Toolbar>
              </Toolbar>
            </Grid>
          </AppBar>
        </ElevationScroll>
        <Toolbar />
      </Hidden>
      <Hidden mdUp>
        <Toolbar>
          <div className={classes.menuIconToolbar}></div>
          <IconButton
            id="menuIcon"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="end"
            className={clsx( open && classes.hide)}
            style={{
              color: (hover && hoverId === 'menuIcon' ? `${colors.highlight}` : `${colors.text}`),
              borderBottom: (hover && hoverId === 'menuIcon' ? `${colors.border}` : null),
            }} 
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Drawer
          className={classes.drawer}
          anchor="right"
          open={open}
          classes={{
            paper: {background: `${colors.body}`},
          }}
        >
          <div className={classes.drawerHeader} style={{background: `${colors.body}`}}>
            <IconButton 
              onClick={handleDrawerClose} 
              style={{color:`${colors.text}`, background: `${colors.body}`}}
            >
              <CloseIcon className={classes.closeIcon}/>
            </IconButton>
          </div>
          
          <List style={{background: `${colors.body}`, height: "100%"}}>
            {['About', 'Projects', 'Contact'].map((text, index) => (
              <ListItem button key={text} style={{ color: `${colors.projects}`}}>
                {/* <ListItemText primary={text} className={classes.}/> */}
                <Typography variant="h2" className={classes.text}>
                  <Link to={text === "home" ? "/" : `/${text}` }
                      className={classes.linkText} 
                      id={text}
                      onClick={handleDrawerClose}
                      onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
                      onMouseLeave={() => {setHover(false)}}
                      style={{
                        color: (hover && hoverId === {text} ? `${colors.highlight}` : `${colors.text}`),
                        borderBottom: (hover && hoverId === 'drawerNav' ? `${colors.border}` : null),
                      }} 
                  >
                    {text}
                  </Link>
                </Typography>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Hidden>
    </>
  );
}

ElevateAppBar.propTypes = {
  colors: PropTypes.object,
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
}

export default withWidth()(ElevateAppBar)