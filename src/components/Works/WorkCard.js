import {
  makeStyles,
  Paper,
  Container,
  Grid,
  Typography,
  Box,
  Divider,
  Link,
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
  divider: {
    backgroundColor: "#191924",
    width: "20%",
  },
  buttonFont: {
    color:"#FDFFFC",
    fontFamily: "Libre Baskerville",
    fontSize: 15,
    fontWeight: 500,
    "@media (max-width: 700px)": {
      fontSize: 8,
    },
    "&:hover,&:focus": {
      color: "#3b3b4d",
    }
  },
}));

export default function WorkCard() {
  const classes = useStyles();
  const projects = [
    {
      id: "1",
      projectImage: "drkaulsayWorkCard.jpg",
      projectName: "klinik kaulsay",
      projectSum: "Redesigned and included content management feature.",
      techUsed: " Adobe XD, HTML, CSS, JavaScript, ReactJS, NextJS & Firebase",
      projectRole: "Web Design & Front-end Developement",
      href: "/project1",
      button: "view details"
    },
    {
      id: "2",
      projectImage: "default-project-photo.png",
      projectName: "excellence hub",
      projectSum: "Employee training management system",
      techUsed: "Figma, JavaScript, ReactJS",
      projectRole: "UX Design, Web Design & Front-end Developement",
      href: "/project2",
      button: "view details"
    },
    {
      id: "3",
      projectImage: "default-project-photo.png",
      projectName: "ghaiyee.com",
      projectSum: "Portfilio Website",
      techUsed: "XD, ReactJS",
      projectRole: "Web Design & Front-end Developement",
      href: "/project3",
      button: "WIP"
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
                    boxShadow: "6px 6px 6px #d3d3d3",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box className={classes.content}>
                <Typography className={classes.projectTitle}>
                  {p.projectName}
                </Typography>
                <Divider className={classes.divider} />
                <Typography className={classes.projectDescription}>
                  {p.projectSum}
                  <br />
                  {p.techUsed}
                  <br />
                  {p.projectRole}
                </Typography>
                <br />
                <ButtonDark >
                  <Link href={p.href} style={{ textDecoration: 'none' }}>
                    <Typography className={classes.buttonFont}>
                    {p.button}
                    </Typography>
                  </Link>
                </ButtonDark>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Container>
    </div>
  );
}
