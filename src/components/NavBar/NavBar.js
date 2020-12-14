import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Container,
  AppBar,
  Box,
  Button,
  Toolbar,
  Hidden,
  Drawer,
  IconButton,
  makeStyles,
  Typography,
  MenuItem,
  Grid,
} from "@material-ui/core";

import About from "../About/About";
import Works from "../Works/Works";

const useStyles = makeStyles(() => ({
  root: {
    padding: "5px",
    backgroundColor: "#FDFFFC",
  },

  logo: {
    height: 50,
    width: "auto",
  },

  menu: {
    textDecoration: "none",
    color: "#191924",
    fontFamily: "Libre Baskerville",
    fontSize: 16,
    fontWeight: 500,
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <Router>
      <div>
        <AppBar className={classes.root}>
          <Toolbar>
            <Grid container>
              <Grid item xs={10} md={10}>
                <Link to="/">
                  <img src="ghaiyee-logo.png" className={classes.logo} />
                </Link>
              </Grid>
              <Grid item xs={1} md={1}>
                <Link to="/about" className={classes.menu}>
                  About
                </Link>
              </Grid>
              <Grid item xs={1} md={1}>
                <Link to="/works" className={classes.menu}>
                  Works
                </Link>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/works">
            <Works />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
