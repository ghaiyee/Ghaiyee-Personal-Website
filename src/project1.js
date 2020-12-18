import {
  makeStyles,
  Container,
  Grid,
  Box,
  Typography,
} from "@material-ui/core";

import SubLayout from "../src/components/layouts/SubLayout";
import ProjectIntro from "../src/components/Project1/projectIntro";
import ProjectOverview from "./components/Project1/projectOverview";
import ProjectContent from "./components/Project1/projectContent"

const useStyles = makeStyles(() => ({
  root: {},
}));

export default function Project1() {
  const classes = useStyles();

  return (
    <>
      <SubLayout>
        <ProjectIntro />
        <ProjectOverview />
        <ProjectContent />
      </SubLayout>
    </>
  );
}
