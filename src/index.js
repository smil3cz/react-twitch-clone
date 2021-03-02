import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./components/App/App";

const rootElement = document.querySelector("#root");

ReactDOM.render(<App />, rootElement);
