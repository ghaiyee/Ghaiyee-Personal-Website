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
  content: {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeight: 500,
    color: "#191924",
    paddingTop: 10,
    paddingBottom: 10,
  },
  image:{
    paddingTop:20,

  }

}));
export default function ProjectContent() {
  const classes = useStyles();

  const content = {
    overview:
      "Klinik Kaulsay is a clinic based in Damansara that specializes in autoimmune and metabolic related treatment.",
    objective1:
      " Develop a professional website that is an accurate representation of their practices.",
    objective2:
      " Create a user-friendly website that allow the user to manage the website content by allowing the user to create, edit and publish content. ",
    objective3:
      " Make the website mobile friendly so that they can provide a great user experience to their mobile users.",
    objective4:
      " Increase their search engine rankings so that they can get more traffic to their website and increase the awareness of the public.",
    objective5:
      " Improve the website page load performance and quality using Lighthouse.",
    background:
      " Klinik Kaulsay website was originally created using WorkPress.",
    problem1:
      " Not user-friendly to client as the client is not able to customize the website without training.",
    problem2: " Not customizable by client.",
    problem3:
      " Lack of information regarding the business e.g., services available and specialization.",
    problem4:
      " Informations displayed are not up-to-date e.g., reviews and the missing location.",
    problem5: "  ",
    problem6: " Low website page load performance based on GTmetrix report. ",
    solution1: " Redesign website architecture ",
    solution2: " Build website from scratch with Next.js & React ",
    solution3: " Website hosting migration from WordPress to Vercel",
    solution4: " Implement Content Management System (CMS)",
    solution5: " Responsive website design ",
    userJourney: " ",
    initialSketches:
      " After we defined our solution, we began to explore potential designs for Klinik Kaulsay's website. We then translated our solutions and ideas into the website layout sketches as illustrated below.",
    wireframing1:
      " After identifying the items that we needed to include in the website and content management system, we created a low-fidelity wireframes using Adobe XD. Overall, our user had an easy time going through the wireframes. However, we would need to remove one of the features - BLOG POST that we proposed to include. ",
    wireframing2:
      " This process allows us to get feedback from the user earlier in the process and it helps to prevent going down to the wrong path. Besides, wireframe also allows the development team to understand what they are building and how the end product should looks like.",
    design: " ",
    development: "",
    testing: "",
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
            <img src="drkaulsayBefore.jpg" width="100%" className={classes.image}/>
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
                <li>
                  {content.problem6}
                  <img src="drkaulsayGTmetrixGrade.JPG" width="100%" className={classes.image}/>
                </li>
              </ul>
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
            <Typography className={classes.title}>Wireframing</Typography>
            <Typography className={classes.content}>
              {content.wireframing1}
              <br />
              <br />
              {content.wireframing2}
              <img src="drkaulsayWireframe.jpg" width="100%" className={classes.image}/>
              <img src="drkaulsayWireframeManage.jpg" width="100%" className={classes.image}/>
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>Design</Typography>
            <Typography className={classes.content}>
              {content.design}
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>Development</Typography>
            <Typography className={classes.content}>
              {content.development}
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>Testing</Typography>
            <Typography className={classes.content}>
              {content.testing}
            </Typography>
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
