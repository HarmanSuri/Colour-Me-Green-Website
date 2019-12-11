import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='container'>
          <Route path='/' component={Navbar} />
        </div>
      </div>
    </Router>
  );
}

export default App;
