import React from "react";

//Material UI
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

//Components
import Navigation from "../Navigation";
import Footer from "../Footer";

const useStyles = makeStyles(theme =>({
    font: {
        color: "blue",
    },
}));

export default function Skills(){
    const classes = useStyles();

    return(
        <div className={classes.root}>
                <Navigation />
                <Typography variant="h6" className={classes.font}>
                    Portfolio
                </Typography>
                <Footer />
        </div>            
    )
}