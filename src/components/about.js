import React, {useState} from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
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
          <Typography variant="h1" className={classes.title} style={{color:`${colors.about}`}}>About</Typography>
        </Hidden>
        <Hidden mdUp>
          <Typography variant="h1" className={classes.titleCenter} style={{color:`${colors.about}`}}>About</Typography>
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
        <Hidden smDown>
          <Typography variant="h2" className={classes.title} style={{ color: `${colors.about}`}}>Recommendations</Typography>
        </Hidden>
        <Hidden mdUp>
          <Typography variant="h2" className={classes.titleCenter} style={{ color: `${colors.about}`}}>Recommendations</Typography>
        </Hidden>
        <Container className={classes.cardContainer}>
          <Card className={classes.card}>
            <CardContent style={{ backgroundColor: `${colors.body}`}}>
              <div className={classes.cardTop}>
                <LinkedIn className={classes.icon} style={{color:`${colors.text}`}}/>
                <Typography className={classes.cardTitle} style={{color:`${colors.text}`}}>
                  Erik R.
                </Typography>
              </div>
              <Typography className={classes.cardText} style={{color:`${colors.text}`}}>
                I was fortunate to be placed under Sean&apos;s leadership at Lambda.
                Sean is a phenomenal person, speaker, and educator! One of his
                skills I admired while interacting with Sean is his ability to
                explain and break down complex software problems...
              </Typography>
            </CardContent>
            <CardActions style={{ backgroundColor: `${colors.body}`}}>
              <Button
                size="small"
                href="https://www.linkedin.com/in/sean-naleid/"
                id="erik"
                target="_blank"
                rel="noreferrer"
                className={classes.button}
                onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
                onMouseLeave={() => {setHover(false)}}
                style={{
                  color: (hover && hoverId === "erik" ? `${colors.hoverText}` : `${colors.text}`),
                  backgroundColor: (hover &&  hoverId === "erik"? `${colors.projects}` : `${colors.body}`),
                }} 
              >
                Read More
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardContent style={{ backgroundColor: `${colors.body}`}}>
              <div className={classes.cardTop}>
                <LinkedIn className={classes.icon} style={{color:`${colors.text}`}}/>
                <Typography className={classes.cardTitle} style={{color:`${colors.text}`}}>
                  Josue R.
                </Typography>
              </div>
              <Typography className={classes.cardText} style={{color:`${colors.text}`}}>
                Sean was my Team Leader in Lambda and let me just say that Sean
                is extremely capable and regularly goes beyond his role
                description to get the job done. I’ve worked under Sean for well
                over 3 months and has provided not only myself, but our whole
                team...
              </Typography>
            </CardContent>
            <CardActions style={{ backgroundColor: `${colors.body}`}}>
              <Button
                size="small"
                href="https://www.linkedin.com/in/sean-naleid/"
                id="josue"
                target="_blank"
                rel="noreferrer"
                className={classes.button}
                onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
                onMouseLeave={() => {setHover(false)}}
                style={{
                  color: (hover && hoverId === "josue" ? `${colors.hoverText}` : `${colors.text}`),
                  backgroundColor: (hover &&  hoverId === "josue"? `${colors.projects}` : `${colors.body}`),
                }} 
              >
                Read More
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardContent style={{ backgroundColor: `${colors.body}`}}>
              <div className={classes.cardTop}>
                <LinkedIn className={classes.icon} style={{color:`${colors.text}`}}/>
                <Typography className={classes.cardTitle} style={{color:`${colors.text}`}}>
                  Luis P.
                </Typography>
              </div>
              <Typography className={classes.cardText} style={{color:`${colors.text}`}}>
                Sean was my TL during the CORE Curriculum of Lambda School. At
                all times, Sean demonstrated professionalism and full mastery
                over the course material. Sean always went above and beyond to
                help his students understand the material beyond...
              </Typography>
            </CardContent>
            <CardActions style={{ backgroundColor: `${colors.body}`}}>
              <Button
                size="small"
                href="https://www.linkedin.com/in/sean-naleid/"
                id="luis"
                target="_blank"
                rel="noreferrer"
                className={classes.button}
                onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
                onMouseLeave={() => {setHover(false)}}
                style={{
                  color: (hover && hoverId === "luis" ? `${colors.hoverText}` : `${colors.text}`),
                  backgroundColor: (hover &&  hoverId === "luis"? `${colors.projects}` : `${colors.body}`),
                }} 
              >
                Read More
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardContent style={{ backgroundColor: `${colors.body}`}}>
              <div className={classes.cardTop}>
                <LinkedIn className={classes.icon} style={{color:`${colors.text}`}}/>
                <Typography className={classes.cardTitle} style={{color:`${colors.text}`}}>
                William R.
                </Typography>
              </div>
              <Typography className={classes.cardText} style={{color:`${colors.text}`}}>
                If I had to sum Sean up in one word it would most definitely be
                Teacher. In its truest form Sean was not simply a team leader
                but I would go as far as calling him our personal instructor,
                motivator, and most of all friend. He would take any and all
                time needed to not only help us solve...
              </Typography>
            </CardContent>
            <CardActions style={{ backgroundColor: `${colors.body}`}}>
              <Button
                size="small"
                href="https://www.linkedin.com/in/sean-naleid/"
                id="william"
                target="_blank"
                rel="noreferrer"
                className={classes.button}
                onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
                onMouseLeave={() => {setHover(false)}}
                style={{
                  color: (hover && hoverId === "william" ? `${colors.hoverText}` : `${colors.text}`),
                  backgroundColor: (hover &&  hoverId === "william"? `${colors.projects}` : `${colors.body}`),
                }} 
              >
                Read More
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardContent style={{ backgroundColor: `${colors.body}`}}>
              <div className={classes.cardTop}>
                <LinkedIn className={classes.icon} style={{color:`${colors.text}`}}/>
                <Typography className={classes.cardTitle} style={{color:`${colors.text}`}}>
                Carl S.
                </Typography>
              </div>
              <Typography className={classes.cardText} style={{color:`${colors.text}`}}>
                Throughout my time at Lambda, Sean was the person I turned
                everything into and asked all my questions. Sean not only spent
                hours and hours of extra time with every single one of his
                students in his group to ensure success, but also created a
                comfortable and productive work environment...
              </Typography>
            </CardContent>
            <CardActions style={{ backgroundColor: `${colors.body}`}}>
              <Button
                size="small"
                href="https://www.linkedin.com/in/sean-naleid/"
                id="carl"
                target="_blank"
                rel="noreferrer"
                className={classes.button}
                onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
                onMouseLeave={() => {setHover(false)}}
                style={{
                  color: (hover && hoverId === "carl" ? `${colors.hoverText}` : `${colors.text}`),
                  backgroundColor: (hover &&  hoverId === "carl"? `${colors.projects}` : `${colors.body}`),
                }} 
              >
                Read More
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardContent style={{ backgroundColor: `${colors.body}`}}>
                <div className={classes.cardTop}>
                  <LinkedIn className={classes.icon} style={{color:`${colors.text}`}}/>
                  <Typography className={classes.cardTitle} style={{color:`${colors.text}`}}>
                  Brandon H.
                  </Typography>
                </div>
                <Typography className={classes.cardText} style={{color:`${colors.text}`}}>
                    Sean is one of the best people I have had the pleasure of
                    working with. During my time as Section Lead I witnessed many
                    students and fellow Team Leads receive help, either with advice
                    on how to handle a situation, or some technical part of coding,
                    and come away...
                </Typography>
            </CardContent>
            <CardActions style={{ backgroundColor: `${colors.body}`}}>
                <Button
                size="small"
                href="https://www.linkedin.com/in/sean-naleid/"
                id="brandon"
                target="_blank"
                rel="noreferrer"
                className={classes.button}
                onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
                onMouseLeave={() => {setHover(false)}}
                style={{
                  color: (hover && hoverId === "brandon" ? `${colors.hoverText}` : `${colors.text}`),
                  backgroundColor: (hover &&  hoverId === "brandon"? `${colors.projects}` : `${colors.body}`),
                }} 
              >
                Read More
              </Button>
            </CardActions>
          </Card>
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
