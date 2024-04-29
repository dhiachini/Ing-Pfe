import { useState, useEffect } from "react";
import Select from "react-select";
import UploadMedia from "../upload-media";

const PropertyDescription = ({ s, n, f }) => {
  const catergoryOptions = [
    { value: "Agriculture", label: "Agriculture" },
    { value: "Vêtements et mode", label: "Vêtements et mode" },
    {
      value: "Construction et immobilier",
      label: "Construction et immobilier",
    },
    { value: "Emballage et papier", label: "Emballage et papier" },
  ];
  const listedIn = [
    { value: "À vendre", label: "À vendre" },
    { value: "À Louer", label: "À Louer" },
    { value: "Investissement", label: "Investissement" },
  ];
  const PropertyStatus = [
    { value: "Tunisie", label: "Tunisie" },
    { value: "Algérie", label: "Algérie" },
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

  const [form, setForm] = useState({
    offertitle: "",
    description: "",
    categorie: null,
    subcategorie: null,
    transaction: null,
    pays: null,
    price: "",
  });

  // setSuivant(suivant + 1);

  const handlePrecedent = () => {
    setPrecedent(precedent - 1);
  };
  const isEmpty = (obj) => {
    for (let key in obj) {
      if (obj[key] === undefined || obj[key] === null || obj[key] === "") {
        return false;
      }
    }
    return true;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setForm({ ...form, [name]: value });
    console.log(form);
  };
  const handleSelectCategorie = (categorie) => {
    setForm({ ...form, categorie });

    console.log(form);
  };
  const handleSelectSubcategorie = (subcategorie) => {
    setForm({ ...form, subcategorie });
    console.log(form);
  };
  const handleSelectTransaction = (transaction) => {
    setForm({ ...form, transaction });
    console.log(form);
  };
  const handleSelectPays = (pays) => {
    setForm({ ...form, pays });
    console.log(form);
  };
  useEffect(() => {
    if (isEmpty(form)) {
      n();
    } else f();
  }, [form]);

  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Titre</label>
            <input
              type="text"
              className="form-control"
              placeholder="Titre de l'offre"
              name="offertitle"
              value={form.offertitle}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Description
            </label>
            <textarea
              cols={30}
              rows={5}
              placeholder="Il existe de nombreuses variantes de passages."
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Choisir une catégorie
            </label>
            <div className="location-area">
              <Select
                // defaultValue={[catergoryOptions[1]]}
                name="categorie"
                options={catergoryOptions}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                value={form.categorie}
                onChange={handleSelectCategorie}
              />
            </div>
          </div>
        </div>
        {/* End .col-6 */}
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Choisir une sous catégorie
            </label>
            <div className="location-area">
              <Select
                defaultValue={[catergoryOptions[1]]}
                name="subcategoorie"
                options={catergoryOptions}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                value={form.subcategorie}
                onChange={handleSelectSubcategorie}
              />
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Type de transaction
            </label>
            <div className="location-area">
              <Select
                defaultValue={[listedIn[1]]}
                name="transaction"
                options={listedIn}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                value={form.transaction}
                onChange={handleSelectTransaction}
              />
            </div>
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Pays</label>
            <div className="location-area">
              <Select
                defaultValue={[PropertyStatus[1]]}
                name="pays"
                options={PropertyStatus}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                value={form.pays}
                onChange={handleSelectPays}
              />
            </div>
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Prix ​​en TND
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Entrer le prix"
              name="price"
              value={form.price}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* End .col-6 */}

        <div className="col-sm-6 col-xl-4">
          <a
            // href="/offres"
            style={{
              display: "inline-block",
              marginTop: "70px",
              marginLeft: "246px",
            }}
          >
            {/* <button type="button" className="btn ud-btn btn-thm" >
              Suivant
              <i className="fal fa-arrow-right-long" />
            </button> */}
          </a>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-6 col-xl-4"></div>
        {/* End .col-6 */}
      </div>
    </form>
  );
};

export default PropertyDescription;
