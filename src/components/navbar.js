import React, {useState} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
// import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import { siteStyles } from "../utils/siteStyle";

// import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// import Grid from "@material-ui/core/Grid";
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

// function ElevationScroll(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     target: window ? window() : undefined,
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//   });
// }

// ElevationScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   window: PropTypes.func,
// };

const useStyles = makeStyles((theme) => ({

  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    // background: "red"
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
    height: "100vh",
    width: "8vw",
    flexDirection: "column-reverse",
    justifyContent: "space-evenly",
    zIndex: "2"
    // background: "red"
  },
  menuIconToolbar: {
    width: "10vw",
  },
  text: {
    fontSize: "14px",
    display: "flex",
    justifyContent: "flex-end",
    transform: "rotate(-90deg)", 
    // color: 'rgba(64, 1, 30, 1)',
    color: 'green',
  },
  copyright: {
    width: "13rem",   
    transform: "rotate(-90deg)", 
  },
  copyrightText: {
    fontSize: "14px",
    color: 'rgba(64, 1, 30, 1)',
  },
  linkText: {
    textDecoration: "none",
    fontFamily: 'Roboto',
    "&:hover": {
      fontWeight: "600",
    },
  },
  icon: {
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
        <Toolbar className={classes.toolbar}>
            <div className={classes.copyright}>
              <Typography variant="h6" className={classes.copyrightText}>
                  Sean Naleid Vargas &#169; 2024
              </Typography>
            </div>
            <Typography variant="h6" className={classes.text}>
              <Link to="/" 
                className={classes.linkText} 
                id="home"
                onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
                onMouseLeave={() => {setHover(false)}}
              >
                HOME /
              </Link>
            </Typography>
          
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
                ABOUT /
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.text}>
              <Link to="/projects" 
                className={classes.linkText} 
                id="work"
                onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
                onMouseLeave={() => {setHover(false)}}
                style={{
                  color: (hover && hoverId === 'work' ? `${colors.highlight}` : `${colors.text}`),
                  borderBottom: (hover && hoverId === 'work' ? `${colors.border}` : null),
                }}   
              >
                PROJECTS /
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.text}>
              <Link to="/blog" 
                className={classes.linkText} 
                id="contact"
                onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
                onMouseLeave={() => {setHover(false)}}
                style={{
                  color: (hover && hoverId === 'contact' ? `${colors.highlight}` : `${colors.text}`),
                  borderBottom: (hover && hoverId === 'contact' ? `${colors.border}` : null),
                }}
              >
                BLOG /
              </Link>
            </Typography>
        </Toolbar>
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
            <MenuIcon className={classes.icon}/>
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
              <CloseIcon className={classes.icon}/>
            </IconButton>
          </div>
          
          <List style={{background: `${colors.body}`, height: "100%"}}>
            {['Home', 'About', 'Projects', 'Contact'].map((text, index) => (
              <ListItem button key={text} style={{ color: `${colors.projects}`}}>
                {/* <ListItemText primary={text} className={classes.}/> */}
                <Typography variant="h2" className={classes.text}>
                  <Link to={text === "Home" ? "/" : `/${text.toLowerCase()}` }
                      className={classes.linkText} 
                      id={text}
                      onClick={handleDrawerClose}
                      onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
                      onMouseLeave={() => {setHover(false)}}
                      style={{
                        color: (hover && hoverId === text ? `${colors.highlight}` : `${colors.text}`),
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