import React from 'react';

function Services() {
  return (
    <section className="services section-padding pb-0" data-scroll-index="1">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">My Specialization</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2>
              What I <span className="fw-200">Offer</span>
            </h2>
            <div className="ml-auto">
              {/* Optional Link */}
            </div>
          </div>
        </div>

        {/* === First Row === */}
        <div className="row">
          <div className="col-lg-4">
            <div className="item-box radius-15 md-mb30">
              <div className="ti-paint-bucket main-color fz-50 mb-40"></div>
              <h5 className="mb-15">Problem Solving (DSA)</h5>
              <p>350+ problems solved on multiple platforms in Java.</p>
              <a href="https://codolio.com/profile/harshgupta">Codolio Card (click Me)</a>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="item-box radius-15 md-mb30">
              <div className="ti-layout-slider main-color fz-50 mb-40"></div>
              <h5 className="mb-15">Web Development</h5>
              <p>Transforming ideas into dynamic, high-performance websites.</p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="item-box radius-15 md-mb30">
              <div className="ti-rocket main-color fz-50 mb-40"></div>
              <h5 className="mb-15">UI/UX Designing</h5>
              <p>Visually stunning designs that reflect your brand identity.</p>
            </div>
          </div>
        </div>

        {/* === Second Row === */}
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="item-box radius-15 md-mb30">
              <div className="ti-world main-color fz-50 mb-40"></div>
              <h5 className="mb-15">GenAI & Web3</h5>
              <p>Decentralizing websites and contract and Exploring generative AI and Agentic AI.</p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="item-box radius-15 md-mb30">
              <div className="ti-shield main-color fz-50 mb-40"></div>
              <h5 className="mb-15">Authentication & Security</h5>
              <p>Secure user auth with JWT, OAuth, and role-based access.</p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="item-box radius-15">
              <div className="ti-settings main-color fz-50 mb-40"></div>
              <h5 className="mb-15">Automation & APIs</h5>
              <p>Automating workflows using APIs, n8n, and backend logic.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
