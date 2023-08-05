import React, { Component, ChangeEvent, FormEvent } from "react";
import "./Signup.css";

interface SignupState {
  emailId: string;
  username: string;
  password: string;
  invitationCode: string;
}

class Signup extends Component<{}, SignupState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      emailId: "",
      username: "",
      password: "",
      invitationCode: "",
    };
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<SignupState, keyof SignupState>);
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Perform login logic here using this.state.emailId, this.state.username, and this.state.password
    console.log(
      "Singup submitted:",
      this.state.emailId,
      this.state.username,
      this.state.password,
      this.state.invitationCode
    );
  };

  render() {
    return (
      <div className="signup-container">
        <h2>Singup</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="signup-field">
            <label>Email ID</label>
            <input
              type="text"
              name="emailId"
              value={this.state.emailId}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="signup-field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="signup-field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="signup-field">
            <label>Invitation Code</label>
            <input
              type="text"
              name="invitationCode"
              value={this.state.invitationCode}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Singup</button>
        </form>
      </div>
    );
  }
}

export default Signup;
