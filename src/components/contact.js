import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import GitHub from '@material-ui/icons/GitHub';
import Twitter from '@material-ui/icons/Twitter';
import MailOutlineOutlined from '@material-ui/icons/MailOutlineOutlined';
import LinkedIn from '@material-ui/icons/LinkedIn';
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
          <Typography variant="h1" className={classes.title} style={{color: `${colors.contact}`}}>Contact</Typography>
        </Hidden>
        <Hidden mdUp>
          <Typography variant="h1" className={classes.titleCenter} style={{color: `${colors.contact}`}}>Contact</Typography>
        </Hidden>
        <Container className={classes.inside}>
          <Avatar className={classes.avatar} style={{backgroundColor: `${colors.text}`}}>
            <a 
              href="mailto:seannaleidvargas@gmail.com"
              target="_blank" 
              rel="noreferrer"
            >
              <MailOutlineOutlined className={classes.icon} style={{color: `${colors.body}`}}/>
            </a>
          </Avatar>
          <Avatar className={classes.avatar} style={{backgroundColor: `${colors.text}`}}>
            <a 
              href="https://www.linkedin.com/in/sean-naleid-vargas/"
              target="_blank" 
              rel="noreferrer"
            >
              <LinkedIn className={classes.icon} style={{color: `${colors.body}`}}/>
            </a>
          </Avatar>
          <Avatar className={classes.avatar} style={{backgroundColor: `${colors.text}`}}>
            <a 
              href="https://www.github.com/seanaleid"
              target="_blank" 
              rel="noreferrer"
            >
              <GitHub className={classes.icon} style={{color: `${colors.body}`}}/>
            </a>
          </Avatar>
          <Avatar className={classes.avatar} style={{backgroundColor: `${colors.text}`}}>
            <a 
              href="https://twitter.com/SeanNaleid"
              target="_blank" 
              rel="noreferrer"
            >
              <Twitter className={classes.icon} style={{color: `${colors.body}`}}/>
            </a>
          </Avatar>
        </Container>
      </Container>
    </>
  )
}

Contact.propTypes = {
  colors: PropTypes.object,
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
}

export default withWidth()(Contact);