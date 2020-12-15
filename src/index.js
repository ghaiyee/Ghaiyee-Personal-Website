import React from "react";
import ReactDOM from "react-dom";
import TagManager from "react-gtm-module";

import Routes from "./routes";

const GTM_ID = "GTM-MSS48J4";

TagManager.initialize({
  gtmId: GTM_ID,
});

ReactDOM.render(<Routes />, document.getElementById("root"));
