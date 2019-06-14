import React from "react";
import "./ViewBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ViewBtn(props) {
  return (
    <span className="view-btn btn btn-primary" {...props} role="button" tabIndex="0">
      View
    </span>
  );
}

export default ViewBtn;
