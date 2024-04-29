import React from "react";
import SelectMulitField from "./SelectMulitField";
import Map from "./Map";

const LocationField = ({ n, f }) => {
  return (
    <form className="form-style1">
      <div className="row">
        {/* <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
        </div> */}
        {/* End col-12 */}

        {/* <SelectMulitField />

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Zip</label>
            <input type="text" className="form-control" />
          </div>
        </div> */}
        {/* End col-4 */}
        {/* 
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Neighborhood
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Neighborhood"
            />
          </div>
        </div> */}
        {/* End col-4 */}

        <div className="col-sm-12">
          <Map />
        </div>
        {/* End col-12 */}
      </div>
      {/* End .row */}

      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Latitude
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>
        {/* End .col-sm-6 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Longitude
            </label>
            <input type="text" className="form-control" />
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
      {/* End .row */}
    </form>
  );
};

export default LocationField;
