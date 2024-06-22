import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOffer } from "../../../../../../Redux/Actions/offersActions";
import Map from "./Map";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LocationField = ({ n, f, handleSubmit, updateForm }) => {
  const [latInput, setLatInput] = useState("");
  const [lngInput, setLngInput] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const { error, loading } = useSelector((state) => state.offers);
  const offerData = useSelector((state) => state.offers); // Get the offer data from the state

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const offerDetails = {
      ...offerData,
      stepThreeData: {
        latitude: latInput,
        longitude: lngInput,
      },
    };
    setHasSubmitted(true);
    dispatch(createOffer(offerDetails)); // Pass the updated offer data to the action
  };

  useEffect(() => {
    if (hasSubmitted) {
      const typePost = localStorage.getItem("typePost");
      const isDemande = typePost === "0"; // Check if the type is "demande"
      if (loading) {
        toast.loading(isDemande ? "Chargement de la demande..." : "Chargement de l'offre...", { id: "offer-loading" });
      } else {
        toast.dismiss("offer-loading");
        if (error) {
          toast.error(isDemande ? "L'ajout de la demande a échoué" : "L'ajout de l'offre a échoué", { id: "offer-error" });
        } else {
          toast.success(isDemande ? "Demande ajoutée avec succès" : "Offre ajoutée avec succès", { id: "offer-success" });
          setTimeout(() => {
            if (isDemande) {
              navigate("/mesdemandes"); // Navigate to /mesdemandes after the success toast
            } else {
              navigate("/mesoffres"); // Navigate to /mesoffres after the success toast
            }
          }, 2100); // Adjust the delay as needed
        }
        setHasSubmitted(false);
      }
    }
  }, [loading, error, hasSubmitted, navigate]);

  return (
    <div>
      <Toaster />
      <form className="form-style1" onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="col-sm-12">
            <Map setLngInput={setLngInput} updateForm={updateForm} setLatInput={setLatInput} />
          </div>
        </div>

        <div className="row" style={{ marginTop: "25px" }}>
          <div className="col-sm-6 col-xl-4">
            <div className="mb30">
              <label className="heading-color ff-heading fw600 mb10">
                Latitude
              </label>
              <input
                type="text"
                value={latInput}
                className="form-control"
                readOnly
              />
            </div>
          </div>

          <div className="col-sm-6 col-xl-4">
            <div className="mb30">
              <label className="heading-color ff-heading fw600 mb10">
                Longitude
              </label>
              <input
                type="text"
                value={lngInput}
                className="form-control"
                readOnly
              />
            </div>
          </div>

          <div className="col-sm-6 col-xl-4">
            <div style={{ display: "inline-block", marginTop: "120px", marginLeft: "120px" }}>
              <button type="submit" className="btn ud-btn btn-thm">
                Soumettre
                <i className="fal fa-arrow-right-long" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LocationField;
