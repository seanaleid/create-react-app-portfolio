import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Hidden from '@material-ui/core/Hidden';
import withWidth from "@material-ui/core/withWidth";

// UI challenge components

const useStyles = makeStyles({
    box: {
    margin: "0 auto",
    maxWidth: "1000px",
    },
    role: {
      fontFamily: "Roboto",
      fontWeight: "1000",
      display: "flex",
      justifyContent: "flex-end",
      width: "300px",
    },
});

const Designs = ({ colors }) => {
  const classes = useStyles();

  // const [hover, setHover] = useState(false);
  // const [hoverId, setHoverId] = useState(null);

  return (
    <React.Fragment>
        <Container className={classes.box}>
        <Container className={classes.cardContainer}>
          <Card className={classes.card}>
              <CardContent style={{ backgroundColor: `${colors.body}`}}>
                <Typography variant="h5" className={classes.pos} style={{color:`${colors.text}`}}>
                  UNDER CONSTRUCTION 
                </Typography>
                </CardContent>
          </Card>
          {/* <Card className={classes.card}>
             <CardContent style={{ backgroundColor: `${colors.body}`}}>
               <Typography variant="h5" className={classes.pos} style={{color:`${colors.text}`}}>
                 NASA API Key
               </Typography>
               <div className={classes.image1}></div>
               <Typography className={classes.pos} style={{color:`${colors.text}`}}>
               The purpose of this project is to showcase NASA&#39;s Picture of the Day. Therefore, I have prioritized the image set to the background by making the calendar and accompanying description almost completely see-through. You can read the text by moving the mouse over the text.
               </Typography>
               <Typography className={classes.pos} style={{color:`${colors.text}`}}>
               NASA has provided software engineers various Application Programming Interfaces (APIs) to practice with. In order to gain access to these APIs, we must request a unique API key. With this key, we make a request to the API and in the response, we receive an object that has the image, title, description, credit, etc. Through some basic JavaScript and CSS, I have taken the image that comes in the response and set it to the background. This specific API has images stored for every day of the year going all the way back to July 16th, 1995.
               </Typography>
             </CardContent>
             <CardActions style={{ backgroundColor: `${colors.body}`}} className={classes.bottom}>
               <div>
                 <Button
                  size="small"
                  href="https://nasa-apikey.netlify.app/"
                  id="project1"
                  target="_blank"
                  rel="noreferrer"
                  className={classes.button}
                  onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
                  onMouseLeave={() => {setHover(false)}}
                  style={{
                    color: (hover && hoverId === "project1" ? `${colors.hoverText}` : `${colors.text}`),
                    backgroundColor: (hover &&  hoverId === "project1"? `${colors.projects}` : `${colors.body}`),
                  }}
                >
                  Visit Site
                </Button>
                <Button
                  size="small"
                  href="https://github.com/WEB27-practice/NASA-API-Photos"
                  id="project1Code"
                  target="_blank"
                  rel="noreferrer"
                  className={classes.button}
                  onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
                  onMouseLeave={() => {setHover(false)}}
                  style={{
                    color: (hover && hoverId === "project1Code" ? `${colors.hoverText}` : `${colors.text}`),
                    backgroundColor: (hover &&  hoverId === "project1Code"? `${colors.projects}` : `${colors.body}`),
                  }}
                >
                  View Code
                </Button>
              </div>
              <Typography variant="h6" className={classes.role} style={{color:`${colors.text}`}}>
                ROLE: Coder and Designer
              </Typography>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardContent style={{ backgroundColor: `${colors.body}`}}>
              <Typography variant="h5" className={classes.pos} style={{color:`${colors.text}`}}>
                Computer Science - Conway&#39;s Game of Life
              </Typography>
              <div className={classes.image2}></div>
              <Typography className={classes.pos} style={{color:`${colors.text}`}}>
                Sean&#39;s Game of Life is an implementation of John Horton Conway&#39;s Game of Life written in React. This version of Conway&#39;s Game of Life takes advantage of hooks to handle state for the app. In the project, I apply Immer&#39;s built-in default function, &#39;produce&#39;, to manage double-buffering when the grid switches from one generation to another. Additionally, each generation is saved in a cache so that a player can easily view previous boards after the animation has started and been paused.
              </Typography>
            </CardContent>
            <CardActions style={{ backgroundColor: `${colors.body}`}} className={classes.bottom}>
              <div>
                <Button
                  size="small"
                  href="https://seans-game-of-life.netlify.app/"
                  id="project2"
                  target="_blank"
                  rel="noreferrer"
                  className={classes.button}
                  onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
                  onMouseLeave={() => {setHover(false)}}
                  style={{
                    color: (hover && hoverId === "project2" ? `${colors.hoverText}` : `${colors.text}`),
                    backgroundColor: (hover &&  hoverId === "project2"? `${colors.projects}` : `${colors.body}`),
                  }}
                >
                  Visit Site
                </Button>
                <Button
                  size="small"
                  href="https://github.com/seanaleid/cs-build-week-1"
                  id="project2Code"
                  target="_blank"
                  rel="noreferrer"
                  className={classes.button}
                  onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
                  onMouseLeave={() => {setHover(false)}}
                  style={{
                    color: (hover && hoverId === "project2Code" ? `${colors.hoverText}` : `${colors.text}`),
                    backgroundColor: (hover &&  hoverId === "project2Code"? `${colors.projects}` : `${colors.body}`),
                  }}
                >
                  View Code
                </Button>
              </div>
              <Typography variant="h6" className={classes.role} style={{color:`${colors.text}`}}>
                ROLE: Coder and Designer
              </Typography>
            </CardActions>
          </Card> */}
        </Container>
      </Container>
    </React.Fragment>
  );
};

Designs.propTypes = {
  colors: PropTypes.object,
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(Designs);