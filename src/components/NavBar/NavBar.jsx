import SignInButton from "./SignInButton/SignInButton";

import navBarLogo from "../../assets/1st-logo.png";

import "./navbar.css";
export default function NavBar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="navbar-logo-container">
          <img src={navBarLogo} alt="logo" className="navbar-logo" />
        </div>
        <div className="navbar-title-container">
          <h3 className="navbar-title">HiveMind</h3>
        </div>
        <div className="navbar-button-container">
          <SignInButton />
        </div>
      </div>
    </nav>
  );
}
