import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import PropertyDescription from "./property-description";
import UploadMedia from "./upload-media";
import LocationField from "./LocationField";
import { createOffer } from "../../../../../Redux/Actions/offersActions";
import "./element.css";

const AddPropertyTabContent = () => {
  const [s, setS] = useState(0);
  const [m, setM] = useState(0);
  const [e, setE] = useState(0);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    subcategory: "",
    transactionType: "",
    country: "",
    price: "",
    images: [],
    latitude: "",
    longitude: "",
  });

  const dispatch = useDispatch(); 

  const n = () => setS(s + 1);
  const f = () => setS(0);

  const updateForm = (name, value) => {
    name !== undefined ?
    setFormData({
      ...formData,
      [name]: value,
    }) : 
    setFormData({
      value,
      ...formData,
    })
    ;
    console.log("Form data updated:", formData);
  };

  const handleSubmit = () => {
    dispatch(createOffer());
  };

  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab2" role="tablist">
          <button
            className="nav-link active fw600 ms-3"
            id="nav-item1-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-item1"
            type="button"
            role="tab"
            aria-controls="nav-item1"
            aria-selected="true"
          >
            1. Description
          </button>
          <button
            className="nav-link fw600"
            id="nav-item2-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-item2"
            type="button"
            role="tab"
            aria-controls="nav-item2"
            aria-selected="false"
            disabled={s === 0}
          >
            2. Media
          </button>
          <button
            className="nav-link fw600"
            id="nav-item3-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-item3"
            type="button"
            role="tab"
            aria-controls="nav-item3"
            aria-selected="false"
            disabled={m === 0}
          >
            3. Emplacement
          </button>
        </div>
      </nav>

      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          style={{ padding: "80px !important" }}
          id="nav-item1"
          role="tabpanel"
          aria-labelledby="nav-item1-tab"
        >
          <div className="ps-widget bgc-white bdrs12 ele overflow-hidden position-relative">
            <h4 className="title fz17 mb30">Description de l'offre</h4>
            <PropertyDescription
              setFormData={setFormData}
              updateForm={updateForm}
              s={s}
              n={n}
              f={f}
            />
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="nav-item2"
          role="tabpanel"
          aria-labelledby="nav-item2-tab"
        >
          <UploadMedia
            setFormData={setFormData}
            updateForm={updateForm}
            m={m}
            setM={setM}
          />
        </div>

        <div
          className="tab-pane fade"
          id="nav-item3"
          role="tabpanel"
          aria-labelledby="nav-item3-tab"
        >
          <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
            <h4 className="title fz17 mb30">Emplacement</h4>
            <LocationField
              setFormData={setFormData}
              formData={formData}
              updateForm={updateForm}
              e={e}
              setE={setE}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPropertyTabContent;
