import React from "react"

//Material UI
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core"
import Container from '@material-ui/core/Container';

//Components
import Navigation from "../Navigation"
import PortfolioCard from "./PortfolioCard"
import Footer from "../Footer"

const useStyles = makeStyles(theme =>({
    root: {
        width: '100%',
    },
    container: {
        width: '100%',
        border: "5px solid lime",
        display: 'flex',
        flexDirection: 'column',

    },
    insideContainer: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    tempBox: {
        border: "5px solid #DCDCDC",
        marginLeft: '20px',
        borderRadius: '10px',
    },
    font: {
        color: "#000",
        margin: '0 auto',
        textAlign: 'center',
        marginTop: '50px'
    },
}));

export default function Skills(){
    const classes = useStyles();

    return(
        <div className={classes.root}>
                <Navigation />
                    <Container className={classes.container}> 
                        <Container>
                            <Typography variant="h6" className={classes.font}>
                                Portfolio
                            </Typography>
                        </Container>
                        <Container className={classes.insideContainer}>
                            <PortfolioCard />
                            <div className={classes.tempBox}>
                                <h1>Project Name: Build Week 1</h1>
                                <p>Link: <a href="https://better-professor-ui.netlify.com">Visit the Landing Page</a></p>
                            </div>
                            <div className={classes.tempBox}>
                                <h1>Project Name: Build Week 2</h1>
                                <p>Link: <a href="cookbooker.netlify.com">Let's get cooking!</a></p>
                            </div>
                            <div className={classes.tempBox}>
                                <h1>Project Name: Team-Builder </h1>
                                <p>Link: <a href="https://team-builder.now.sh/">Build a team!</a></p>
                            </div>
                            <div className={classes.tempBox}>
                                <h1>Project Name: Reducer ToDo </h1>
                                <p>Link: <a href="https://reducer-todo.now.sh/">Make a To Do list</a></p>
                            </div>
                            <div className={classes.tempBox}>
                                <h1>Project Name: Basic Smurfs - no BE</h1>
                                <p>Link: <a href="https://smurfs.seanaleid.now.sh/">Take me to the smurfs!</a></p>
                            </div>
                        </Container>
                    </Container>
                <Footer />
        </div>            
    )
}