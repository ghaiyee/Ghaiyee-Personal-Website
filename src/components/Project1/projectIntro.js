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
    marginTop: "-70%",
    textAlign: "left",
    width: "100%",
    height: "100%",
    paddingBottom:20
  },

  title: {
    fontFamily: "Libre Baskerville",
    fontSize: 35,
    fontWeight: 500,
    color: "#191924",
    "@media (max-width: 650px)": {
      fontSize: 16,
    },
  },

  content: {
    fontFamily: "Montserrat",
    fontSize: 20,
    fontWeight: 500,
    color: "#191924",
    paddingTop: 10,
    "@media (max-width: 650px)": {
      fontSize: 8,
    },
  },
  button:{
      paddingTop:20,
  }
}));

export default function ProjectIntro() {
  const classes = useStyles();

  const introContent = {
    title: "KLINIK KAULSAY",
    content:
      "Designed and implement a website with dynamic customizable content.",
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
              <ButtonDark >Visit Website</ButtonDark>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
