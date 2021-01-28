import React from "react";
import PropTypes from "prop-types";
import withWidth from '@material-ui/core/withWidth';


const Test = () => {
  return (
    <div style={{backgroundColor: "blue", height: "400px"}}>
      <h4 style={{color: "red", fontSize: "24px"}}>This is a test. Does it show?</h4>
    </div>
  )
}


Test.propTypes = {
    colors: PropTypes.object,
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
  }
  
export default withWidth()(Test);
  