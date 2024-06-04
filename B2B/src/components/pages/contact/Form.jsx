import React from "react";

const Form = () => {
  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-lg-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Titre</label>
            <input
              type="text"
              className="form-control"
              placeholder="Titre de service"
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-lg-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Type de service
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="EX : expert contable, avocat, expert financier, autre.."
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Lieu de la Prestation
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Indiquez l'adresse ou les endroits où le service est requis."
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-12">
          <div className="mb10">
            <label className="heading-color ff-heading fw600 mb10">
              Description du Besoin
            </label>
            <textarea
              cols={30}
              rows={4}
              placeholder="Veuillez décrire en détail ce que vous attendez de notre service."
              defaultValue={""}
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-12">
          <div className="d-grid">
            <button type="submit" className="ud-btn btn-thm">
              Soumettre
              <i className="fal fa-arrow-right-long" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
