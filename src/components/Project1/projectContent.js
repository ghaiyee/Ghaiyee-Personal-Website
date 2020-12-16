import { makeStyles, Grid, Box, Typography} from "@material-ui/core"
const useStyles = makeStyles(() => ({
    root: {
      minHeight: 500,
      justify: "center",
      alignItems: "center",
      width: "100%",
    },
    background: {
      width: "100%",
      height: "auto",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center left",
    },
  }));
export default function ProjectContent (){
    const classes = useStyles();
    return (
        <div className={classes.root}>
        this is content
        </div>
    )
}