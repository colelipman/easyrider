import React from "react";
import Head from "./head";
import Row from "./row";
import Primary from "./primary";

class Login extends React.Component {
  render() {
    return (
      <form className="login">
        <Head />
        <Row />
        <Primary />
      </form>
    );
  }
}

export default Login;
