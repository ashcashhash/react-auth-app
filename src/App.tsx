import React from "react";
// import "./styles/App.scss";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="app">
      <Login />
      <Signup />
      <Profile />
    </div>
  );
}

export default App;
