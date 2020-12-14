import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    height: 500,
  },
}));

const projects = [
  {
    projectPhoto: "",
    projectName: "KLINIK KAULSAY",
    projectDescription:
      "I'm baby synth salvia four loko, kale chips yr prism man bun 8-bit jianbing. Synth truffaut organic unicorn pug asymmetrical.",
  },
];

export default function Works() {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12}>
          <CardActionArea>
            <Card>
              <CardMedia><img src ={projects.projectPhoto}/></CardMedia>
              <CardContent>
                <Typography>{projects.projectName}</Typography>
                <Typography>{projects.projectDescription}</Typography>
              </CardContent>
            </Card>
          </CardActionArea>
        </Grid>
      </Grid>
    </div>

  );
}
