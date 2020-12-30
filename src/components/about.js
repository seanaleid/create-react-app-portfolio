import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  box: {
    margin: "0 auto",
    maxWidth: "1000px",
  },
  title: {
    color: "#7fff00",
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
    fontFamily: "Roboto",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    paddingBottom: "50px",
  },
  cardContent: {
    background: "#FAFAFA",
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
  cardText: {
    fontFamily: "Roboto",
  },
  button: {
    fontFamily: "Roboto",
    '&:hover': {
      transitionDelay: "100ms",
      transitionTimingFunction: "ease-in-out",
      backgroundColor: "#7fff00",
    }
  }
});

const About = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.box}>
        <Typography variant="h1" className={classes.title}>
          About
        </Typography>
        <Typography variant="h6" className={classes.text}>
          I currently live in the Washington DC area. I come from a linguistics and education background. I combine my almost 10 years of experience of teaching English to Speakers of other Languages (ESOL), Coaching, Translation, Team Building, and Teacher Training into my current role as Chief Technology Officer at Nuclius.
        </Typography>
        <Typography variant="h6" className={classes.text}>
        My interest in web development sparked in a graduate translation class in Barcelona, Spain. Translating code related material comes with many difficulties due to the way that code is written. I was inspired to apply my linguistic and pedagogical experience to the coding world and offer a different point of view when writing code, mainly focusing on the user and how they will interact with the UI. I am passionate about clean design and accessible products for all. 
        </Typography>
        <Typography variant="h2" className={classes.title}>
          Recommendations
        </Typography>
        <Container className={classes.cardContainer}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography className={classes.cardTitle}>
                Erik R.
              </Typography>
              <Typography className={classes.cardText} color="textSecondary">
                I was fortunate to be placed under Sean&apos;s leadership at Lambda.
                Sean is a phenomenal person, speaker, and educator! One of his
                skills I admired while interacting with Sean is his ability to
                explain and break down complex software problems...
              </Typography>
            </CardContent>
            <CardActions className={classes.cardContent}>
              <Button
                size="small"
                href="https://www.linkedin.com/in/sean-naleid/"
                target="_blank"
                rel="noreferrer"
                className={classes.button}
              >
                Read More
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography className={classes.cardTitle}>
                Josue R.
              </Typography>
              <Typography className={classes.cardText} color="textSecondary">
                Sean was my Team Leader in Lambda and let me just say that Sean
                is extremely capable and regularly goes beyond his role
                description to get the job done. I’ve worked under Sean for well
                over 3 months and has provided not only myself, but our whole
                team...
              </Typography>
            </CardContent>
            <CardActions className={classes.cardContent}>
              <Button
                size="small"
                href="https://www.linkedin.com/in/sean-naleid/"
                target="_blank"
                rel="noreferrer"
                className={classes.button}
              >
                Read More
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography className={classes.cardTitle}>
                Luis P.
              </Typography>
              <Typography className={classes.cardText} color="textSecondary">
                Sean was my TL during the CORE Curriculum of Lambda School. At
                all times, Sean demonstrated professionalism and full mastery
                over the course material. Sean always went above and beyond to
                help his students understand the material beyond...
              </Typography>
            </CardContent>
            <CardActions className={classes.cardContent}>
              <Button
                size="small"
                href="https://www.linkedin.com/in/sean-naleid/"
                target="_blank"
                rel="noreferrer"
                className={classes.button}
              >
                Read More
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography className={classes.cardTitle}>
                William R.
              </Typography>
              <Typography className={classes.cardText} color="textSecondary">
                If I had to sum Sean up in one word it would most definitely be
                Teacher. In its truest form Sean was not simply a team leader
                but I would go as far as calling him our personal instructor,
                motivator, and most of all friend. He would take any and all
                time needed to not only help us solve...
              </Typography>
            </CardContent>
            <CardActions className={classes.cardContent}>
              <Button
                size="small"
                href="https://www.linkedin.com/in/sean-naleid/"
                target="_blank"
                rel="noreferrer"
                className={classes.button}
              >
                Read More
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography className={classes.cardTitle}>
                Carl S.
              </Typography>
              <Typography className={classes.cardText} color="textSecondary">
                Throughout my time at Lambda, Sean was the person I turned
                everything into and asked all my questions. Sean not only spent
                hours and hours of extra time with every single one of his
                students in his group to ensure success, but also created a
                comfortable and productive work environment...
              </Typography>
            </CardContent>
            <CardActions className={classes.cardContent}>
              <Button
                size="small"
                href="https://www.linkedin.com/in/sean-naleid/"
                target="_blank"
                rel="noreferrer"
                className={classes.button}
              >
                Read More
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography className={classes.cardTitle}>
                    Brandon H.
                </Typography>
                <Typography className={classes.cardText} color="textSecondary">
                    Sean is one of the best people I have had the pleasure of
                    working with. During my time as Section Lead I witnessed many
                    students and fellow Team Leads receive help, either with advice
                    on how to handle a situation, or some technical part of coding,
                    and come away...
                </Typography>
            </CardContent>
            <CardActions className={classes.cardContent}>
                <Button
                size="small"
                href="https://www.linkedin.com/in/sean-naleid/"
                target="_blank"
                rel="noreferrer"
                className={classes.button}
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

export default About;
