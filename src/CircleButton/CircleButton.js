import React from "react";
import "./CircleButton.css";

export default function NavCircleButton(props) {
  const { tag, className, children, ...otherProps } = props;
  return React.createElement(
    tag,
    {
      className: ["NavCircleButton", props.className].join(" "),
      ...otherProps
    },
    children
  );
}

NavCircleButton.defaultProps = {
  tag: "a"
};
