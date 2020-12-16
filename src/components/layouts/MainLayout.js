import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},

  children: {
    minHeight: 500,
    paddingTop: 100
  },
}));

export default function MainLayout({ children }) {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <div className={classes.children}>{children}</div>
      <Footer />
    </>
  );
}
