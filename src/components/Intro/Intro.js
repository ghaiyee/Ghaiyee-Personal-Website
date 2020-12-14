import { makeStyles, Grid, Box, Typography, IconButton } from "@material-ui/core";


const useStyles = makeStyles(() => ({
  root: {
    minHeight: 500,
    paddingTop: 100,
  },
  content: {
    display: "flex",
    justifyContent: "center",
    padding: 15
  },
  photo: {
    height: 120,
    width: "auto",
    borderRadius: "50%",
  },
  introText:{
    color: "#191924",
    fontFamily: "Libre Baskerville",
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: -0.5,
    textAlign: "center",
  }
}));

export default function Intro() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Box className={classes.content}>
            <img src="gy-photo.png" className={classes.photo} />
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box className={classes.content}>
            <Typography className={classes.introText}>
              Hello! I’m Ghaiyee, a UX Designer & 
              <br/> Front-End Developer based in 
              <br/>
              Kuala Lumpur, Malaysia.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box className={classes.content}>
            <IconButton>  </IconButton>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
