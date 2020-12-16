import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {},
  
    children: {
      minHeight: 500,
      paddingTop: 50,
      "@media (max-width: 650px)": {
        paddingTop: 80,
      },
    },
  }));

export default function SubLayout ({children}){
    const classes = useStyles();
    return (
        <>
        <NavBar/>
        <div className={classes.children}>{children}</div>
        <Footer/>
        </>
    )
}