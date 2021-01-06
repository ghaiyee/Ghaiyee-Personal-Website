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
    fontSize: 20,
    fontWeight: 500,
    color: "#191924",
  },
  secondTitle: {
    fontFamily: "Libre Baskerville",
    fontSize: 18,
    fontWeight: 500,
    color: "#191924",
    paddingTop: 10,
    textAlign: "center",
  },
  content: {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeight: 500,
    color: "#191924",
    paddingTop: 10,
    paddingBottom: 10,
  },
  image: {
    paddingTop: 10,
  },
  imageTitle: {
    fontFamily: "Montserrat",
    fontSize: 12,
    fontWeight: 500,
    color: "#191924",
    textAlign: "center",
  },
}));
export default function ProjectContent() {
  const classes = useStyles();

  const content = {
    challenges:
      "Learning & Developement (L&D) professionals often got involved in fire-fighting mode such as running ad-hoc training, promoting training to targeted audiences, registering attendees, multiple reminders to different attendees at different dates and time and churning out individual training report when required. ",
    process: "Work in Progress",
    research: " ",
  };
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>Challenges</Typography>
            <Typography className={classes.content}>
              {content.challenges}
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>Process</Typography>
            <img
              src="excellenceHubProcess.png"
              width="100%"
              className={classes.image}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
