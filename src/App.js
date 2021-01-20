import React, {useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import {colorz} from "./components/colors.js"

// components
import Navbar from "./components/navbar.js";
import Home from "./components/home.js";
import About from "./components/about.js";
import Work from "./components/work.js";
// import Projects from "./components/projects.js";
// import Designs from "./components/designs.js"
import Contact from "./components/contact.js";
import Footer from "./components/footer.js";

function App() {
  const [colors, setColors] = useState(colorz[0])
  // console.log("App colors", colors);

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.background = colors.body;
  }, [colors])

  const handleChangeColors = () => {
    let num = Math.floor(Math.random()*Math.floor(11));
    setColors(colorz[num])
  }

  return (
    <div className="App" onClick={handleChangeColors}>
      <Navbar colors={colors}/>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} colors={colors}/>}/>
        <Route path="/about" render={props => <About {...props} colors={colors}/>}/>
        <Route path="/work/projects" render={props => <Work {...props} colors={colors}/>}/>
        {/* <Route path="/work/projects" render={props => <Projects {...props} colors={colors}/>}/>
        <Route path="/work/designs" render={props => <Designs {...props} colors={colors}/>}/> */}
        <Route path="/contact" render={props => <Contact {...props} colors={colors}/>}/>
      </Switch>
      <Footer colors={colors}/>
    </div>
  );
}

export default App;
