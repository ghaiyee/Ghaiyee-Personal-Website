import {
  makeStyles,
  Paper,
  Container,
  Grid,
  Typography,
  Box,
  Divider
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
      padding: 5,
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
    padding: 0,
  },

  projectDescription: {
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: -0.5,
    color: "#191924",
    padding: 0,
  },
  divider:{
    backgroundColor: "#191924",
    width: "20%"
  },
  button:{
    width: 100,
  }
}));

export default function WorkCard() {
  const classes = useStyles();
  const projects = [
    {
      id: "1",
      projectImage: "default-project-photo.png",
      projectName: "klinik kaulsay",
      projectSum: "Redesigned and included content management feature.",
      techUsed: " Adobe XD, HTML, CSS, JavaScript, ReactJS, NextJS & Firebase",
      projectRole: "Prototyping, Web Design & Front-end Developement",
    },
    {
      id: "2",
      projectImage: "default-project-photo.png",
      projectName: "excellence hub",
      projectSum: "Modern one-page, responsive web design",
      techUsed: "XD, JavaScript, ReactJS",
      projectRole: "Prototyping, Web Design & Front-end Developement",
    },
    {
      id: "3",
      projectImage: "default-project-photo.png",
      projectName: "ghaiyee.com",
      projectSum: "Portfilio Website",
      techUsed: "XD, JavaScript, ReactJS",
      projectRole: "Web Design & Front-end Developement",
    },
    
  ];
  return (
    <div>
      <Container maxWidth="md">
        {projects.map((p) => (
          <Grid container className={classes.box}>
            <Grid item xs={12} md={5}>
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
            <Grid item xs={12} md={7}>
              <Box className={classes.content}>
                <Typography className={classes.projectTitle}>
                  {p.projectName}
                </Typography>
                <Divider  className={classes.divider}/>
                <Typography className={classes.projectDescription}>
                  {p.projectSum}
                  <br />
                  {p.techUsed}
                  <br />
                  {p.projectRole}
                </Typography>
                <br />
                <ButtonDark className={classes.button}>View details</ButtonDark>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Container>
    </div>
  );
}
