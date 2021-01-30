import React from "react";
import ReactDOM from "react-dom";
import TagManager from "react-gtm-module";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";

const GTM_ID = "GTM-MSS48J4";

TagManager.initialize({
  gtmId: GTM_ID,
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
