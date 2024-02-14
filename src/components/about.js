import React, {useState} from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import GitHub from '@material-ui/icons/GitHub';
import Twitter from '@material-ui/icons/Twitter';
import MailOutlineOutlined from '@material-ui/icons/MailOutlineOutlined';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';

// import font styles
import { fontStyles } from "../utils/fontStyle.js";

const useStyles = makeStyles({
  box: {
    maxWidth: "100vw",
    zIndex: "2",
    // border: "1px solid blue",
    display: "flex",
    justifyContents: "flexStart"
  },
  leftContainer: {
    // border: "1px solid green",
    maxWidth: "35%",
    display: "flex",
    justifyContent: "center",
    paddingTop: "5rem"
    // alignItems: "center"
  },
  rightContainer: {
    border: "1px solid orange",
    paddingTop: "5rem",
    maxWidth: "65%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  image: {
    height: "47rem",
    width: "30rem"
  },
  title: {
    fontWeight: `${fontStyles.headerBold}`,
    fontFamily: `${fontStyles.header}`,
    fontSize: `${fontStyles.headerSize}`,
    // marginBottom: "3rem",
  },
  titleCenter: {
    fontWeight: "bold",
    fontFamily: "Fjalla one",
    marginTop: "3rem",
    marginBottom: "3rem",
    display: "flex",
    justifyContent: "center",
  },
  subtitle: {
    marginBottom: "3rem",
  },
  textBox: {
    paddingLeft: "0px",
    border: "1px solid green",
    marginBottom: "3rem"
  },
  text: {
    marginBottom: "1rem",
    fontFamily: `${fontStyles.text}`,
    textAlign: "justify",
    // lineHeightStep: "48pt",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingBottom: "50px",
  },
  card: {
    width: "260px",
    margin: "20px",
    boxShadow: "none",
    '&:hover': {
      transitionDelay: "150ms",
      transitionTimingFunction: "ease-in-out",
      boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    }
  },
  cardTitle: {
    fontFamily: "Roboto",
    fontSize: "2.2rem"
  },
  cardTop:{
    display: "flex",
    alignItems: "center",
  },
  cardText: {
    fontFamily: "Roboto",
    textAlign: "justify",
  },
  bolded: {
    fontWeight: "700"
  },
  resumeBox: {
    border: "1px solid pink",
    paddingLeft: "0px",
  },
  resumeLink: {
    border: "1px solid pink",
  },
  linkBox: {
    display: "flex",
    border: "1px solid red"
  },
  icon: {
    height: "2rem",
    width: "2rem",
    marginRight: "0.5rem",
  },
  button: {
    fontFamily: "Roboto",
    fontWeight: "1000",
    '&:hover': {
      transitionDelay: "100ms",
      transitionTimingFunction: "ease-in-out",
    } 
  },
  linkText: {
    textDecoration: "none",
    paddingLeft: "5px",
    fontWeight: "500",
    fontFamily: 'Roboto',
    "&:hover": {
      fontWeight: "600",
    },
  },
});

const About = ({colors}) => {
  const classes = useStyles();

  const [hover, setHover] = useState(false);
  const [hoverId, setHoverId] = useState(null);

  return (
    <React.Fragment>
      <Container className={classes.box}>
        <Container className={classes.leftContainer}>
          <Avatar variant="rounded" className={classes.image} alt="Black and white portrait of Sean Naleid Vargas." src="https://kobalt-pics.s3.amazonaws.com/developer/sean-black-and-white.png"/>
        </Container>
        <Container className={classes.rightContainer}>
          <Container className={classes.textBox}>
            <Hidden smDown>
              <Typography variant="h1" className={classes.title} style={{color:`${colors.primary}`}}>Nice to meet you</Typography>
            </Hidden>
            <Hidden mdUp>
              <Typography variant="h1" className={classes.titleCenter} style={{color:`${colors.primary}`}}>Nice to meet you</Typography>
            </Hidden>
            <br />
            <Typography variant="h6" className={classes.text} style={{color:`${colors.primary}`}}>
              Hey there, I&#39;m <span className={classes.bolded}>Sean</span>—a problem-solver and perpetual learner currently navigating the <span className={classes.bolded}>Product Owner</span> role at 
                <a 
                  href="https://www.kitestring.com/" 
                  id="kitestring"
                  target="_blank"
                  rel="noreferrer"
                  className={classes.linkText}
                  onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
                  onMouseLeave={() => {setHover(false)}}
                  style={{
                    color: (hover && hoverId === "kitestring" ? `${colors.highlight}` : `${colors.primary}`),
                    textDecoration: (hover && hoverId === "kitestring" ? 'underline' : null),
                  }} 
                >
                  <span className={classes.bolded}>Kitestring Technical Consultants.</span>
                </a> Beyond the professional realm, I&#39;m all about leveraging my mishmash of experiences. Whether it&#39;s working on a new coding project, delving into creative design, or experimenting with an idea, I&#39;m constantly exploring the vast landscape where technology and creativity collide.
            </Typography>
            <br />
            <Typography variant="h6" className={classes.text} style={{color:`${colors.primary}`}}>
            This website is my playground, a space where I share my personal projects. It&#39;s one part notebook where I share notes on my thought process. One part sketchbook where I post designs. One part dev portfolio highlighting my coding projects. From experiments to more refined endeavors, consider this an open invitation to join me. <span className={classes.bolded}>Let&#39;s navigate this exciting journey together!</span>
            </Typography>
          </Container>

          <Container className={classes.resumeBox}>
            <Container className={classes.resumeBox}>
              <Typography variant="h6">
                Download my résumé
              </Typography>
            </Container>
            <Container className={classes.linkBox}>
              <Avatar className={classes.avatar} style={{backgroundColor: `${colors.text}`}}>
                <a 
                  href="mailto:seannaleidvargas@gmail.com"
                  target="_blank" 
                  rel="noreferrer"
                >
                  <MailOutlineOutlined className={classes.icon} style={{color: `${colors.primary}`}}/>
                </a>
              </Avatar>
              <Avatar className={classes.avatar} style={{backgroundColor: `${colors.text}`}}>
                <a 
                  href="https://www.linkedin.com/in/sean-naleid-vargas/"
                  target="_blank" 
                  rel="noreferrer"
                >
                  <LinkedIn className={classes.icon} style={{color: `${colors.primary}`}}/>
                </a>
              </Avatar>
              <Avatar className={classes.avatar} style={{backgroundColor: `${colors.text}`}}>
                <a 
                  href="https://www.github.com/seanaleid"
                  target="_blank" 
                  rel="noreferrer"
                >
                  <GitHub className={classes.icon} style={{color: `${colors.primary}`}}/>
                </a>
              </Avatar>
              <Avatar className={classes.avatar} style={{backgroundColor: `${colors.text}`}}>
                <a 
                  href="https://twitter.com/SeanNaleid"
                  target="_blank" 
                  rel="noreferrer"
                >
                  <Twitter className={classes.icon} style={{color: `${colors.primary}`}}/>
                </a>
              </Avatar>
            </Container>
          </Container>
        </Container>
        
        
      </Container>
    </React.Fragment>
  );
};

About.propTypes = {
  colors: PropTypes.object,
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(About);
