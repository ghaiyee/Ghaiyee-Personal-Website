import {
  makeStyles,
  Container,
  Grid,
  Box,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles(() => ({
  root: {
    height: "auto",
    justify: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: 50,
    paddingBottom: 50,
  },
  title: {
    fontFamily: "Libre Baskerville",
    fontSize: 18,
    fontWeight: 500,
    color: "#191924",
  },
  content: {
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeight: 500,
    color: "#191924",
    paddingTop: 10,
  },
}));
export default function ProjectContent() {
  const classes = useStyles();

  const content = {
    overview:
      "",
    objective1: " Develop a more professional website that is an accurate representation of their practices.",
    objective2: " Create a user-friendly website that allow the user to manage the website content by allowing the user to create, edit and publish content. ",
    objective3: " Make the website mobile friendly so that they can provide a great user experience to their mobile users.",
    objective4: " Increase their search engine rankings so that they can get more traffic to their website and acquire more clients.",
    objective5: " Improve the website page load performance and quality using Lighthouse.",
    background: "Before redesign",

    problem: "",
    solution: "",
    userJourney: "",
    initialSketches: "",
    prototyping: "",
  };
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>Project Overview</Typography>
            <Typography className={classes.content}>
              {content.overview}
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>Objective</Typography>
            <Typography className={classes.content}>
              {content.objective1}
              <br/>
              {content.objective2}
              <br/>
              {content.objective3}
              <br/>
              {content.objective4}
              <br/>
              {content.objective5}
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>Background</Typography>
            <Typography className={classes.content}>
              {content.background}
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>The Problem</Typography>
            <Typography className={classes.content}>
              {content.problem}
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>The Solution</Typography>
            <Typography className={classes.content}>
              {content.solution}
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>User Journey</Typography>
            <Typography className={classes.content}>
              {content.userJourney}
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>Initial Sketches</Typography>
            <Typography className={classes.content}>
              {content.initialSketches}
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>Prototyping</Typography>
            <Typography className={classes.content}>
              {content.prototyping}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
