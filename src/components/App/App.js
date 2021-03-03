import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

const PageOne = () => {
  return <div>PageOne</div>;
};
const PageTwo = () => {
  return (
    <div>
      PageTwo<button>Click Me!</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
      </Router>
    </div>
  );
};

export default App;
