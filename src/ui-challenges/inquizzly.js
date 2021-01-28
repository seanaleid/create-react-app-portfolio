import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";

const useStyles = makeStyles({
    box: {
        margin: "0 auto",
        maxWidth: "1000px",
    },
});

const Inquizzly = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container className={classes.box}>
                <h1>Inquizzly</h1>
            </Container>
        </React.Fragment>
    );
};

Inquizzly.propTypes = {
    colors: PropTypes.object,
    width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(Inquizzly);