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

const useStyles = makeStyles({
  box: {
    margin: "0 auto",
    maxWidth: "1000px",
  },
  title: {
    fontWeight: "bold",
    fontFamily: "Fjalla one",
    marginTop: "3rem",
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
  subtitle: {
    marginBottom: "3rem",
  },
  text: {
    marginBottom: "1rem",
    fontFamily: "Roboto",
    textAlign: "justify",
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
  icon: {
    height: "2rem",
    width: "2rem",
    marginRight: "0.5rem",
  },
  cardText: {
    fontFamily: "Roboto",
    textAlign: "justify",
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
        <Hidden smDown>
          <Typography variant="h1" className={classes.title} style={{color:`${colors.about}`}}>Nice to meet you</Typography>
        </Hidden>
        <Hidden mdUp>
          <Typography variant="h1" className={classes.titleCenter} style={{color:`${colors.about}`}}>Nice to meet you</Typography>
        </Hidden>
        <Typography variant="h6" className={classes.text} style={{color:`${colors.text}`}}>
          I currently live in the Washington DC area. I come from linguistics and education backgrounds. I combine my 10 years of experience of teaching English to Speakers of other Languages (ESOL), coaching, translation, team building, and teacher training into my current role as Chief Technology Officer at 
            <a 
              href="https://nuclius.com/" 
              id="nuclius"
              target="_blank"
              rel="noreferrer"
              className={classes.linkText}
              onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
              onMouseLeave={() => {setHover(false)}}
              style={{
                color: (hover && hoverId === "nuclius" ? `${colors.highlight}` : `${colors.text}`),
                textDecoration: (hover && hoverId === "nuclius" ? 'underline' : null),
              }} 
            >
              Nuclius
            </a>.
        </Typography>
        <Typography variant="h6" className={classes.text} style={{color:`${colors.text}`}}>
        My interest in web development sparked in a graduate translation class in Barcelona, Spain. Translating code related material comes with many difficulties due to the way that code is written. I was inspired to apply my linguistic and pedagogical experience to the coding world and offer a different point of view when writing code, mainly focusing on the user and how they will interact with the user interface. I am passionate about clean design and accessible products for everyone. 
        </Typography>
        
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
    </React.Fragment>
  );
};

About.propTypes = {
  colors: PropTypes.object,
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(About);
