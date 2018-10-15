import React from "react";
import Login from "./login";
import Bottom from "./bottom";
import Signup from "./signup";

class Log extends React.Component {
  render() {
    return (
      <div>
        {}
        <Login />
        <Bottom />
        <Signup />
      </div>
    );
  }
}

export default Log;
