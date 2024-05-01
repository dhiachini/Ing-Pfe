import React, { useState } from "react";
import Map from "./Map";

const LocationField = ({ n, f }) => {
  // State to manage latitude and longitude values
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  // Handler function to update latitude and longitude values
  const handleLatitudeChange = (event) => {
    setLatitude(event.target.value);
  };

  const handleLongitudeChange = (event) => {
    setLongitude(event.target.value);
  };

  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-12">
          <Map setLatInput={setLatitude} setLngInput={setLongitude} />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Latitude
            </label>
            {/* Input field for latitude */}
            <input
              type="text"
              className="form-control"
              value={latitude}
              onChange={handleLatitudeChange}
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Longitude
            </label>
            {/* Input field for longitude */}
            <input
              type="text"
              className="form-control"
              value={longitude}
              onChange={handleLongitudeChange}
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <a
            href="/offres"
            style={{
              display: "inline-block",
              marginTop: "70px",
              marginLeft: "246px",
            }}
          >
            <button type="button" className="btn ud-btn btn-thm">
              Soumettre
              <i className="fal fa-arrow-right-long" />
            </button>
          </a>
        </div>
      </div>
    </form>
  );
};

export default LocationField;
