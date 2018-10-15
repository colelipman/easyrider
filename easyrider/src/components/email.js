import React from "react";

class Email extends React.Component {
  render() {
    return (
      <input
        className="email"
        type="text"
        placeholder="Enter Email"
        name="email"
        required
      />
    );
  }
}

export default Email;
