import { Suspense, lazy, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Loading from "../src/components/Loading/Loading";

const Home = lazy(() => import("./Home"));

const About = lazy(() => import("./about.js"));

const Project1 = lazy(() => import("./project1.js"));

const Project2 = lazy(() => import("./project2.js"));

const NotFound = lazy(() => import("./NotFound"));

export default function Routes() {
  const location = useLocation();

  useEffect(() => {
    function trackLoc() {
      window.dataLayer.push({
        event: "pageview",
        page: {
          url: location.pathname,
        },
      });
    }

    trackLoc();
  }, [location]);

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/about" render={(props) => <About {...props} />} />
        <Route
          exact
          path="/project1"
          render={(props) => <Project1 {...props} />}
        />
        <Route
          exact
          path="/project2"
          render={(props) => <Project2 {...props} />}
        />

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
}
