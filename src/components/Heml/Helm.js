import React from "react";

const Helm = (props) => {
  document.title = "Food ordering application -" + props.title;

  return <div className="w-100">{props.children}</div>;
};

export default Helm;
