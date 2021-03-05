import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import StreamCreate from "../streams/StreamCreate";
import StreamEdit from "../streams/StreamEdit";
import StreamDelete from "../streams/StreamDelete";
import StreamList from "../streams/StreamList";
import StreamShow from "../streams/StreamShow";
import Header from "../Header/Header";

const App = () => {
  return (
    <div className="ui container">
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/create" component={StreamCreate} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/delete" component={StreamDelete} />
          <Route path="/streams/show" component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
