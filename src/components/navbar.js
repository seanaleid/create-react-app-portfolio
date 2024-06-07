import React, {useState} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
// import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const drawerWidth = '100%';

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
    zIndex: "1000",
    // border: "1px solid red"
  },
  menuIconToolbar: {
    width: "10vw",
  },
  text: {
    fontSize: "0.875rem",
    display: "flex",
    justifyContent: "flex-end",
    transform: "rotate(-90deg)", 
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
    color: 'rgba(64, 1, 30, 1)',
    textDecoration: "none",
    fontFamily: 'Roboto',
    "&:hover": {
      fontWeight: "600",
    },
    padding: "0.5rem"
  },
  icon: {
    height: "3rem",
    width: "3rem"
  }
}));

const ElevateAppBar = (props) => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const {colors} = props;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Hidden smDown>
        <Toolbar className={classes.toolbar}>
            <div className={classes.copyright}>
              <Typography variant="h6" 
                className={classes.copyrightText} 
                style={{color: `${colors.primary}`}}
              >
                  Sean Naleid Vargas &#169; 2024
              </Typography>
            </div>
            <Typography variant="h6" className={classes.text}>
              <Link to="/" 
                className={classes.linkText} 
                id="home"
                style={{color: `${colors.primary}`}}
              >
                HOME /
              </Link>
            </Typography>
          
            <Typography variant="h6" className={classes.text}>
              <Link to="/about" 
                className={classes.linkText} 
                id="about"
                style={{color: `${colors.primary}`}}
              >
                ABOUT /
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.text}>
              <Link to="/projects" 
                className={classes.linkText} 
                id="work"
                style={{color: `${colors.primary}`}}
              >
                PROJECTS /
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.text}>
              <Link to="/blog" 
                className={classes.linkText} 
                id="contact"
                style={{color: `${colors.primary}`}}
              >
                BLOG /
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.text}>
              <a href="https://www.seanaleid.com/" 
                className={classes.linkText} 
                id="contact"
                style={{color: `${colors.primary}`}}
                rel="noreferrer"
              >
                V1 /
              </a>
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