import { Link } from "react-router-dom";
import React from "react";

const SignIn = () => {
  const handleButtonClick = () => {
    // Redirect to the desired page
    window.location.href = "/dashboard-home";
  };
  return (
    <form className="form-style1">
      <div className="mb25">
        <label className="form-label fw600 dark-color">E-mail</label>
        <input
          type="email"
          className="form-control"
          placeholder="Entrez votre e-mail"
          required
        />
      </div>
      {/* End email */}

      <div className="mb15">
        <label className="form-label fw600 dark-color">Mot de passe</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter votre mot de passe"
          required
        />
      </div>
      {/* End Password */}

      <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb10">
        <label className="custom_checkbox fz14 ff-heading">
          Souvenez de moi
          <input type="checkbox" defaultChecked="checked" />
          <span className="checkmark" />
        </label>
        <a className="fz14 ff-heading" href="#">
          Mot de passe oublié?
        </a>
      </div>
      {/* End  Lost your password? */}

      <div className="d-grid mb20">
        <button
          className="ud-btn btn-thm"
          type="button"
          onClick={handleButtonClick}
        >
          Se connecter <i className="fal fa-arrow-right-long" />
        </button>
      </div>
      {/* End submit */}
      {/* 
      <div className="hr_content mb20">
        <hr />
        <span className="hr_top_text">OR</span>
      </div>

      <div className="d-grid mb10">
        <button className="ud-btn btn-white" type="button">
          <i className="fab fa-google" /> Continue Google
        </button>
      </div>
      <div className="d-grid mb10">
        <button className="ud-btn btn-fb" type="button">
          <i className="fab fa-facebook-f" /> Continue Facebook
        </button>
      </div>
      <div className="d-grid mb20">
        <button className="ud-btn btn-apple" type="button">
          <i className="fab fa-apple" /> Continue Apple
        </button>
      </div> */}
      <p className="dark-color text-center mb0 mt10">
        Vous n'êtes pas inscrit?{" "}
        <Link className="dark-color fw600" to="/register">
          Demander un compte.
        </Link>
      </p>
    </form>
  );
};

export default SignIn;
