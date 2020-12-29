import React from "react";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import GitHub from '@material-ui/icons/GitHub';
import Twitter from '@material-ui/icons/Twitter';
import MailOutlineOutlined from '@material-ui/icons/MailOutlineOutlined';
import LinkedIn from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
  box: {
    margin: "0 auto",
    maxWidth: "1000px",
  },
  inside: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    color: "#c24cf6",
    fontWeight: "bold",
    fontFamily: "Fjalla one",
    marginTop: "3rem",
    marginBottom: "3rem",
  },
  subtitle: {
    marginBottom: "3rem",
  },
  text: {
    marginBottom: "1rem",
  },
  avatar: {
    margin: "3rem",
    width: "8rem",
    height: "8rem",
    backgroundColor: "#c24cf6",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0px 18px 14px -14px rgba(0,0,0,0.2), 0px 14px 14px 0px rgba(0,0,0,0.14), 0px 14px 12px 0px rgba(0,0,0,0.12)",
    }
  },
  icon: {
    width: "6rem",
    height: "6rem",
    color: "#FAFAFA"
  }
});

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.box}>
        <Typography variant="h1" className={classes.title}>
          Contact
        </Typography>
        <Container className={classes.inside}>
          <Avatar className={classes.avatar}>
            <a 
              href="mailto:seanaleid@gmail.com"
              target="_blank" 
              rel="noreferrer"
            >
              <MailOutlineOutlined className={classes.icon}/>
            </a>
          </Avatar>
          <Avatar className={classes.avatar}>
            <a 
              href="https://www.linkedin.com/in/sean-naleid"
              target="_blank" 
              rel="noreferrer"
            >
              <LinkedIn className={classes.icon}/>
            </a>
          </Avatar>
          <Avatar className={classes.avatar}>
            <a 
              href="https://www.github.com/seanaleid"
              target="_blank" 
              rel="noreferrer"
            >
              <GitHub className={classes.icon}/>
            </a>
          </Avatar>
          <Avatar className={classes.avatar}>
            <a 
              href="https://twitter.com/SeanNaleid"
              target="_blank" 
              rel="noreferrer"
            >
              <Twitter className={classes.icon}/>
            </a>
          </Avatar>
          
        </Container>
      </Container>
    </>
  )
}

export default Contact;