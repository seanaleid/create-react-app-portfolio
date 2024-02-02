import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
//  

const useStyles = makeStyles({
  box: {
    margin: "0 auto",
    maxWidth: "1000px",
    display: "flex",
    justifyContent: "center",
    position: "realtive",
    bottom: "0px",
    marginBottom: "1rem"
  },
  title: {
    fontWeight: "400",
    fontFamily: 'Roboto', 
    marginTop: "3rem",
    marginBottom: "3rem",
    position: "relative",
    bottom: "0px",
    margin: "0 auto",
  },
});

const Footer = ({colors}) => {
const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.box}>
        
      </Container>
    </React.Fragment>
  );
};

Footer.propTypes = {
  colors: PropTypes.object,
}

export default Footer;

