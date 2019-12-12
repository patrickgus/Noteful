import React from "react";
import PropTypes from "prop-types";

export default function ValidationError(props) {
  if (props.hasError) {
    return <div className="form-error">{props.message}</div>;
  } else {
    return <></>;
  }
}

ValidationError.propTypes = {
  hasError: PropTypes.bool,
  message: PropTypes.string
};
