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
    overview: "Excellence Hub",
    objective1: " Objective 1",
    objective2: " Objective 2 ",
    objective3: " Objective 3",
    objective4: " Objective 4",
    objective5: " Objective 5",
    background: " Background ",
    problem1: " Problem 1 ",
    problem2: "  Problem 2 ",
    problem3: "  Problem 3 ",
    problem4: "  Problem 4.",
    problem5: " Problem 5 ",
    research: " Research ",
    userStory1: " User story 1 ",
    userStory2: " User story 2 ",
    userStory3: " User story 3 ",
    userStory4: " User story 4",
    userStory5: " User story 5",
    userStory6: " User story 6 ",
    userStory7: " User story 7 ",
    userStory8: " User story 8 ",
    userStory9: " User story 9 ",
    userStory10: " User story 10 ",
    solution1: " Solution 1 ",
    solution2: " Solution 2 ",
    solution3: " Solution 3 ",
    solution4: " Solution 4 ",
    solution5: "  ",
    informationArchitecture: " Content ",
    initialSketches: "  Content ",
    wireframing1: " Content ",
    wireframing2: " TContent ",
    design: " Content ",
    development: " Content ",
    testing1: " Content ",
    testing2: " Content ",
    launching: " Content ",
    feedback: " Content ",
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
            <img
              src="defaultPhoto.jpg"
              width="100%"
              className={classes.image}
            />
            <Typography className={classes.imageTitle}>
              Klinik Kaulsay website before redesign
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>The Problem</Typography>
            <Typography className={classes.content}>
              <ul>
                <li>{content.problem1}</li>
                <li>{content.problem2}</li>
                <li>{content.problem3}</li>
                <li>{content.problem4}</li>
                <li>{content.problem5}</li>
                <li>{content.problem6}</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>Research</Typography>
            <Typography className={classes.content}>
              {content.research}
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>User Stories</Typography>
            <Grid container>
              <Grid item md={6} xs={12}>
                <Typography className={classes.content}>
                  For Individual: User wants to
                  <ul>
                    <li>{content.userStory1}</li>
                    <li>{content.userStory2}</li>
                    <li>{content.userStory3}</li>
                    <li>{content.userStory4}</li>
                    <li>{content.userStory5}</li>
                  </ul>
                </Typography>
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography className={classes.content}>
                  For Business: Business user wants to
                  <ul>
                    <li>{content.userStory6}</li>
                    <li>{content.userStory7}</li>
                    <li>{content.userStory8}</li>
                    <li>{content.userStory9}</li>
                    <li>{content.userStory10}</li>
                  </ul>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>The Solution</Typography>
            <Typography className={classes.content}>
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
            <Typography className={classes.title}>
              Information Architecture
            </Typography>
            <Typography className={classes.content}>
              {content.informationArchitecture}
            </Typography>
            <img
              src="defaultPhoto.jpg"
              width="100%"
              className={classes.image}
            />
            <Typography className={classes.imageTitle}>
            Image
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>Initial Sketches</Typography>
            <Typography className={classes.content}>
              {content.initialSketches}
            </Typography>
            <Grid container spacing={1}>
              <Grid item md={6} xs={12}>
                <img
                  src="defaultPhoto.jpg"
                  width="100%"
                  className={classes.image}
                />
                <Typography className={classes.imageTitle}>
                Image
                </Typography>
              </Grid>
              <Grid item md={6} xs={12}>
                <img
                  src="defaultPhoto.jpg"
                  width="100%"
                  className={classes.image}
                />
                <Typography className={classes.imageTitle}>
                Image
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>Wireframing</Typography>
            <Typography className={classes.content}>
              {content.wireframing1}
              <br />
              <br />
              {content.wireframing2}
              <img
                src="defaultPhoto.jpg"
                width="100%"
                className={classes.image}
              />
              <Typography className={classes.imageTitle}>
              Image
              </Typography>
              <img
                src="defaultPhoto.jpg"
                width="100%"
                className={classes.image}
              />
              <Typography className={classes.imageTitle}>
              Image
              </Typography>
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>Design</Typography>
            <Typography className={classes.content}>
              Typography & Color
            </Typography>
            <img
              src="defaultPhoto.jpg"
              width="100%"
              className={classes.image}
            />
            <Typography className={classes.content}>
              Prototype Design
            </Typography>
            <img
              src="defaultPhoto.jpg"
              width="100%"
              className={classes.image}
            />
            <Typography className={classes.imageTitle}>
            Image
            </Typography>
            <img
              src="defaultPhoto.jpg"
              width="100%"
              className={classes.image}
            />
            <Typography className={classes.imageTitle}>
            Image
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>Development</Typography>
            <Typography className={classes.content}>
              {content.development}
            </Typography>
            <img
              src="defaultPhoto.jpg"
              width="100%"
              className={classes.image}
            />
            <img
              src="defaultPhoto.jpg"
              width="100%"
              className={classes.image}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>Testing</Typography>
            <Typography className={classes.secondTitle}>
              Test across browsers
            </Typography>
            <Typography className={classes.content}>
              {content.testing1}
            </Typography>
            <img src="defaultPhoto.jpg" width="100%" className={classes.image} />
            <Typography className={classes.secondTitle}>
              Test responsiveness
            </Typography>

            <Typography className={classes.content}>
              {content.testing2}
            </Typography>
            <img
              src="defaultPhoto.jpg"
              width="100%"
              className={classes.image}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>Launching</Typography>
            <Typography className={classes.content}>
              {content.launching}
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>Client Feedback</Typography>
            <Typography className={classes.content}>
              {content.feedback}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
