import React from "react";
import { Link as RouterLink} from "react-router-dom";

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

//Components


const HomeLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to="/" {...props} />
));
const MyStoryLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to="/my-story" {...props} />
));
const SkillsLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to="/skills" {...props} />
));
const PortfolioLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to="/portfolio" {...props} />
));
const ContactLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to="/contact" {...props} />
));

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  appBar: {
    backgroundColor: 'rgba(27, 188, 155, 0.5)'
  },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Sean Naleid Vargas
          </Typography>
          {/* <Link to="/" component={WelcomePage}>Home</Link> 
          <Link to="/my-story" component={MyStory}>My Story</Link> 
          <Link to="/skills" component={Skills}>Skills</Link>
          <Link to="/portfolio" component={Portfolio}>Portfolio</Link>
          <Link to="/contact" component={Contact}>Contact</Link> */}

          <Button component={HomeLink} color="inherit">Home Page</Button>
          <Button component={MyStoryLink} color="inherit">My Story</Button>
          <Button component={SkillsLink} color="inherit">Skills</Button>
          <Button component={PortfolioLink} color="inherit">Portfolio</Button>
          <Button component={ContactLink} color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}