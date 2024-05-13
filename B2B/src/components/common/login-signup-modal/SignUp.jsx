import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { addAccountRequest } from "../../../Actions/accountrequest.actions";
import { Tooltip as ReactTooltip } from "react-tooltip";

const SignUp = () => {
  const dispatch = useDispatch();
  const handleChangeSelect = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      Country: selectedOption.value,
    }));
  };
  const [uploadedImage, setUploadedImage] = useState(null);

  const [formData, setFormData] = useState({
    Fullname: "",
    Companyname: "",
    Professionalemail: "",
    Password: "",
    Confirmpassword: "",
    Telephonecode: "",
    Phonenumber: "",
    Websiteurl: "",
    Adresse: "",
    Country: "",
    City: "",
    Taxregistrationnumber: "",
    Status: "on hold",
    Patent: uploadedImage,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAccountRequest(formData));
    // console.log(formData);
    // Optionally, you can reset the form fields here
  };

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

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);

        setFormData({
          ...formData,
          Patent: `${file.name}`,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form className="form-style1" onSubmit={handleSubmit}>
      <div className="mb25">
        <label className="form-label fw600 dark-color">Nom complet</label>
        <input
          type="text"
          className="form-control"
          placeholder="Entrer nom complet"
          name="Fullname"
          value={formData.Fullname}
          onChange={handleChange}
          required
        />
      </div>
      {/* End Nom complet */}

      <div className="mb25">
        <label className="form-label fw600 dark-color">Nom de la société</label>
        <input
          type="text"
          className="form-control"
          placeholder="Entrer Nom société"
          name="Companyname"
          value={formData.Companyname}
          onChange={handleChange}
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
          name="Professionalemail"
          value={formData.Professionalemail}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb25">
        <label className="form-label fw600 dark-color">Mot de passe</label>
        <input
          type="password"
          className="form-control"
          placeholder="Entrez votre mot de passe "
          name="Password"
          value={formData.Password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb25">
        <label className="form-label fw600 dark-color">
          Confirmer mot de passe
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Confirmer votre mot de passe"
          name="Confirmpassword"
          value={formData.Confirmpassword}
          onChange={handleChange}
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
                defaultValue={codePays.find(
                  (option) => option.value === formData.Telephonecode
                )}
                name="colors"
                options={codePays}
                styles={customStyles}
                className="custom-react_select"
                classNamePrefix="select"
                required
                isClearable={true}
                onChange={(selectedOption) =>
                  setFormData({
                    ...formData,
                    Telephonecode: selectedOption.value,
                  })
                }
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
              value={formData.Phonenumber}
              onChange={(e) =>
                setFormData({ ...formData, Phonenumber: e.target.value })
              }
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
          value={formData.Websiteurl}
          onChange={(e) =>
            setFormData({ ...formData, Websiteurl: e.target.value })
          }
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
            value={formData.Adresse}
            onChange={(e) =>
              setFormData({ ...formData, Adresse: e.target.value })
            }
          />
        </div>

        {/* End .col-12 */}
        <div className="col-md-6">
          <div className="widget-wrapper sideborder-dropdown mb-4">
            <label className="fw600 ff-heading mb-2">Pays</label>
            <div className="form-style2 input-group">
              <Select
                defaultValue={inqueryType[0]}
                name="colors"
                options={inqueryType}
                styles={customStyles}
                className="custom-react_select"
                classNamePrefix="select"
                onChange={handleChangeSelect}
                value={inqueryType.find(
                  (option) => option.value === formData.Country
                )}
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
              value={formData.City}
              onChange={(e) =>
                setFormData({ ...formData, City: e.target.value })
              }
            />
          </div>
        </div>
      </div>

      <div className="mb20">
        <label className="form-label fw600 dark-color">
          Matricule fiscale{" "}
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Entrer matricule fiscale"
          required
          value={formData.Taxregistrationnumber}
          onChange={(e) =>
            setFormData({ ...formData, Taxregistrationnumber: e.target.value })
          }
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
            onClick={() => {
              setFormData({ ...formData, Patent: e.target.value });
            }}
            value={formData.Patent}
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
    </form>
  );
};

export default SignUp;
