import React, {useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// import {colorz} from "./components/colors.js"
import { makeStyles } from "@material-ui/core/styles";

// components
import Navbar from "./components/navbar.js";
import Home from "./components/home.js";
import About from "./components/about.js";
import Projects from "./components/projects.js";
import Blog from "./components/blog.js";
import ContrastIcon from '@mui/icons-material/Contrast';

// fonts
import "./fonts/ValkyRegular.ttf";

//styles
import { siteStyles } from "./utils/siteStyle.js";

const useStyles = makeStyles((theme) => ({
    layout: {
      display: "flex",
      overflow: "clip"
    }, 
    iconBox: {
      height: "8rem",
      width: "8rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "1100",
    },
    icon: {
      color: 'rgba(64, 1, 30, 1)',
      cursor: "pointer"
    },
    cut: {
      height: "500px",
      width: "1000px", 
      position: "absolute",
      bottom: "0%",
      left: "-20%",
      overflow: "hidden",
      padding: "2rem"
    },
    dotLeft: {
      height: "1000px",
      width: "1000px",
      position: "inherit",
      right: "5%",
      borderRadius: "50%"
    },
    dotRight: {
      height: "750px",
      width: "750px",
      borderRadius: "50%",
      position: "absolute",
      top: "-10%",
      right: "-2%"
    }
  })  
);

function App() {
  const [colors, setColors] = useState(siteStyles[0])
  const [degrees, setDegrees] = useState('0deg');
  const classes = useStyles();

  useEffect(() => {
    const circle = document.getElementById('iconId');
    circle.style.transform = "rotate(`${degrees}`)";
  }, [colors, degrees])

  const rotateMode = (e) => {
    e.preventDefault();
    degrees === '0deg' ? setDegrees('180deg') : setDegrees('0deg');
    colors === siteStyles[0] ? setColors(siteStyles[1]) : setColors(siteStyles[0])
  }

  return (
    <div className={classes.layout} 
      style={{"background":`${colors.background}`}}
    >
      <Navbar className={classes.layer} colors={colors}/>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} colors={colors}/>}/>
        <Route path="/about" render={props => <About {...props} colors={colors}/>}/>
        <Route path="/projects" render={props => <Projects {...props} colors={colors}/>}/>
        <Route path="/blog" render={props => <Blog {...props} colors={colors}/>}/>
      </Switch>
      <div className={classes.iconBox} 
        onClick={rotateMode}
      >
        <ContrastIcon 
          className={classes.icon} 
          sx={{width: "2.5rem", height: "2.5rem"}}
          id="iconId"
          style={{transform: `rotate(${degrees})`,
            "color":`${colors.primary}`
          }}
        />
      </div>
      <div className={classes.cut}>
        <div className={classes.dotLeft}
          style={{background: `${colors.leftRadial}`,
          boxShadow: `${colors.leftShadow}`
          }}
        />
      </div>
      <span className={classes.dotRight}
        style={{background: `${colors.rightRadial}`,
          boxShadow: `${colors.rightShadow}`,
        }}
      />
    
    </div>
  );
}

export default App;
