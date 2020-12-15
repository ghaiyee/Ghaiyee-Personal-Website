import {
  makeStyles,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";

import WorkCard from "./WorkCard";

const useStyles = makeStyles(() => ({
  root: {
    height: "auto",
    maxWidth: "xl",
    paddingTop: 50,
    paddingBottom: 50,
  },

  title: {
    color: "#191924",
    fontFamily: "Libre Baskerville",
    fontSize: 20,
    "@media (min-width:800px)": {
      fontSize: 40,
    },
    fontWeight: 500,
    letterSpacing: -0.5,
    textAlign: "center",
    padding: 30,

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
