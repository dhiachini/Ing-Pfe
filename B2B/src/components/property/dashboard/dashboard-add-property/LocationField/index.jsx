import React, { useState } from "react";
import SelectMulitField from "./SelectMulitField";
import Map from "./Map";
import { useDispatch } from "react-redux";
import { createOffer } from "../../../../../../Redux/Actions/offersActions";

const LocationField = ({ n, f, handleSubmit, updateForm }) => {
  const [latInput, setLatInput] = useState("");
  const [lngInput, setLngInput] = useState("");
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const offerData = {
      latitude: latInput,
      longitude: lngInput,
    };
    dispatch(createOffer(offerData));
  };

  return (
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
          <div style={{ display: "inline-block", marginTop: "70px", marginLeft: "160px" }}>
            <button type="submit" className="btn ud-btn btn-thm">
              Soumettre
              <i className="fal fa-arrow-right-long" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LocationField;
