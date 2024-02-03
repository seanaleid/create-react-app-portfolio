import React, {useState, useEffect} from "react";
import {  Route } from "react-router-dom";
import "./App.css";
import {colorz} from "./components/colors.js"

import { makeStyles } from "@material-ui/core/styles";

// components
import Navbar from "./components/navbar.js";
import Home from "./components/home.js";
import About from "./components/about.js";
import Projects from "./components/projects.js";
import Contact from "./components/contact.js";
// import Footer from "./components/footer.js";

// fonts
import "./fonts/ValkyRegular.ttf";

const useStyles = makeStyles((theme) => ({
    layout: {
      // background: "blue",
      display: "flex",
    }
  })  
);

function App() {
  const [colors, setColors] = useState(colorz[0])
  
  const classes = useStyles();

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.background = colors.body;
  }, [colors])

  const handleChangeColors = () => {
    let num = Math.floor(Math.random()*Math.floor(11));
    setColors(colorz[num])
  }

  return (
    <div className={classes.layout} onClick={handleChangeColors}>
      {/* <div className={classes.one}>1</div>
      <div className={classes.two}>2</div>
      <div className={classes.three}>3</div> */}
      <Navbar colors={colors}/>
      {/* <Switch> */}
        <Route exact path="/" render={props => <Home {...props} colors={colors}/>}/>
        <Route path="/about" render={props => <About {...props} colors={colors}/>}/>
        <Route path="/projects" render={props => <Projects {...props} colors={colors}/>}/>
        <Route path="/blog" render={props => <Contact {...props} colors={colors}/>}/>
      {/* </Switch> */}
      {/* <Footer colors={colors}/> */}
    </div>
  );
}

export default App;
