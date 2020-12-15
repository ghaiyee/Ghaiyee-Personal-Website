import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./Home"));

export default function Routes() {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />

          <Route>
            <p>404</p>
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}