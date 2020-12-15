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

const useStyles = makeStyles(() => ({
  root: {
    height: "auto",
    maxWidth: "xl",
    padding: 30,
  },
  box: {
    padding: 20,
  },

  title: {
    color: "#191924",
    fontFamily: "Libre Baskerville",
    fontSize: 40,
    fontWeight: 500,
    letterSpacing: -0.5,
    textAlign: "center",
    justify: "center",
    padding: 60,
  },
  titleMobile: {
    color: "#191924",
    fontFamily: "Libre Baskerville",
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: -0.5,
    textAlign: "center",
    justify: "center",
    padding: 20,
  },

  projectImage: {},
  projectTitle: {
    height: 40
  },
  projectDescription: {
    height: 60
  },
}));

export default function Works() {
  const classes = useStyles();
  const projects = [
    {
      id: "1",
      projectImage: "default-project-photo.png",
      projectName: "KLINIK KAULSAY",
      projectSum:
        "Modern one-page, responsive web design",
      techUsed:"XD, JavaScript, ReactJS",
      projectRole:"Prototyping, Web Design & Front-end Developement",
      
    },
  ];
  return (
    <div className={classes.root} id="works">
      <Container maxWidth="md">
        <Grid container>
          <Grid item>
            <Hidden mdDown>
              <Typography className={classes.title}>
                A collection of projects I’ve worked on.
              </Typography>
            </Hidden>
            <Hidden mdUp>
              <Typography className={classes.titleMobile}>
                A collection of projects I’ve worked on.
              </Typography>
            </Hidden>
          </Grid>
        </Grid>
        {projects.map((p) => (
          <Grid item>
            <Paper elevation={0} className={classes.box}>
              <Grid container>
                <Grid item xd={7} md={7}>
                  <img
                    src={p.projectImage}
                    width="450"
                    height="auto"
                    layout="responsive"
                    alt="project-photo"
                  />
                </Grid>
                <Grid item xd={5} md={5}>
                  <Typography className={classes.projectTitle}>
                    {p.projectName}
                  </Typography>
                  <Typography className={classes.projectDescription}>
                    {p.projectSum}
                  </Typography>
                  <Typography className={classes.projectDescription}>
                    Technologies/Tools Used: {p.techUsed}
                  </Typography>
                  <Typography className={classes.projectDescription}>
                    Role: {p.projectRole}
                  </Typography>
                  <ButtonDark>View details</ButtonDark>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Container>
    </div>
  );
}
