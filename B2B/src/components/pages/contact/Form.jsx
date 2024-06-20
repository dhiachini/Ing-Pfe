import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formserviceAction } from "../../../../Redux/Actions/formserviceActions";

const Form = () => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.formservice.errors);

  const [formData, setFormData] = useState({
    title: "",
    servicetype: "",
    prestationadress: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(formserviceAction(formData));
  };

  return (
    <form className="form-style1" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Titre</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Titre de service"
              value={formData.title}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
        </div>

        <div className="col-lg-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Type de service
            </label>
            <input
              type="text"
              name="servicetype"
              className="form-control"
              placeholder="EX : expert contable, avocat, expert financier, autre.."
              value={formData.servicetype}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Lieu de la Prestation
            </label>
            <input
              type="text"
              name="prestationadress"
              className="form-control"
              placeholder="Indiquez l'adresse ou les endroits où le service est requis."
              value={formData.prestationadress}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="mb10">
            <label className="heading-color ff-heading fw600 mb10">
              Description du Besoin
            </label>
            <textarea
              name="description"
              cols={30}
              rows={4}
              placeholder="Veuillez décrire en détail ce que vous attendez de notre service."
              value={formData.description}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="d-grid">
            <button type="submit" className="ud-btn btn-thm">
              Soumettre
              <i className="fal fa-arrow-right-long" />
            </button>
          </div>
        </div>

        {/* {errors && (
          <div className="col-md-12">
            <div className="alert alert-danger mt-3">
              {errors}
            </div>
          </div>
        )} */}
      </div>
    </form>
  );
};

export default Form;
