import SignInButton from "./SignInButton/SignInButton";

import navBarLogo from "../../assets/1st-logo.png";

import "./headerbar.css";
export default function HeaderBar() {
  return (
    <section className="landing-page-header">
      <div className="header-wrapper">
        <div className="header-logo-container">
          <img src={navBarLogo} alt="logo" className="header-logo" />
        </div>
        <div className="header-title-container">
          <h1 className="header-title">HiveMind</h1>
        </div>
        <div className="header-button-container">
          <SignInButton />
        </div>
      </div>
    </section>
  );
}
