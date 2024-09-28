import React, {useState} from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import withWidth from '@material-ui/core/withWidth';
import Avatar from '@material-ui/core/Avatar';
import CallMade from '@material-ui/icons/CallMade';

// import font styles
import { fontStyles } from "../utils/fontStyle.js";

const useStyles = makeStyles({
  projectContainer: {
    border: "1px solid pink",
    display: "flex",
    marginBottom: "3rem", 
    padding: '1rem',
    borderRadius: "10px"
  },
  projectLeftContainer: {
    maxWidth: "30%",
    border: "1px solid blue",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: "11.93rem",
    width: "16.43rem",
    borderRadius: "0.5rem",
    margin: "1rem 0rem 0rem 0rem"
  },
  projectTitleBar: {
    display: "flex",
  },
  avatarDownload: {
    display: "block",
    backgroundColor: "transparent"
  },
  iconDownload: {
    height: "1rem",
    width: "1rem",
    transform: "translate(0px, 8px)"
  },
  year: {
    marginTop: "1.2rem",
    fontFamily: `${fontStyles.text}`,
    textAlign: "justify",
  },
  projectRightContainer: {
    maxWidth: "70%",
    border: "1px solid green",
  },
  thumbnailClass: {
    height: "10rem",
    width: "16rem",
    border: '1px solid green'
  }
});

const ProjectCard = (props) => {
  const [hover, setHover] = useState(false);
  const [hoverId, setHoverId] = useState(null);
  
  const classes = useStyles();
  const {colors, details} = props;
  
  console.log('details inside the project cards', props)

  return (
    <React.Fragment>
      <Container className={classes.projectContainer}>
        <Container className={classes.projectLeftContainer}>
          <img className={classes.thumbnailClass} src={details.thumbnail}/>
        </Container>
        <Container className={classes.projectRightContainer}>
          <div className={classes.projectTitleBar}>
            <Typography 
              id="projectTitle" 
              onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
              onMouseLeave={() => {setHover(false)}} 
              variant="h6">{details.title}</Typography>
            <Avatar 
            variant="square" 
            className={classes.avatarDownload} 
            style={{backgroundColor: `${colors.text}`}}
            >
              <CallMade  
                className={classes.iconDownload} 
                style={{
                  color: `${colors.primary}`,
                  transform: (hover && hoverId === 'projectTitle' ? "scaleX(1) translate(0px, 8px)" : null),
                }}
              />
            </Avatar>
          </div>
        </Container>        
      </Container>
    </React.Fragment>
  );
};

ProjectCard.propTypes = {
  details: PropTypes.object,
  colors: PropTypes.object,
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(ProjectCard);