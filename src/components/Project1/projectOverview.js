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
    paddingTop: "10%",
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
export default function ProjectOverview() {
  const classes = useStyles();

  const content = {
    tools: "Adobe XD, HTML, CSS, JavaScript, ReactJS, NextJS & Firebase",
    team: "ZK & Ghaiyee",
    myRole: "UX Designer & Front-end Developer",
    timeline:
      "November 2020 to Present:  Planning, Prototyping, Website Design, Development, Testing, Launching",
  };
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item md={3} xs={12}>
            <Typography className={classes.title}>Tools</Typography>
            <Typography className={classes.content}>{content.tools}</Typography>
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography className={classes.title}>Team</Typography>
            <Typography className={classes.content}>{content.team}</Typography>
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography className={classes.title}>My Role</Typography>
            <Typography className={classes.content}>
              {content.myRole}
            </Typography>
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography className={classes.title}>Timeline</Typography>
            <Typography className={classes.content}>
              {content.timeline}
            </Typography>
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}
