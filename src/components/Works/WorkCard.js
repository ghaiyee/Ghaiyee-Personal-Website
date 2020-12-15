import {
  makeStyles,
  Paper,
  Container,
  Grid,
  Typography,
  Hidden,
  Button,
  Box,
} from "@material-ui/core";

import ButtonDark from "../Button/ButtonDark";

const useStyles = makeStyles(() => ({
  root: {
    height: "auto",
    maxWidth: "xl",
    padding: 30,
  },
  box: {
    padding: 5,
    "@media (min-width:600px)": {
      padding: 20,
    },
    alignItems: "center",
  },
  paper: {
    padding: 5,
    "@media (min-width:600px)": {
      padding: 30,
    },
    height: "auto",
    width: "100%"
  },
  content: {
    height: "auto",
  },
  projectImage: {},

  projectTitle: {
    height: 40,
    width:"auto",
    color: "#191924",
    fontFamily: "Libre Baskerville",
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: -0.5,
    textAlign: "left",
    justify: "center",
  },

  projectDescription: {
    color: "#191924",
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: -0.5,
    textAlign: "left",
    justify: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },
}));

export default function WorkCard() {
  const classes = useStyles();
  const projects = [
    {
      id: "1",
      projectImage: "default-project-photo.png",
      projectName: "klinik kaulsay",
      projectSum: "Modern one-page, responsive web design",
      techUsed: "XD, JavaScript, ReactJS",
      projectRole: "Prototyping, Web Design & Front-end Developement",
    },
    {
      id: "1",
      projectImage: "default-project-photo.png",
      projectName: "klinik kaulsay",
      projectSum: "Modern one-page, responsive web design",
      techUsed: "XD, JavaScript, ReactJS",
      projectRole: "Prototyping, Web Design & Front-end Developement",
    },
    {
      id: "1",
      projectImage: "default-project-photo.png",
      projectName: "klinik kaulsay",
      projectSum: "Modern one-page, responsive web design",
      techUsed: "XD, JavaScript, ReactJS",
      projectRole: "Prototyping, Web Design & Front-end Developement",
    },
  ];
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        {projects.map((p) => (
          <Box  className={classes.box}>
            <Paper elevation={0}  className={classes.paper}>
              <Grid container>
                <Grid item xs={12} md={7}>
                  <Box>
                  <img
                    src={p.projectImage}
                    width="400"
                    height="auto"
                    layout="responsive"
                    alt="project-photo"
                  />
                  </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Box className={classes.content}>
                    <Typography className={classes.projectTitle}>
                      {p.projectName}
                    </Typography>
                    <Typography className={classes.projectDescription}>
                      {p.projectSum}
                    </Typography>
                    <Typography className={classes.projectDescription}>
                      Technologies/Tools Used:
                      <br />
                      {p.techUsed}
                    </Typography>
                    <Typography className={classes.projectDescription}>
                      Role:
                      <br />
                      {p.projectRole}
                    </Typography>
                    <br />
                    <ButtonDark>View details</ButtonDark>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        ))}
      </Container>
    </div>
  );
}
