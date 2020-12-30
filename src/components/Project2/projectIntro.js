import {
  makeStyles,
  Container,
  Grid,
  Box,
  Typography,
  Card,
  CardMedia,
} from "@material-ui/core";

import ButtonDark from "../Button/ButtonDark";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: 550,
    "@media (max-width: 650px)": {
      minHeight: 150,
    },
  },

  background: {
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center left",
  },

  introText: {
    marginTop: -300,
    textAlign: "left",
    width: "100%",
    height: "100%",
    paddingBottom: 20,
    "@media (min-width: 300px)": {
      marginTop: -120,
    },
    "@media (min-width: 576px)": {
      marginTop: -150,
    },
    "@media (min-width: 768px)": {
      marginTop: -170,
    },
    "@media (min-width: 992px)": {
      marginTop: -200,
    },
    "@media (min-width: 1200px)": {
      marginTop: -300,
    },
  },

  title: {
    fontFamily: "Libre Baskerville",
    fontSize: 35,
    fontWeight: 500,
    color: "#191924",
    "@media (min-width: 300px)": {
      fontSize: 14,
    },
    "@media (min-width: 576px)": {
      fontSize: 18,
    },
    "@media (min-width: 768px)": {
      fontSize: 20,
    },
    "@media (min-width: 992px)": {
      fontSize: 24,
    },
    "@media (min-width: 1200px)": {
      fontSize: 35,
    },
  },

  content: {
    fontFamily: "Montserrat",
    fontSize: 20,
    fontWeight: 500,
    color: "#191924",
    paddingTop: 5,
    
    "@media (min-width: 300px)": {
      fontSize: 10,
    },
    "@media (min-width: 576px)": {
      fontSize: 12,
    },
    "@media (min-width: 768px)": {
      fontSize: 14,
    },
    "@media (min-width: 992px)": {
      fontSize: 18,
    },
    "@media (min-width: 1200px)": {
      fontSize: 20,
    },
  },
  button: {
    paddingTop: 20,
    "@media (min-width: 300px)": {
      paddingTop: 10,
    },
    "@media (min-width: 768px)": {
      paddingTop: 14,
    },
    "@media (min-width: 992px)": {
      paddingTop: 18,
    },
    "@media (min-width: 1200px)": {
      paddingTop: 20,
    },
  },
}));

export default function ProjectIntro() {
  const classes = useStyles();

  const introContent = {
    title: "EXCELLENCE HUB",
    content:
      "An employee training tracker ",
  };

  return (
    <div className={classes.root}>
      <img src="/projectIntroBackground.png" className={classes.background} />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={6} md={5}>
            <Box className={classes.introText}>
              <Typography className={classes.title}>
                {introContent.title}
              </Typography>
              <Typography className={classes.content}>
                {introContent.content}
              </Typography>
              <Box className={classes.button}>
                <ButtonDark>Visit Website</ButtonDark>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
