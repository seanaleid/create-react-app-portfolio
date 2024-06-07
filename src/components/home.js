import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
// import ReactRotatingText from "react-rotating-text";
import PropTypes from "prop-types";
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';

// marquee slider
import Marquee from "react-marquee-slider";
import times from "lodash/times";

const useStyles = makeStyles({
  box: {
    // border: "1px solid pink",
    maxHeight: "100vh",
    maxWidth: "100%",
    zIndex: "2"
  },
  titleTop: {
    // border: "1px solid red",
    height: "100%",
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  hiddenTitleTop: {
    display: "flex",
    flexDirection: "column",
    // border: "1px solid pink",
  },
  lastName: {
    position: "absolute",
    right: "11rem",
    bottom: "33rem",
    fontSize: "8rem",
    fontWeight: "500",
    fontFamily: "ValkyRegular",
    // border: "1px solid orange",
    // color: 'rgba(64, 1, 30, 1)',
  },
  hiddenLastName: {
    fontWeight: "1000",
    fontFamily: "ValkyRegular",
    fontSize: "1.8rem",
    // border: "1px solid pink",
  },
  firstNameBox: {
    // border: "1px solid green ",
    height: "41.5rem",
    overflow: "hidden",
    display: "flex",
    // backgroundColor: "powderBlue",
  },
  firstName: {
    fontWeight: "1000",
    fontFamily: "ValkyRegular",
    fontSize: "42rem",
    // border: "1px solid orange",
    position: "absolute",
    bottom: "7rem",
    height: "40rem",
    marginBottom: "0px",
    lineHeight: "110%",
    // color: 'rgba(64, 1, 30, 1)',
  },
  tickerBox: {
    display: "flex",
    width: "dvw",
    height: "8rem",
    zIndex: "2",
    // border: "1px solid pink",
  },
  tickerText: {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "70px",
    fontWeight: "300",
    fontStyle: "italic",
    margin: "0px"
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
            <div>
              <div className={classes.firstNameBox}>
                <Typography 
                  variant="h1" 
                  className={classes.firstName} 
                  style={{"color": `${colors.primary}`}}
                >
                  Sean</Typography>
              </div>
              <Typography 
                variant="h3" 
                className={classes.lastName}
                style={{"color": `${colors.primary}`}}
              >
                NALEID VARGAS
              </Typography>
            </div>
            <div className={classes.tickerBox}>
              <Marquee velocity={45} minScale={1} resetAfterTries={200}>
                {times(1, String).map((id) => (
                    <h2 key={`marquee-${id}`} 
                    className={classes.tickerText}
                    style={{"color": `${colors.primary}`}}
                    >
                    PRODUCT OWNER ◦ PRODUCT MANGER ◦ PROJECT MANAGER ◦ LEADER ◦ PROBLEM SOLVER ◦ EDUCATOR ◦ SOFTWARE DEVELOPER ◦ DESIGNER ◦     
                    </h2>
                ))}
              </Marquee>
            </div>
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

