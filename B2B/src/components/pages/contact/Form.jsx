import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formserviceAction } from "../../../../Redux/Actions/formserviceActions";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const [formData, setFormData] = useState({
    title: "",
    servicetype: "",
    prestationadress: "",
    description: "",
  });
  const [loading, setLoading] = useState(false); // State for loading indicator

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setLoading(true); // Start loading indicator

    try {
      await dispatch(formserviceAction(formData));
      
      // On success, show toast and navigate
      toast.success("Form submitted successfully!");
      setTimeout(() => {
        navigate("/dashboard-my-package"); // Navigate to desired path after the success toast
      }, 2000); // Adjust the delay as needed
    } catch (error) {
      // On error, show error toast
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <div>
      <Toaster /> {/* Toaster component for displaying toasts */}
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
              <label className="heading-color ff-heading fw600 mb10">Type de service</label>
              <input
                type="text"
                name="servicetype"
                className="form-control"
                placeholder="EX : expert comptable, avocat, expert financier, autre.."
                value={formData.servicetype}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
          </div>

          <div className="col-md-12">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">Lieu de la Prestation</label>
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
              <label className="heading-color ff-heading fw600 mb10">Description du Besoin</label>
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
              <button type="submit" className="ud-btn btn-thm" disabled={loading}>
                {loading ? (
                  <span>
                    <i className="fa fa-spinner fa-spin" /> Envoi en cours...
                  </span>
                ) : (
                  <>
                    Soumettre <i className="fal fa-arrow-right-long" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
