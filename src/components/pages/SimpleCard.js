import React from "react"

export const SimpleCard = (props) => {
    console.log(props.project)
    return(
        <div>
            <h1>Name: {props.project.name}</h1>
            <h3>Link: {props.project.deployedURL}</h3>
            <h5>Description: {props.project.description}</h5>
        </div>
    )
}

export default SimpleCard;