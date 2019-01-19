import React from "react";
import LoadingImage from "../../img/favicon2-new.png";

import "./Loading.css";

const Loading = props => {
  return (
    <div className="main">
      <img className="main-image" src={LoadingImage} alt="Loading graphic" />
    </div>
  );
};

export default Loading;
