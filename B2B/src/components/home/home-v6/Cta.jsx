import React from "react";
import AppWidget from "./AppWidget";

const Cta = () => {
  return (
    <section className="our-cta3 pb100 pt60-md pb60-md">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xl-6 d-none d-xl-block">
            <div className="cta-img">
              <img src="/images/about/mobile-img-1.png" alt="mobile" />
            </div>
          </div>
          {/* End col-lg-5 */}

          <div className="col-lg-7 col-xl-5 offset-xl-1">
            <div className="cta-style5">
              <h2 className="cta-title">
                Téléchargez notre nouvelle application
              </h2>
              <p className="cta-text mb60">
                Suivez des offres et des demandes avec l'application 216/213.
                Diffusez ou téléchargez pour suivre dans l'avion, le métro ou
                partout où vous voulez le mieux.
              </p>
              <AppWidget />
            </div>
          </div>
          {/* End col-lg-7 */}
        </div>
        {/* End .row */}
      </div>
    </section>
  );
};

export default Cta;
