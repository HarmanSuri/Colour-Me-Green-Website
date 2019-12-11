import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import frontInfo from "./components/frontInfo";
function App() {
  return (
    <Router>
      <div className='App'>
        <div className='container'>
          <Navbar />
          <Route path='/' component={frontInfo} />
        </div>
      </div>
    </Router>
  );
}

export default App;
