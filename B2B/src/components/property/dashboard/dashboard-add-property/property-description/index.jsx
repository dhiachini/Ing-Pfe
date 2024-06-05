import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { updateStepOneData } from "../../../../../../Redux/Slices/offersSlice";


const PropertyDescription = ({ updateForm, s, n, f }) => {
  const dispatch = useDispatch();
  const categoryOptions = [
    { value: "Agriculture", label: "Agriculture" },
    { value: "Vêtements et mode", label: "Vêtements et mode" },
    { value: "Construction et immobilier", label: "Construction et immobilier" },
    { value: "Emballage et papier", label: "Emballage et papier" }
  ];
  const listedIn = [
    { value: "À vendre", label: "À vendre" },
    { value: "À Louer", label: "À Louer" },
    { value: "Investissement", label: "Investissement" }
  ];
  const PropertyStatus = [
    { value: "Tunisie", label: "Tunisie" },
    { value: "Algérie", label: "Algérie" }
  ];

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => ({
      ...styles,
      backgroundColor: isSelected ? "#eb6753" : isHovered ? "#eb675312" : isFocused ? "#eb675312" : undefined
    }),
    menu: (provided) => ({
      ...provided,
      maxHeight: "200px",
      overflowY: "auto"
    })
  };

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: null,
    subcategory: null,
    transactionType: null,
    country: null,
    price: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    if (Object.values(form).every(value => value !== "" && value !== null)) {
      n();
      dispatch(updateStepOneData(form))
    } else {
      f();
    }
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
              name="title"
              value={form.title}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Description</label>
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
            <label className="heading-color ff-heading fw600 mb10">Choisir une catégorie</label>
            <div className="location-area">
              <Select
                name="category"
                options={categoryOptions}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                value={form.category}
                onChange={(value) => handleSelectChange("category", value)}
              />
            </div>
          </div>
        </div>
        {/* End .col-6 */}
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Choisir une sous catégorie</label>
            <div className="location-area">
              <Select
                name="subcategory"
                options={categoryOptions}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                value={form.subcategory}
                onChange={(value) => handleSelectChange("subcategory", value)}
              />
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Type de transaction</label>
            <div className="location-area">
              <Select
                name="transactionType"
                options={listedIn}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                value={form.transactionType}
                onChange={(value) => handleSelectChange("transactionType", value)}
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
                name="country"
                options={PropertyStatus}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                value={form.country}
                onChange={(value) => handleSelectChange("country", value)}
              />
            </div>
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              {form.transaction && form.transaction.label === "Investissement"
                ? "Capital"
                : form.pays && form.pays.label === "Algérie"
                ? "Prix en DZD"
                : "Prix en TND"}
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={
                form.transaction && form.transaction.label === "Investissement"
                  ? "Entrer votre Capital"
                  : "Entrer le prix"
              }
              name="price"
              value={form.price}
              onChange={handleChange}
            />
          </div>
        </div>

        

        <div className="col-sm-6 col-xl-4"></div>
        {/* End .col-6 */}
      </div>
    </form>
  );
};

export default PropertyDescription;
