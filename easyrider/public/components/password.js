import React from "react";

class Password extends React.Component {
  render() {
    return (
      <input
        type="password"
        placeholder="Repeat Password"
        name="psw-repeat"
        required
      />
    );
  }
}

export default Password;
