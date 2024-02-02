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
    margin: "0 auto",
    maxWidth: "100vw",
  },
  titleTop: {
    maxWidth: "80vw",
    border: "1px solid pink",
    bottom: "0",
  },
  hiddenTitleTop: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  lastName: {
    fontWeight: "500",
    fontFamily: "ValkyRegular",
    border: "1px solid pink",
  },
  hiddenLastName: {
    fontWeight: "1000",
    fontFamily: "ValkyRegular",
    fontSize: "1.8rem",
  },
  firstName: {
    fontWeight: "1000",
    fontFamily: "ValkyRegular",
    fontSize: "33.125rem",
    marginLeft: "0.5rem"
  },
  hiddenFirstName: {
    fontWeight: "1000",
    fontFamily: "ValkyRegular",
    fontSize: "8rem",
    marginTop: "0",
  },
});

const Home = (props) => {
const classes = useStyles();
const {colors} = props;

  return (
    <React.Fragment>
      <Hidden smDown>
        <Container className={classes.box}>
          <div className={classes.titleTop}>
            <h1 
              className={classes.firstName} 
              style={{color: `${colors.home}`}}
            >
              Sean</h1>
            <Typography 
              variant="h3" 
              className={classes.lastName}
              style={{color: `${colors.home}`}}
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

