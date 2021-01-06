import { makeStyles, Grid, Box, Typography, IconButton, Button } from "@material-ui/core";

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';


const useStyles = makeStyles(() => ({
  root: {
    minHeight: 500,
    justify: "center",
    alignItems: "center",

  },
  content: {
    display: "flex",
    justifyContent: "center",
    padding: 15
  },

  photo: {
    height: 110,
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
    width:400
  },
  icon:{
    color:"#191924",
    "&:hover,&:focus": {
      color: "#3b3b4d",
    },
  },

  button:{
    borderRadius: 0,
    border: 0,
    backgroundColor: "#191924",
    color: "#FDFFFC",
    width: 200,
    height: 50,
    "&:hover,&:focus": {
      color: "#3b3b4d",
      backgroundColor: "transparent",
      fontWeight: 700,

    },
  },

  buttonFont:{
    fontFamily: "Libre Baskerville",
    fontSize: 15,
    fontWeight: 500,
  },

}));


export default function Intro() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Box className={classes.content}>
            <img src="gy-photo.jpg" className={classes.photo} />
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box className={classes.content}>
            <Typography className={classes.introText}>
              Hello! I’m Ghaiyee, a self-taught UX Designer & Front-End Developer based in Kuala Lumpur, Malaysia.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box className={classes.content}>
            <IconButton
             component="a"
             href="https://github.com/ghaiyee"
             target="_blank"
             rel="noopener noreferrer"
             className={classes.icon}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
             component="a"
             href="https://www.linkedin.com/in/ghaiyeelow/"
             target="_blank"
             rel="noopener noreferrer"
             className={classes.icon}
             >
              <LinkedInIcon />
            </IconButton>
            <IconButton  href="mailto:ghaiyee@gmail.com" className={classes.icon}>
              <AlternateEmailIcon />
            </IconButton>
          </Box>
        </Grid>
        {/* <Grid item xs={12} md={12}>
          <Box className={classes.content}>
            <Button className={classes.button} >
              <Typography className={classes.buttonFont}>
                RECENT WORKS
              </Typography>
            </Button>
          </Box>
        </Grid> */}
      </Grid>
    </div>
  );
}
