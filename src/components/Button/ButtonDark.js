import {
  makeStyles,
  Grid,
  Box,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  button: {
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
    "@media (max-width: 700px)": {
      width: 120,
      height: 40,
    },
  },

  buttonFont: {
    fontFamily: "Libre Baskerville",
    fontSize: 15,
    fontWeight: 500,
    "@media (max-width: 700px)": {
      fontSize: 14,
    },
  },
}));

export default function ButtonDark({ children }) {
  const classes = useStyles();
  return (
    <Button className={classes.button}>
      <Typography className={classes.buttonFont}>{children}</Typography>
    </Button>
  );
}
