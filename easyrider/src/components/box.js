import React from "react";

class Box extends React.Component {
  render() {
    return (
      <input
        className="box"
        type="checkbox"
        defaultChecked="checked"
        name="remember"
        style={{
          marginBottom: "15px"
        }}
      />
    );
  }
}

export default Box;
