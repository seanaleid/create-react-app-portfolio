import React, {useState, useEffect} from "react";
import {  Route } from "react-router-dom";
import "./App.css";
import {colorz} from "./components/colors.js"

import { makeStyles } from "@material-ui/core/styles";
// import Avatar from '@material-ui/core/Avatar';

// components
import Navbar from "./components/navbar.js";
import Home from "./components/home.js";
import About from "./components/about.js";
import Projects from "./components/projects.js";
import Contact from "./components/contact.js";
import ContrastIcon from '@mui/icons-material/Contrast';
// import Footer from "./components/footer.js";

// fonts
import "./fonts/ValkyRegular.ttf";

const useStyles = makeStyles((theme) => ({
    "@keyframes turn": {
      "from": {
        transform: "rotate(0deg)"
      },
      "to": {
        transform: "rotate(180deg)"
      }
    },
    layout: {
      background: "rgba(251, 226, 161, 1)",
      display: "flex",
      marginBottom: "0px",
    }, 
    iconBox: {
      height: "8rem",
      width: "8rem",
      // border: "1px solid blue",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "1100"
    },
    icon: {
      color: 'rgba(64, 1, 30, 1)',
      animationDuration: "1s",
      animationName: "turn"
      // border: "1px solid red",
    },
    dotLeft: {
      height: "1000px",
      width: "1000px",
      borderRadius: "50%",
      position: "absolute",
      bottom: "-35%",
      left: "-20%",
      background: "radial-gradient(circle, rgba(226,97,56,0.8) 0%, rgba(226,97,56,0.4) 40%, rgba(226,97,56,0) 100%)",
      boxShadow: "0px 0px 20px 20px rgba(226,97,56,0.2)"
    },
    dotRight: {
      height: "750px",
      width: "750px",
      borderRadius: "50%",
      position: "absolute",
      top: "-10%",
      right: "-2%",
      background: "radial-gradient(circle, rgba(176,241,76,0.8) 0%, rgba(176,241,76,0.6) 60%, rgba(176,241,76,0) 80%)",
      boxShadow: "0px 0px 20px 20px rgba(176,241,76,0.2)",
    }
  })  
);

function App() {
  const [colors] = useState(colorz[0])
  const [degrees] = useState('0deg');
  const classes = useStyles();

  useEffect(() => {
    const circle = document.getElementById('iconId');
    circle.style.transform = "rotate(`${degrees}`)";
  }, [colors, degrees])

  // const handleChangeColors = () => {
  //   let num = Math.floor(Math.random()*Math.floor(11));
  //   setColors(colorz[num])
  // }

  const rotateMode = () => {
    // e.preventDefault();
    // degrees > 0 ? SetDegrees(180) : SetDegrees(0);
    // if(degrees > 0){
    //   setDegrees('180deg') 
    // } else {
    //   setDegrees('0deg');
    // }
    console.log("Hi I worked");
  }

  return (
    <div className={classes.layout} >
      {/* <div className={classes.one}>1</div>
      <div className={classes.two}>2</div>
      <div className={classes.three}>3</div> */}
      <Navbar className={classes.layer} colors={colors}/>
      {/* <Switch> */}
        <Route exact path="/" render={props => <Home {...props} colors={colors}/>}/>
        <Route path="/about" render={props => <About {...props} colors={colors}/>}/>
        <Route path="/projects" render={props => <Projects {...props} colors={colors}/>}/>
        <Route path="/blog" render={props => <Contact {...props} colors={colors}/>}/>
      <div className={classes.iconBox} onClick={rotateMode}>
        <ContrastIcon 
          className={classes.icon} 
          sx={{width: "2.5rem", height: "2.5rem"}}
          id="iconId"
        />
      </div>
      <span className={classes.dotLeft}/>
      <span className={classes.dotRight}/>
      {/* </Switch> */}
      {/* <CloseIcon /> */}
      {/* <Footer colors={colors}/> */}
    </div>
  );
}

export default App;
