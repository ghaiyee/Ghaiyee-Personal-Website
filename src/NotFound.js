import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    width: "100%",
  },
  content:{
    position:"fixed",
    top:"50%",
    left:"50%"
  },
  notFound:{
    color: "#191924",
    fontFamily: "Libre Baskerville",
    fontSize: 50,
    fontWeight: 500,
  }
}));

export default function Notfound() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.content}>
        <Typography className={classes.notFound}>Opps! Page not found. </Typography>
      </Box>
    </div>
  );
}
