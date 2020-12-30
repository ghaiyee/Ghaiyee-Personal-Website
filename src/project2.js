import {
    makeStyles,
    Container,
    Grid,
    Box,
    Typography,
  } from "@material-ui/core";
  
  import SubLayout from "../src/components/layouts/SubLayout";
  import ProjectIntro from "../src/components/Project2/projectIntro";
  import ProjectOverview from "./components/Project2/projectOverview";
  import ProjectContent from "./components/Project2/projectContent"
  
  const useStyles = makeStyles(() => ({
    root: {},
  }));
  
  export default function Project2() {
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
  