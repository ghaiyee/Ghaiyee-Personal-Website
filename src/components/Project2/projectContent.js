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
    textAlign: "center",
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
    overview: "Excellence Hub",
    research: " Research ",
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
            <Typography className={classes.title}>Research</Typography>
            <Typography className={classes.content}>
              {content.research}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
