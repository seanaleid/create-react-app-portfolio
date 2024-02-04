import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
// import ReactRotatingText from "react-rotating-text";
import PropTypes from "prop-types";
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';

const useStyles = makeStyles({
  box: {
    // border: "1px solid pink",
    maxHeight: "100vh",
    zIndex: "2"
  },
  titleTop: {
    // border: "1px solid pink",
    maxHeight: "100vh",
    display: "flex",
    overflow: "hidden"
  },
  hiddenTitleTop: {
    display: "flex",
    flexDirection: "column",
    // border: "1px solid pink",
  },
  lastName: {
    position: "absolute",
    right: "25vw",
    bottom: "40vh",
    fontWeight: "500",
    fontFamily: "ValkyRegular",
    // border: "1px solid pink",
    color: 'rgba(64, 1, 30, 1)',
  },
  hiddenLastName: {
    fontWeight: "1000",
    fontFamily: "ValkyRegular",
    fontSize: "1.8rem",
    // border: "1px solid pink",
  },
  firstName: {
    fontWeight: "1000",
    fontFamily: "ValkyRegular",
    fontSize: "33rem",
    // border: "1px solid pink",
    color: 'rgba(64, 1, 30, 1)',
  },
  hiddenFirstName: {
    fontWeight: "1000",
    fontFamily: "ValkyRegular",
    fontSize: "8rem",
    // border: "1px solid pink",
  },
});

const Home = (props) => {
const classes = useStyles();
const {colors} = props;

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  console.log('The browser is in dark mode');
} else {
  console.log('The browser is in light mode');
}

  return (
    <React.Fragment>
      <Hidden smDown>
        <Container className={classes.box}>
          <div className={classes.titleTop}>
            <h1 
              className={classes.firstName} 
            >
              Sean</h1>
            <Typography 
              variant="h3" 
              className={classes.lastName}
            >
              NALEID VARGAS
            </Typography>
          </div>
        </Container>
      </Hidden>
      <Hidden mdUp>
        <Container className={classes.box}>
          <div className={classes.hiddenTitleTop}>
            <Typography 
              variant="h4" 
              className={classes.hiddenLastName}
              style={{color: `${colors.home}`}}
            >
              NALEID VARGAS
            </Typography>
            <h1 
              className={classes.hiddenName} 
              style={{color: `${colors.home}`}}
            >
              Sean</h1>
          </div>
        </Container>
      </Hidden>
    </React.Fragment>
  );
};

Home.propTypes = {
  colors: PropTypes.object,
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
}

export default withWidth()(Home);

