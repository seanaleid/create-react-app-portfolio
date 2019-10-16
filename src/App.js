import React from 'react';
import './App.css';

//Components
import WelcomePage from "./components/pages/WelcomePage";
import MyStory from "./components/pages/MyStory";
import Skills from "./components/pages/Skills";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

//Routes 
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={WelcomePage}/>
        <Route path="/my-story" component={MyStory}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
    </div>
  );
}

export default App;
