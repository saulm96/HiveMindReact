import { useEffect, useRef } from "react";

import DropDownButtonLP from "../../components/Buttons/DropDownButtonLP/DropDownButtonLP";
import SignInButton from "./SignInButton/SignInButton";
import navBarLogo from "../../assets/1st-logo.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./headerbar.css";

export default function HeaderBar() {
  const titleContainerRef = useRef(null);
  const titleRef = useRef(null);
  const logoRef = useRef(null);
  const headerRef = useRef(null);
  const heroWrapperRef = useRef(null);

  //Scroll effect for the header title
  useEffect(() => {
    if (
      !titleContainerRef.current ||
      !titleRef.current ||
      !logoRef.current ||
      !headerRef.current ||
      !heroWrapperRef.current
    )
      return;

    gsap.registerPlugin(ScrollTrigger);

    const scrollTriggerConfig = {
      trigger: "body",
      start: "top top",
      end: "200px top",
      scrub: true,
    };

    gsap.to(heroWrapperRef.current, {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: heroWrapperRef.current,
        start: "20% top",
        end: "80% top",
        scrub: 0.5,
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: scrollTriggerConfig,
    });

    tl.fromTo(
      titleContainerRef.current,
      { left: "15%", bottom: "-60%" },
      { left: "17%", bottom: "auto", top: "20%" },
      0
    )
      .fromTo(titleRef.current, { fontSize: "4rem" }, { fontSize: "2rem" }, 0)
      .fromTo(logoRef.current, { opacity: 0 }, { opacity: 1 }, 0)
      .fromTo(
        headerRef.current,
        { backgroundColor: "rgba(1, 1, 1, 0)" },
        { backgroundColor: "rgb(19, 22, 17)" },
        0
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section className="landing-page-header" ref={headerRef}>
        <div className="header-wrapper">
          <div className="header-logo-container">
            <img
              src={navBarLogo}
              alt="logo"
              className="header-logo"
              ref={logoRef}
            />
          </div>
          <div className="header-title-container" ref={titleContainerRef}>
            <h1 className="header-title" ref={titleRef}>
              HiveMind
            </h1>
          </div>
        </div>
      </section>
      <div className="hero-wrapper" ref={heroWrapperRef}>
        <section className="hero-content -hero-welcome-section">
          <div className="hero-slogan">
            <p className="hero-slogan-content">
              Manage your teams, distribute tasks, and track their progress all
              in one place. Efficient and seamless teamwork!
            </p>
          </div>
          <div className="hero-welcome-card">
            <div className="hero-welcome-card-title-section">
              <p className="welcome-card-title">
                Team Efficiency & Unified Thinking:
              </p>
              <p className="welcome-card-title">Try HiveMind Now!</p>
            </div>

            <div className="hero-signInButton">
              <SignInButton />
            </div>
            <div className="hero-advertise">
              <p className="welcome-card-advertiser">
                HiveMind is still under construction.
              </p>
              <p className="welcome-card-advertiser">
                Please be patient and report any issue.
              </p>
            </div>
          </div>
        </section>
      </div>
      <DropDownButtonLP />

      <div className="hero-lp-divider"></div>
    </>
  );
}
