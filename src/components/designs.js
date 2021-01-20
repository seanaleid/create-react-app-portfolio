import React from "react";
import PropTypes from "prop-types";
// import Container from "@material-ui/core/Container";
// import { makeStyles } from "@material-ui/core/styles";
// import { Typography } from "@material-ui/core";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';

function Designs({colors}){
    return (
        <React.fragment>
            <h1>Designs</h1>
        </React.fragment>
    )
}

Designs.propTypes = {
    colors: PropTypes.object,
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
  }

export default withWidth()(Designs);