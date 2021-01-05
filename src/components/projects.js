import React, {useState} from "react";
import PropTypes from "prop-types";
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
    fontWeight: "1000",
    fontFamily: "Fjalla one",
    marginTop: "3rem",
    marginBottom: "3rem",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    paddingBottom: "50px",
    justifyContent: "center"
  },
  cardContent: {
    background: "#FAFAFA",
  },
  card: {
    width: "100%",
    margin: "20px",
    boxShadow: "none",
    '&:hover': {
      transitionDelay: "150ms",
      transitionTimingFunction: "ease-in-out",
      boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    }
  },
  image1: {
    background: `url(https://kobalt-pics.s3.amazonaws.com/developer/Screen+Recording+2020-12-30+at+10.58.03+PM.gif)`,
    backgroundOrigin: "content-box",
    backgroundSize: "100% auto",
    position: "right",
    width: "100%",
    height: "400px",
    marginBottom: "1rem",
  },
  image2: {
    background: `url(https://kobalt-pics.s3.amazonaws.com/developer/seans-game-of-life.gif)`,
    backgroundOrigin: "content-box",
    backgroundSize: "100% auto",
    position: "right",
    width: "100%",
    height: "400px",
    marginBottom: "1rem",
  },
  link: {
    textDecoration: "none",
  },
  bottom:{
    justifyContent: "space-between",
  },
  pos: {
    fontFamily: "Roboto",
    marginBottom: "1rem",
    textAlign: "justify",
  },
  role: {
    fontFamily: "Roboto",
    fontWeight: "1000",
    display: "flex",
    justifyContent: "flex-end",
    width: "300px",
  },
  button: {
    fontFamily: "Roboto",
    fontWeight: "1000",
    '&:hover': {
      transitionDelay: "100ms",
      transitionTimingFunction: "ease-in-out",
      backgroundColor: "#ff1493",
    }
  }
});

