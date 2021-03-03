import React from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      PageOne<Link to="/pagetwo">Navigate to Page Two</Link>
    </div>
  );
};
const PageTwo = () => {
  return (
    <div>
      PageTwo<Link to="/">Navigate to Page One</Link>
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
