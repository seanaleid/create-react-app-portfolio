import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import Hidden from '@material-ui/core/Hidden';


import withWidth from '@material-ui/core/withWidth';

const useStyles = makeStyles({
  box: {
    margin: "0 auto",
    maxWidth: "1000px",
  },
  inside: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  title: {
    fontWeight: "bold",
    fontFamily: "Fjalla one",
    marginBottom: "3rem",
  },
  titleCenter: {
    fontWeight: "bold",
    fontFamily: "Fjalla one",
    marginTop: "3rem",
    marginBottom: "3rem",
    display: "flex",
    justifyContent: "center",
  },
  avatar: {
    margin: "3rem",
    width: "8rem",
    height: "8rem",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0px 18px 14px -14px rgba(0,0,0,0.2), 0px 14px 14px 0px rgba(0,0,0,0.14), 0px 14px 12px 0px rgba(0,0,0,0.12)",
    }
  },
  icon: {
    width: "6rem",
    height: "6rem",
  }
});

const Contact = ({colors}) => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.box}>
        <Hidden smDown>
          <Typography variant="h1" className={classes.title} style={{color:`${colors.about}`}}>Blog</Typography>
        </Hidden>
        <Hidden mdUp>
          <Typography variant="h1" className={classes.titleCenter} style={{color:`${colors.about}`}}>Blog</Typography>
        </Hidden>
      </Container>
    </>
  )
}

Contact.propTypes = {
  colors: PropTypes.object,
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
}

export default withWidth()(Contact);