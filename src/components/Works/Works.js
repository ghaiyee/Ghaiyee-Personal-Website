import {
  makeStyles,
  Paper,
  Container,
  Grid,
  Typography,
  Hidden,
  Button,
} from "@material-ui/core";

import ButtonDark from "../Button/ButtonDark";
import WorkCard from "./WorkCard";

const useStyles = makeStyles(() => ({
  root: {
    height: "auto",
    maxWidth: "xl",
    padding: 50,
  },
  title: {
    color: "#191924",
    fontFamily: "Libre Baskerville",
    fontSize: 20,
    "@media (min-width:600px)": {
      fontSize: 40,
    },
    fontWeight: 500,
    letterSpacing: -0.5,
    textAlign: "center",
    padding: 5,
    "@media (min-width:600px)": {
      padding: 30,
    },
  },
}));

export default function Works() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="works">
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12}>
            <Typography className={classes.title}>
              A collection of projects I’ve worked on.
            </Typography>
          </Grid>
        </Grid>
        <WorkCard />
      </Container>
    </div>
  );
}
