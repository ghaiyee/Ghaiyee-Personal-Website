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
    textAlign: "center"
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
    overview:
      "Klinik Kaulsay is a clinic based in Damansara that specializes in autoimmune and metabolic related treatments.",
    objective1:
      " Develop a professional website that is an accurate representation of their practices.",
    objective2:
      " Create an user-friendly interface that allow the user to create, edit and publish content. ",
    objective3:
      " Make the website mobile friendly so that they can provide a great user experience to their mobile users.",
    objective4:
      " Improve their website search engine rankings so that they can generate more traffic to the website and increase the awareness of the public.",
    objective5:
      " Improve the website page load performance and quality.",
    background:
      " Klinik Kaulsay website was originally created using WordPress.",
    problem1:
      " Not user-friendly to business user as the user is not able to customize the website without going through WorkPress training.",
    problem2: " Content are not customizable by business user.",
    problem3:
      " Lack of information regarding the business for individual users e.g., services available and specialization.",
    problem4:
      " Informations displayed are not up-to-date e.g., reviews and the missing Google Map location.",
    problem5: "  ",
    problem6: " Bad website page load performance based on GTmetrix report. ",
    userStory1: " Know about Klinik Kaulsay",
    userStory2: " Know what services Klinik Kaulsay provides",
    userStory3: " Read about the recent reviews before visiting ",
    userStory4: " Contact Klinik Kaulsay to make appointments",
    userStory5: " Provide review after visiting the clinic",
    userStory6: " Read and respond to clients reviews ",
    userStory7: " Read and respond to clients enquiries ",
    userStory8:
      " Change website content such as services available and operating hours",
    userStory9: " ",
    userStory10: " ",
    solution1:
      " Redesign website architecture and add new contents such as services provided by the clinic and review form.",
    solution2:
      " Implement Content Management System (CMS) that allows user to manage and modify the website content easily. ",
    solution3:
      " Build website from scratch using Next.js & Reactjs and website hosting migration from WordPress to Vercel.",
    solution4:
      " Create a responsive website design to ensure the website is mobile friendly.",
    solution5: "  ",
    informationArchitecture:
      " After we defined our solutions, we began to explore potential items we would like to include in Klinik Kaulsay's website and content management page. ",
    initialSketches:
      "  We then translated the information architecture, solutions and ideas into the website layout sketches as illustrated below.",
    wireframing1:
      " After identifying the items that we needed to include in the website and content management system, we created a low-fidelity wireframes using Adobe XD. Overall, our user had an easy time going through the wireframes. ",
    wireframing2:
      " This process allows us to get feedback from the user earlier in the process and it helps to prevent going down to the wrong path. Besides, wireframe also allows the development team to understand what they are building and how the end product should looks like.",
    design: " ",
    development: " Klinik Kaulsay website was build from scratch with Next.js. The reason why we used Next.js is that   ",
    testing1:
      "Tested on the major web browsers to ensure the website is able to renders correctly across major browsers such as Google Chrome, Firefox & Safari. ",
    testing2:
      "Tested the responsiveness on multiple viewports such as Laptop, Tablet & Mobile. ",
    launching: "In progress...",
    feedback: "Pending...",
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
              src="drkaulsayBefore.jpg"
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
                <li>
                  {content.problem6}
                  <img
                    src="drkaulsayGTmetrixGrade.JPG"
                    width="100%"
                    className={classes.image}
                  />
                  <Typography className={classes.imageTitle}>
                    GTmetrix report for Klinik Kaulsay before redesign
                  </Typography>
                </li>
              </ul>
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
            <Typography className={classes.title}>
              Information Architecture
            </Typography>
            <Typography className={classes.content}>
              {content.informationArchitecture}
            </Typography>
            <img
              src="drkaulsayInformationArchitecture.jpg"
              width="100%"
              className={classes.image}
            />
            <Typography className={classes.imageTitle}>
              Klinik Kaulsay information architecture for home page
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
                  src="initialSketchesHomeContact.jpg"
                  width="100%"
                  className={classes.image}
                />
                <Typography className={classes.imageTitle}>
                  Initial sketches for Klinik Kaulsay website
                </Typography>
              </Grid>
              <Grid item md={6} xs={12}>
                <img
                  src="initialSketchesManage.jpg"
                  width="100%"
                  className={classes.image}
                />
                <Typography className={classes.imageTitle}>
                  Initial sketches for Klinik Kaulsay content management page
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
                src="drkaulsayWireframe.jpg"
                width="100%"
                className={classes.image}
              />
              <Typography className={classes.imageTitle}>
                Wireframe for Klinik Kaulsay website
              </Typography>
              <img
                src="drkaulsayWireframeManage.jpg"
                width="100%"
                className={classes.image}
              />
              <Typography className={classes.imageTitle}>
                Wireframe for Klinik Kaulsay content management page
              </Typography>
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>Design</Typography>
            <Typography className={classes.content}>
              Typography & Color
            </Typography>
            <img
              src="typographyColor.jpg"
              width="100%"
              className={classes.image}
            />
            <Typography className={classes.content}>
              Prototype Design
            </Typography>
             <img
              src="drkaulsayHomePrototype.jpg"
              width="100%"
              className={classes.image}
            />
            <Typography className={classes.imageTitle}>
                Prototype design for Klinik Kaulsay website home 
              </Typography>
            <img
              src="drkaulsayServiceContactPrototype.jpg"
              width="100%"
              className={classes.image}
            />
             <Typography className={classes.imageTitle}>
                Prototype design for Klinik Kaulsay website service and contact page
              </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography className={classes.title}>Development</Typography>
            <Typography className={classes.content}>
              {content.development}
            </Typography>
            <img
              src="drkaulsayHome.gif"
              width="100%"
              className={classes.image}
            />
             <img
              src="drkaulsayManage.gif"
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
            <img src="browser.jpg" width="100%" className={classes.image} />
            <Typography className={classes.secondTitle}>
            Test responsiveness
            </Typography>
            
            <Typography className={classes.content}>
              {content.testing2}
            </Typography>
            <img src="drkaulsayResponsiveMockup.jpg" width="100%" className={classes.image} />
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
