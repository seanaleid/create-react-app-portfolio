import React, {useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import {colorz} from "./components/colors.js"

// components
import Navbar from "./components/navbar.js";
import Home from "./components/home.js";
import About from "./components/about.js";
import Projects from "./components/projects.js";
import Contact from "./components/contact.js";
import Footer from "./components/footer.js";

function App() {
  // console.log(colors);
  const [colors, setColors] = useState(colorz[0])
  console.log("App colors", colors);

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.background = colors.body;
  }, [colors])

  const handleChangeColors = () => {
    let num = Math.floor(Math.random()*Math.floor(2));
    setColors(colorz[num])
  }

  return (
    <div className="App" onClick={handleChangeColors}>
      <Navbar colors={colors} />
      <Switch>
        {/* <Route exact path="/" component={Home} colors={colors}/> */}
        <Route exact path="/" render={props => <Home {...props} colors={colors}/>}/>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
