import React, { Component, ChangeEvent, FormEvent } from "react";
import "./Login.css";

interface LoginState {
  applicationId: string;
  username: string;
  password: string;
}

class Login extends Component<{}, LoginState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      applicationId: "",
      username: "",
      password: "",
    };
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<LoginState, keyof LoginState>);
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Perform login logic here using this.state.applicationId, this.state.username, and this.state.password
    console.log(
      "Login submitted:",
      this.state.applicationId,
      this.state.username,
      this.state.password
    );
  };

  render() {
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="login-field">
            <label>Application ID</label>
            <input
              type="text"
              name="applicationId"
              value={this.state.applicationId}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="login-field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="login-field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