const Projects = ({colors}) => {
  const classes = useStyles();

  const [hover, setHover] = useState(false);
  const [hoverId, setHoverId] = useState(null);

  return (
    <React.Fragment>
      <Container className={classes.box}>
        <Typography variant="h1" className={classes.title} style={{ color: `${colors.projects}`}}>
          Projects
        </Typography>
        <Container className={classes.cardContainer}>
          <Card className={classes.card}>
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
              <Typography variant="h7" className={classes.role} style={{color:`${colors.text}`}}>
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
                Sean&#39;s Game of Life is an implementation of John Horton Conway&#39;s Game of Life written in React. This version of Conway&#39;s Game of Life takes advantage of hooks to handle state for the app. In the project, I apply Immer&#39;s built-in default function, &#39;produce&#39;, to manage double-buffering when the grid switches from one generation to another.
                Additionally, each generation is saved in a cache so that a player can easily view previous boards after the animation has started and been paused.
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
              <Typography variant="h7" className={classes.role} style={{color:`${colors.text}`}}>
                ROLE: Coder and Designer
              </Typography>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardContent style={{ backgroundColor: `${colors.body}`}}>
              <Typography variant="h5" className={classes.pos} style={{color:`${colors.text}`}}>
                Project 3
              </Typography>
              <Typography className={classes.pos} style={{color:`${colors.text}`}}>
              Vivamus bibendum, felis ac gravida consectetur, dui turpis dapibus erat, nec tristique augue quam at dui. Vestibulum non elit sapien. Nunc sit amet posuere mauris. Maecenas elementum pellentesque eleifend. In blandit augue quis euismod sollicitudin. Fusce vitae ante a tortor tempus hendrerit. Morbi vel elementum erat. Curabitur nec quam maximus, pellentesque eros sit amet, consectetur turpis. Cras mollis leo at dolor semper, ut laoreet est gravida. Ut ac efficitur nibh. Ut finibus nunc velit, eu tincidunt arcu cursus quis. In vel purus turpis. Etiam lorem lectus, aliquet vitae tellus vitae, mattis ultrices mauris. Integer blandit ante diam, eu tincidunt est pulvinar et. Fusce nec viverra ex. Praesent vehicula odio nunc, a fringilla sapien finibus vitae.
              </Typography>
            </CardContent>
            <CardActions style={{ backgroundColor: `${colors.body}`}}>
              <Button
                size="small"
                href="#"
                id="project3"
                target="_blank"
                rel="noreferrer"
                className={classes.button}
                onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
                onMouseLeave={() => {setHover(false)}}
                style={{
                  color: (hover && hoverId === "project3" ? `${colors.hoverText}` : `${colors.text}`),
                  backgroundColor: (hover &&  hoverId === "project3"? `${colors.projects}` : `${colors.body}`),
                }} 
              >
                Visit Site
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardContent style={{ backgroundColor: `${colors.body}`}}>
              <Typography variant="h5" className={classes.pos} style={{color:`${colors.text}`}}>
                Project 4
              </Typography>
              <Typography className={classes.pos} style={{color:`${colors.text}`}}>
              In eget nisi turpis. Cras eget ex dapibus, sollicitudin nunc eu, efficitur orci. Vivamus sed ullamcorper massa. Pellentesque diam diam, lobortis in augue in, laoreet lacinia velit. Donec interdum nec lectus dictum finibus. Phasellus condimentum gravida suscipit. Maecenas pharetra velit vel sollicitudin pretium. Mauris magna tellus, fringilla eu libero at, aliquet congue orci. Suspendisse volutpat, sem nec mollis gravida, arcu purus suscipit felis, sed ullamcorper metus purus eget sem.
              </Typography>
            </CardContent>
            <CardActions style={{ backgroundColor: `${colors.body}`}}>
              <Button
                size="small"
                href="#"
                id="project4"
                target="_blank"
                rel="noreferrer"
                className={classes.button}
                onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
                onMouseLeave={() => {setHover(false)}}
                style={{
                  color: (hover && hoverId === "project4" ? `${colors.hoverText}` : `${colors.text}`),
                  backgroundColor: (hover &&  hoverId === "project4"? `${colors.projects}` : `${colors.body}`),
                }} 
              >
                Visit Site
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardContent style={{ backgroundColor: `${colors.body}`}}>
              <Typography variant="h5" className={classes.pos} style={{color:`${colors.text}`}}>
                Project 5
              </Typography>
              <Typography className={classes.pos} style={{color:`${colors.text}`}}>
              Phasellus euismod lacinia nisi, id viverra ex venenatis eget. Sed accumsan ligula eu sem facilisis, a dignissim quam malesuada. Donec in enim quis ligula facilisis consectetur eu eu nibh. Donec lacus eros, interdum a erat vitae, scelerisque pulvinar mauris. Donec tempus sem ac tincidunt lacinia. Vivamus mollis nisi orci, eget sagittis felis luctus at. Praesent sit amet egestas turpis. Phasellus dictum ante euismod, rutrum nisl nec, volutpat lectus. Phasellus vitae eros est. Etiam iaculis, libero sit amet sodales molestie, libero leo laoreet nibh, tincidunt vulputate dolor enim ut ipsum. Fusce aliquam dictum auctor. Sed sed est ligula. Morbi eu felis quam.
              </Typography>
            </CardContent>
            <CardActions style={{ backgroundColor: `${colors.body}`}}>
              <Button
                size="small"
                href="#"
                id="project5"
                target="_blank"
                rel="noreferrer"
                className={classes.button}
                onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
                onMouseLeave={() => {setHover(false)}}
                style={{
                  color: (hover && hoverId === "project5" ? `${colors.hoverText}` : `${colors.text}`),
                  backgroundColor: (hover &&  hoverId === "project5"? `${colors.projects}` : `${colors.body}`),
                }} 
              >
                Visit Site
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardContent style={{ backgroundColor: `${colors.body}`}}>
                <Typography variant="h5" className={classes.pos} style={{color:`${colors.text}`}}>
                  Project 6
                </Typography>
                <Typography className={classes.pos} style={{color:`${colors.text}`}}>
                Praesent egestas ligula quis mi accumsan, sed euismod odio dapibus. Pellentesque pretium orci id turpis efficitur dictum. Etiam vitae augue velit. Sed auctor tellus dui, a eleifend mi vehicula nec. Phasellus sagittis ut augue nec rhoncus. Sed sagittis tincidunt mi, non malesuada purus interdum quis. Etiam porttitor neque non augue aliquam, venenatis finibus sem ultricies. Etiam et leo accumsan libero porta dictum. Nulla mollis rutrum urna id laoreet. Proin ut porta enim. Nullam sagittis enim libero, id sodales lacus malesuada eu. Suspendisse sed mauris et nunc commodo porttitor.
                </Typography>
            </CardContent>
            <CardActions style={{ backgroundColor: `${colors.body}`}}>
                <Button
                size="small"
                href="#"
                id="project6"
                target="_blank"
                rel="noreferrer"
                className={classes.button}
                onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
                onMouseLeave={() => {setHover(false)}}
                style={{
                  color: (hover && hoverId === "project6" ? `${colors.hoverText}` : `${colors.text}`),
                  backgroundColor: (hover &&  hoverId === "project6"? `${colors.projects}` : `${colors.body}`),
                }} 
              >
                Visit Site
              </Button>
            </CardActions>
          </Card>
        </Container>
      </Container>
    </React.Fragment>
  );
};

Projects.propTypes = {
  colors: PropTypes.object,
}

export default Projects;
