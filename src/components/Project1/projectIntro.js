import {
  makeStyles,
  Container,
  Grid,
  Box,
  Typography,
  Card,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    height: 500
  },

  background: {
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center left",
  },

  introText: {
    
    marginTop: -300,
    textAlign:"center",
    width: "100%",
    zIndex: "20",
    height: "100%",
    "@media (max-width: 576px)": {
      marginTop:-100,
    },
  },

  title:{
    fontFamily: "Libre Baskerville",
    fontSize: 30,
    fontWeight: 500,
    color: "#191924",
    "@media (max-width: 576px)": {
        fontSize:15,
      },
  }

}));

export default function ProjectIntro() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src="/projectIntroBackground.png" className={classes.background}/>
      <div >
        <Grid container>
          <Grid item xs={6} md={6}>
              <Box className={classes.introText}>
              <Typography className={classes.title}>KLINIK KAULSAY</Typography>
              </Box>
            
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
