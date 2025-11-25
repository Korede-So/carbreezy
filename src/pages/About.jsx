import React from "react";
import "./About.css";

const About = () => {
  return (
    <main className="cb-page">
      <section className="cb-hero">
        <div className="cb-hero-inner">
          <h1 className="cb-title">About CarBreezy</h1>
          <p className="cb-sub">
            Discover cars the breezy way simple, fast, and made for confident
            choices.
          </p>

          <div className="cb-cta-row">
            <a className="cb-btn primary" href="#gallery">
              Browse Cars
            </a>
            <a className="cb-btn ghost" href="#contact">
              Sell with Us
            </a>
          </div>
        </div>

        {/* decorative car silhouette — purely visual */}
        <div className="cb-hero-art" aria-hidden="true">
          <svg viewBox="0 0 800 200" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="carGrad" x1="0" x2="1">
                <stop offset="0" stopColor="#19fcf0ff" stopOpacity="0.80" />
                <stop offset="1" stopColor="#e63e3eff" stopOpacity="0.80" />
              </linearGradient>
            </defs>
            <path
              d="M20 140 Q120 30 260 90 T540 90 Q700 60 780 140 L780 160 L20 160 Z"
              fill="url(#carGrad)"
            />
          </svg>
        </div>
      </section>

      <section className="cb-features">
        <div className="cb-feature">
          <div className="cb-icon">🚗</div>
          <div className="cb-feature-body">
            <h3>Curated Inventory</h3>
            <p>
              High-quality listings with real photos, verified details and
              seller ratings so you can shop with confidence.
            </p>
          </div>
        </div>

        <div className="cb-feature">
          <div className="cb-icon">🛞</div>
          <div className="cb-feature-body">
            <h3>Smooth Experience</h3>
            <p>
              Fast search, clear filters, and helpful comparisons that make
              finding the right car effortless.
            </p>
          </div>
        </div>

        <div className="cb-feature">
          <div className="cb-icon">✅</div>
          <div className="cb-feature-body">
            <h3>Trusted Support</h3>
            <p>
              Friendly support and resources to guide you through buying or
              selling every step of the way.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;