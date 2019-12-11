import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

import Navbar from "./components/Navbar";
import frontInfo from "./components/frontInfo";
import lifestyleChanges from "./components/lifestyleChanges";
import Recycling from "./components/Recycling";
import Charity from "./components/Charity";
import climateChangeEvents from "./components/climateChangeEvents";

function App() {
  return (
    <Router>
      <div
        className='App'
        style={{ backgroundColor: "#00cc66", color: "white" }}
      >
        <div className='container'>
          <Navbar />
          <Route path='/' component={frontInfo} />
          <lifestyleChanges />
          <Recycling />
          <Charity />
          <climateChangeEvents />
        </div>
      </div>
    </Router>
  );
}

export default App;
