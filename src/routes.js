import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./Home"));

const About = lazy(() => import("./about.js"))

const Project1 = lazy(() => import("./project1.js"));


export default function Routes() {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/about" render={(props) => <About {...props}/>}/>
          <Route exact path="/project1" render={(props) => <Project1 {...props} />} />
          
          <Route>
            <p>404</p>
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}
