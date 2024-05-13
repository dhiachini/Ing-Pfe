import React, {useState} from "react";
import SelectMulitField from "./SelectMulitField";
import Map from "./Map";

const LocationField = ({ n, f }) => {
  const [latInput, setLatInput] = useState();
  const [lngInput, setLngInput] = useState();
  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-12">
          <Map setLngInput={setLngInput} setLatInput={setLatInput} />
        </div>
        {/* End col-12 */}
      </div>
      {/* End .row */}

      <div className="row" style={{ marginTop: "25px"}}>
        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Latitude
            </label>
            <input type="text" value={latInput} className="form-control" />
          </div>
        </div>
        {/* End .col-sm-6 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Longitude
            </label>
            <input type="text" value={lngInput} className="form-control" />
          </div>
        </div>
        <div className="col-sm-6 col-xl-4">
          <a
            href="/offres"
            style={{
              display: "inline-block",
              marginTop: "70px",
              marginLeft: "160px",
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
