import React from "react";

const ProperytyDescriptions = () => {
  return (
    <>
      <p className="text mb10">
        Doté du moteur diesel 2.2 TDCi de 154 chevaux, il affiche une
        consommation moyenne en cycle mixte de 9,7 l/100 km, témoignant de
        l’efficience de ce moteur qui a déjà fait ses preuves sur plusieurs
        autres modèles de la gamme Ford. Le Ford Transit Minibus pourra toujours
        compter sur les 385 Nm de couple afin de transporter les 15 passagers.
      </p>
      <div className="agent-single-accordion">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
              style={{}}
            >
              <div className="accordion-body p-0">
                <p className="text">
                  Dans le domaine du transport de personnes, la sécurité prime
                  et sur ce domaine, Ford n’a pas lésiné les moyens. En effet,
                  le Ford Transit Minibus 15 places établit également de
                  nouvelles références grâce à ses équipements de sécurité et à
                  ses aides à la conduite car il est équipé de l’ABS
                  (anti-blocage des roues), de l’ESP (système de contrôle de
                  trajectoire), de l’EBA (aide au freinage d’urgence), du TCS
                  (système du contrôle de traction) et du HLA (aide au démarrage
                  en côte).
                </p>
              </div>
            </div>
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button p-0 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Afficher plus
              </button>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProperytyDescriptions;
