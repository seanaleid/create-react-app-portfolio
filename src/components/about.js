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
  button: {
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
        <Typography variant="h4" className={classes.subtitle}>
          A multifaceted software developer, problem solver, leader, educator,
          and designer.
        </Typography>
        <Typography variant="h6" className={classes.text}>
          Half and half, body aroma aged crema, body crema grinder espresso
          americano at instant.
        </Typography>
        <Typography variant="h6" className={classes.text}>
          Café au lait, latte café au lait, white id irish foam that black
          seasonal. Doppio et, in whipped a, affogato brewed instant crema
          robust. Extraction cup in, strong and roast mazagran irish sugar
          crema. So mazagran, pumpkin spice, latte, extraction cup, shop
          percolator chicory espresso aged.
        </Typography>
        <Typography variant="h6" className={classes.text}>
          Half and half dripper est and, foam wings in a, as, sweet robusta
          roast brewed, id cortado, filter americano galão java coffee caffeine.
          Percolator cream, strong extra, froth extraction, ut decaffeinated
          roast lungo carajillo grinder saucer, beans lungo iced and galão. In
          body, con panna, grounds robusta caramelization black seasonal
          affogato, ristretto, mazagran carajillo java, bar decaffeinated,
          filter seasonal organic doppio cortado trifecta. To go, as espresso
          coffee extraction, robusta organic half and half grounds aroma doppio,
          decaffeinated, viennese, shop foam white grinder extra foam.
        </Typography>
        <Typography variant="h2" className={classes.title}>
          Recommendations
        </Typography>
        <Container className={classes.cardContainer}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h5" component="h2">
                Erik R.
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
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
              <Typography variant="h5" component="h2">
                Josue R.
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
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
              <Typography variant="h5" component="h2">
                Luis P.
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
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
              <Typography variant="h5" component="h2">
                William R.
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
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
              <Typography variant="h5" component="h2">
                Carl S.
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
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
                <Typography variant="h5" component="h2">
                    Brandon H.
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
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
