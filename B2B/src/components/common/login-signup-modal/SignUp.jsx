import { Link } from "react-router-dom";
import Select from "react-select";
import React, { useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

const SignUp = () => {
  const inqueryType = [
    { value: "Tunisie", label: "Tunisie" },
    { value: "Algérie", label: "Algérie" },
  ];
  const codePays = [
    { value: "+216", label: "+216 (Tunisia)" },
    { value: "+213", label: "+213 (Algeria)" },
  ];

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#eb6753"
          : isHovered
          ? "#eb675312"
          : isFocused
          ? "#eb675312"
          : undefined,
      };
    },
  };

  const [uploadedImage, setUploadedImage] = useState(null);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form className="form-style1">
      <div className="mb25">
        <label className="form-label fw600 dark-color">Nom complet</label>
        <input
          type="email"
          className="form-control"
          placeholder="Entrer nom complet"
          required
        />
      </div>
      {/* End Nom complet */}

      <div className="mb25">
        <label className="form-label fw600 dark-color">Nom de la société</label>
        <input
          type="email"
          className="form-control"
          placeholder="Entrer Nom société"
          required
        />
      </div>
      {/* End Nom société*/}

      <div className="mb25">
        <label className="form-label fw600 dark-color">
          E-mail professionnel
        </label>
        <input
          type="email"
          className="form-control"
          placeholder="Entrez votre e-mail professionnel"
          required
        />
      </div>

      <div className="mb25">
        <label className="form-label fw600 dark-color">Mot de passe</label>
        <input
          type="email"
          className="form-control"
          placeholder="Entrez votre mot de passe "
          required
        />
      </div>
      <div className="mb25">
        <label className="form-label fw600 dark-color">
          Confirmer mot de passe
        </label>
        <input
          type="email"
          className="form-control"
          placeholder="Confirmer votre mot de passe"
          required
        />
      </div>

      <div className="row">
      <div className="col-md-6">
        <div className="widget-wrapper sideborder-dropdown mb-4">
          <label className="fw600 ff-heading mb-2">
            Indicatif téléphonique
          </label>
          <div className="form-style2 input-group">
            <Select
              defaultValue={[codePays[0]]}
              name="colors"
              options={codePays}
              styles={customStyles}
              className="custom-react_select"
              classNamePrefix="select"
              required
              isClearable={true}
            />
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="mb-4">
          <label className="fw600 ff-heading mb-2">Téléphone</label>
          <input
            type="text"
            className="form-control"
            placeholder="Entrer numéro tél"
            required
          />
        </div>
      </div>
      </div>
      

      <div className="mb20">
        <label className="form-label fw600 dark-color">Site web</label>
        <input
          type="text"
          className="form-control"
          placeholder="Entrer Url site web"
          required
        />
      </div>

      <div className="row">
        <div className="mb20">
          <label className="form-label fw600 dark-color">Adresse</label>
          <input
            type="text"
            className="form-control"
            placeholder="Entrer adresse"
            required
          />
        </div>
        {/* End .col-12 */}
        <div className="col-md-6">
          <div className="widget-wrapper sideborder-dropdown mb-4">
            <label className="fw600 ff-heading mb-2">Pays</label>
            <div className="form-style2 input-group">
              <Select
                defaultValue={[inqueryType[0]]}
                name="colors"
                options={inqueryType}
                styles={customStyles}
                className="custom-react_select"
                classNamePrefix="select"
                required
                isClearable={true}
              />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-4">
            <label className="fw600 ff-heading mb-2">Ville</label>
            <input
              type="text"
              className="form-control"
              placeholder="Entrer ville"
              required
            />
          </div>
        </div>
        {/* End .col-6 */}

        {/* End .col-6 */}
      </div>
      {/* <input
          type="text"
          className="form-control"
          placeholder="Enter Adresse"
          required
        /> */}

      {/* End Password */}

      <div className="mb20">
        <label className="form-label fw600 dark-color">
          Matricule fiscale{" "}
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Entrer matricule fiscale"
          required
        />
      </div>

      <div className="profile-box position-relative d-md-flex align-items-end mb50">
        <div className="profile-img new position-relative overflow-hidden bdrs12 mb20-sm">
          <img
            className="w-100 cover h-100"
            src={uploadedImage || "/images/listings/profile-1.jpg"}
            alt="profile avatar"
          />

          <button
            className="tag-del"
            style={{ border: "none" }}
            data-tooltip-id="profile_del"
            onClick={() => setUploadedImage(null)}
          >
            <span className="fas fa-trash-can" />
          </button>

          <ReactTooltip id="profile_del" place="right" content="Delete Image" />
        </div>
        {/* End .profile-img */}

        <div className="profile-content ml30 ml0-sm">
          <label className="upload-label pointer">
            <input
              type="file"
              accept="image/jpeg,image/png"
              onChange={handleUpload}
              style={{ display: "none" }}
            />
            <div className="ud-btn btn-white2 mb30">
              Télécharger patente
              <i className="fal fa-arrow-right-long" />
            </div>
          </label>
          <p className="text">Photo doit être sous format JPEG ou PNG</p>
          <strong>
            <span className="text" style={{ fontSize: "12px", color: "red" }}>
              Taille maximale : 2Mo
            </span>
          </strong>
        </div>
      </div>
      <div className="d-grid mb20">
        <button className="ud-btn btn-thm" type="submit">
          Envoyer <i className="fal fa-arrow-right-long" />
        </button>
      </div>
      {/* <div className="hr_content mb20">
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
      </div>
      <p className="dark-color text-center mb0 mt10">
        Already Have an Account?{" "}
        <Link className="dark-color fw600" to="/login">
          Login
        </Link>
      </p> */}
    </form>
  );
};

export default SignUp;
