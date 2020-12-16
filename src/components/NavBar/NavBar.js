import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Grid,
} from "@material-ui/core";

import About from "../About/About";
import Works from "../Works/Works";

const useStyles = makeStyles(() => ({
  root: {
    padding: 10,
    backgroundColor: "#f8f9fa",
    boxShadow: "none",
    maxWidth: "xl",
  },

  logo: {
    height: 60,
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
      <div>
        <AppBar className={classes.root}>
          <Toolbar>
            <Grid container>
              <Grid item xs={12} md={12}>
                <Link to="/">
                  <img src="ghaiyee-logo.png" className={classes.logo} />
                </Link>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>

  );
}
