import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LPCard from "../../components/Cards/Card";

import "./landingPage.css";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const cardsRef = useRef(null);

  useEffect(() => {
    if (cardsRef.current) {
      const cards = gsap.utils.toArray(".lp-card-container");

      cards.forEach((card) => {
        gsap.to(card, {
          transform: "translateX(0)",
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 50%",
            scrub: true,
          },
        });
      });
    }
  }, []);

  return (
    <>
      <section className="welcome-section-container">
        <div className="welcome-section-img">
          
        </div>
      </section>
      <section ref={cardsRef} className="animated-lp-cards">
        <div className="lp-card-container --odd">
          <LPCard>
            <div className="lp-card-title-holder">
              <h4 className="card-title">LOREM IPSUM</h4>
            </div>
            <p className="lp-card-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              neque, facere consectetur et adipisci provident, voluptatem nulla
            </p>
          </LPCard>
        </div>
        <div className="lp-card-container --even">
          <LPCard>
            <div className="lp-card-title-holder">
              <h4 className="card-title">LOREM IPSUM</h4>
            </div>
            <p className="lp-card-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              neque, facere consectetur et adipisci provident, voluptatem nulla
            </p>
          </LPCard>
        </div>
        <div className="lp-card-container --odd">
          <LPCard>
            <div className="lp-card-title-holder">
              <h4 className="card-title">LOREM IPSUM</h4>
            </div>
            <p className="lp-card-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              neque, facere consectetur et adipisci provident, voluptatem nulla
            </p>
          </LPCard>
        </div>
        <div className="lp-card-container --even">
          <LPCard>
            <div className="lp-card-title-holder">
              <h4 className="card-title">LOREM IPSUM</h4>
            </div>
            <p className="lp-card-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              neque, facere consectetur et adipisci provident, voluptatem nulla
            </p>
          </LPCard>
        </div>
      </section>
    </>
  );
}
