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
  box: {
    minHeight: 350,
    direction: "column",
    justify: "center",
    alignItems: "center",
    padding: 10,
    "@media (max-width:800px)": {
      padding: 10,
    },
  },

  content: {
    padding: 20,
    alignItems: "center",
    justify: "center",
    "@media (max-width:800px)": {
      padding: 10,
    },
  },

  projectTitle: {
    fontFamily: "Libre Baskerville",
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: -0.5,
    color: "#191924",
    padding: 5,
  },

  projectDescription: {
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: -0.5,
    color: "#191924",
    padding: 5,
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
    <div>
      <Container maxWidth="md">
        {projects.map((p) => (
          <Grid container className={classes.box}>
            <Grid item xs={12} md={6}>
              <Box className={classes.content}>
                <img
                  src={p.projectImage}
                  width="100%"
                  height="auto"
                  alt="project-photo"
                  style={{
                    boxShadow: "6px 6px 6px #d3d3d3"
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={classes.content}>
                <Typography className={classes.projectTitle}>
                  {p.projectName}
                </Typography>
                <Typography className={classes.projectDescription}>
                  {p.projectSum}
                  <br />
                  Technologies/Tools Used:
                  <br />
                  {p.techUsed}
                  <br />
                  Role:
                  <br />
                  {p.projectRole}
                </Typography>
                <br />
                <ButtonDark>View details</ButtonDark>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Container>
    </div>
  );
}
