import React from "react";
import Six from "./six";

class Row extends React.Component {
  render() {
    return (
      <div className="row">
        <Six />
        <Six />
      </div>
    );
  }
}

export default Row;
