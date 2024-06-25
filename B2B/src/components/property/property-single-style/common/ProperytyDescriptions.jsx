import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProperytyDescriptions = ({ id }) => {
  const offers = useSelector((state) => state.offers.offers);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const offer = offers.find((offer) => offer._id === id);
    if (offer) {
      setDescription(offer.description);
    }
  }, [offers, id]);

  return (
    <>
      <p className="text mb10">{description}</p>
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
                  {/* Additional details can be shown here if needed */}
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
