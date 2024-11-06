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
    display: "flex",
    marginBottom: "1.5rem", 
    padding: '1rem',
    borderRadius: "10px"
  },
  projectLeftContainer: {
    maxWidth: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topImgBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
  },
  bottomImgBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '5rem'
  },
  chipClass: {
    width: "3rem",
    height: '1rem',
    marginRight: '1rem',
  },
  image: {
    height: "11.93rem",
    width: "16.43rem",
    borderRadius: "0.5rem",
    margin: "1rem 0rem 0rem 0rem"
  },
  projectDuration: {
    fontFamily: `${fontStyles.text}`,
  },
  projectTitleBar: {
    display: "flex",
  },
  avatarDownload: {
    display: "block",
    backgroundColor: "transparent",
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
  },
  projectDescription: {
    // border: '1px solid pink',
    
  },
  projectDescriptionInner: {
    textAlign: 'justify',
  },
  thumbnailClass: {
    height: "10rem",
    width: "16rem",
    margin: "0rem 0rem 1rem 0rem"
  }
});

const ProjectCard = (props) => {
  const [hover, setHover] = useState(false);
  const [hoverId, setHoverId] = useState(null);
  
  const classes = useStyles();
  const {colors, details} = props;
  // const projectRoles = [...details.roles];
  
  console.log('details inside the project cards', props);
  // console.log('roles inside the project cards', Array.isArray(details.roles));
  console.log('projectRoles inside the project cards', details['roles']);

  return (
    <React.Fragment>
      <Container 
        id='projectCard'
        className={classes.projectContainer}
        onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
        onMouseLeave={() => {setHover(false)}} 
        style={{
          backgroundColor:(hover && hoverId === 'projectCard' ? `${colors.hover}` : null),
          cursor: (hover && hoverId === 'projectCard' ? "pointer" : null),
        }}
      >
        <Container className={classes.projectLeftContainer}>
          <div className={classes.topImgBox}>
            <img className={classes.thumbnailClass} src={details.thumbnail}/>
            <Typography className={classes.projectDuration} style={{"color": `${colors.primary}`}}>{details.duration}</Typography>
          </div>
          <div className={classes.bottomImgBox}>
            {details['roles'].map((x, i) => {
              console.log('roles here: ', x);
              return <Typography className={classes.projectRole} variant="h6" key={x} style={{"color": `${colors.primary}`}}>{x}</Typography>
            })}
          </div>
        </Container>
        <Container className={classes.projectRightContainer}>
          <div 
            id="projectTitle" 
            className={classes.projectTitleBar}
            onMouseEnter={(e) => {setHover(true), setHoverId(e.target.id)}}
            onMouseLeave={() => {setHover(false)}} 
          >
            <a href={`${details.demo}`}
              style={{
                fontSize: "24px",
                color:`${colors.primary}`,
                textDecoration: (hover && hoverId === 'projectTitle' ? `underline` : null),
                textDecorationColor: `${colors.primary}` ,
                cursor: (hover && hoverId === 'projectTitle' ? "pointer" : null),
                fontWeight: (hover && hoverId === 'projectTitle' ? "800" : null),
              }}
              rel="noreferrer"
              target="_blank"
            >
            <Typography 
              id="projectTitle" 
              variant="h6"
              
              >{details.title}</Typography></a>
            <Avatar 
            variant="square" 
            className={classes.avatarDownload} 
            style={{backgroundColor: `${colors.text}`}}
            >
              <CallMade  
                className={classes.iconDownload} 
                style={{
                  color: `${colors.primary}`,
                  transform: (hover && hoverId === 'projectTitle' ? "scaleX(1) translate(18px, 0px)" : null),
                }}
              />
            </Avatar>
          </div>
          <div className={classes.projectDescription}>
            {/* {details.description.map((x,i) => {
              <Typography key={`${i}`}>{x[i]}</Typography>
            })} */}
            <Typography className={classes.projectDescriptionInner} style={{"color": `${colors.primary}`}}>{details.description}</Typography>
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