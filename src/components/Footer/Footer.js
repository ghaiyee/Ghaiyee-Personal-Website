import {
  Container,
  Box,
  Grid,
  Typography,
  makeStyles,
  AppBar,
  Toolbar,
} from "@material-ui/core";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "../About/About";
import Works from "../Works/Works";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#191924",
    height: 400,
    width: "100%",
    color: "#FDFFFC",
  },
  box: {
    height: 300,
    display: "flex",
    alignItems: "center",
    paddingLeft: 50,
  },

  miniBox:{
    height: 100,
    display: "flex",
    alignItems: "center",
  },

  content: {
    fontFamily: "Libre Baskerville",
    fontSize: 30,
    fontWeight: 500,
  },

  copyright: {
    fontFamily: "Libre Baskerville",
    fontSize: 10,
    fontWeight: 400,
    paddingLeft: 50,
  },

  menu: {
    textDecoration: "none",
    color: "#FDFFFC",
    fontFamily: "Libre Baskerville",
    fontSize: 16,
    fontWeight: 500,
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={12}>
            <Box className={classes.box}>
              <Typography className={classes.content}>
                thanks
                <br /> for
                <br /> stopping
                <br /> by!
              </Typography>
            </Box>
          </Grid>
            <MiniFooter/>
        </Grid>
      </Container>
    </Box>
  );
}

function MiniFooter() {
  const classes = useStyles();

  return (
    <Router>
      <Grid container className={classes.miniBox}>
        <Grid item xs={12} md={10}>
          <Typography className={classes.copyright}>
            Copyright © 2020 All rights reserved | Ghaiyee.
          </Typography>
        </Grid>
        <Grid item xs={6} md={1}>
          <Link to="/about" className={classes.menu}>
            About
          </Link>
        </Grid>
        <Grid item xs={6} md={1}>
          <Link to="/works" className={classes.menu}>
            Works
          </Link>
        </Grid>
      </Grid>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/works">
          <Works />
        </Route>
      </Switch>
    </Router>
  );
}
