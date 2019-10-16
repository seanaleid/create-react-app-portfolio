import React from "react";

//Material UI
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

//Components
import Navigation from "../Navigation";
import Footer from "../Footer";

const useStyles = makeStyles(theme =>({
    root: {
        
    },
    font: {
        color: "#000",
        width: '800px',
        margin: '0 auto',
        textAlign: 'center',
        marginTop: '50px'
    },
    test: {
        backgroundColor: "#fff",
        height: '600px',
        textAlign: 'center'
    },
}));

export default function WelcomePage(){
    const classes = useStyles();

    return(
        <div className={classes.root}> 
            <Navigation />
                <Typography variant="h6" className={classes.font}>
                    Sean Naleid Vargas - Welcome Page
                </Typography>
                <div className={classes.test}>Test Box</div>
            <Footer />
        </div>
    )
}

