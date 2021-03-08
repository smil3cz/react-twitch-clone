import React from "react";
import { Route, Router } from "react-router-dom";

import StreamCreate from "../streams/StreamCreate";
import StreamEdit from "../streams/StreamEdit";
import StreamDelete from "../streams/StreamDelete";
import StreamList from "../streams/StreamList";
import StreamShow from "../streams/StreamShow";
import Header from "../Header/Header";
import history from "../../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/create" component={StreamCreate} />
          <Route path="/streams/edit/:id" component={StreamEdit} />
          <Route path="/streams/delete" component={StreamDelete} />
          <Route path="/streams/show" component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
