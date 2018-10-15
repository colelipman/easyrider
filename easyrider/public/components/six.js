import React from "react";
import Password from "./password";
import Full from "./full";

class Six extends React.Component {
  render() {
    return (
      <div className="six columns">
        <Password />
        <Full />
      </div>
    );
  }
}

export default Six;
