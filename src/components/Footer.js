import React from 'react'

// Material UI
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto',
        width: '70%',
        backgroundColor: theme.palette.background.paper,
        color:'#DCDCDC',
    },
    dividerFullWidth: {
        // padding: '10px 0',
        // margin: `5px 0 0 ${theme.spacing(2)}px`,
    },
    a:{
        color: '#DCDCDC', 
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <>
            <List className={classes.root}>
                <Divider component="li" />
                <li>
                    <Typography
                        className={classes.divider}
                        color="textSecondary"
                        display="block"
                        variant="caption"
                        >
                        <a className={classes.a} href="https://www.linkedin.com/in/sean-naleid/" style={{textDecoration:"none"}}>Copyright © 2019, Sean Naleid Vargas</a>
                    </Typography>
                </li>
            </List>
        </>
    )
    


}