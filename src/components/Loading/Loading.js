import { makeStyles, CircularProgress, Box } from "@material-ui/core";

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
  loading:{
      color: "#191924"
  }
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.content}>
        <CircularProgress size={40} className={classes.loading}/>
      </Box>
    </div>
  );
}
