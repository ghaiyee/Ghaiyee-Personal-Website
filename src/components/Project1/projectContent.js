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
      "Klinik Kaulsay is based in Damansara and specializes in autoimmune and metablic related treatment.",
    objective1: " Develop a professional website that is an accurate representation of their practices.",
    objective2: " Create a user-friendly website that allow the user to manage the website content by allowing the user to create, edit and publish content. ",
    objective3: " Make the website mobile friendly so that they can provide a great user experience to their mobile users.",
    objective4: " Increase their search engine rankings so that they can get more traffic to their website and acquire more clients.",
    objective5: " Improve the website page load performance and quality using Lighthouse.",
    background: " Before redesign",
    problem1: "Low website page load performance based on GTmetrix report",
    problem2: "",
    problem3: "",
    problem4: "",
    problem5: "",
    problem6: "",
    solution1: " Website architecture",
    solution2: " Web development",
    solution3: " Website hosting migration",
    solution4: " Content Management System (CMS)",
    solution5: "",
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
              <ul>
                <li>{content.objective1}</li>
                <li>{content.objective2}</li>
                <li>{content.objective3}</li>
                <li>{content.objective4}</li>
                <li>{content.objective5}</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>Background</Typography>
            <Typography className={classes.content}>
              {content.background}
            </Typography>
            <img src="drkaulsayHomeBefore.jpg" width="50%" />
            <img src="drkaulsayContactBefore.jpg" width="50%" />
            
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>The Problem</Typography>
            <Typography className={classes.content}>
              {content.problem1}
              <img src="drkaulsayGTmetrixGrade.JPG" width="100%" />
              <br/>
              {content.problem2}
              <br/>
              {content.problem3}
              <br/>
              {content.problem4}
              <br/>
              {content.problem5}
              <br/>
              {content.problem6}
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>The Solution</Typography>
            <Typography className={classes.content}>
              Klinik Kaulsay's website redesign work for my team included:
              <ul>
                <li>{content.solution1}</li>
                <li>{content.solution2}</li>
                <li>{content.solution3}</li>
                <li>{content.solution4}</li>
                <li>{content.solution5}</li>
              </ul>
              
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
