import Select from "react-select";

const Bathroom = ({ filterFunctions }) => {
  const subcategoryOptions = [
    { value: "Cultures", label: "Cultures" },
    { value: "Manufacture", label: "Manufacture" },
    { value: "Commerce", label: "Commerce" },
    { value: "Informatique", label: "Informatique" },
    { value: "Télécommunications", label: "Télécommunications" },
    { value: "Biotechnologie", label: "Biotechnologie" },
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

  return (
    <Select
      defaultValue={[subcategoryOptions[0]]}
      name="colors"
      styles={customStyles}
      options={subcategoryOptions}
      value={{
        value: filterFunctions.location,
        label: filterFunctions.location,
      }}
      className="select-custom filterSelect"
      classNamePrefix="select"
      onChange={(e) => filterFunctions?.handlelocation(e.value)}
      required
    />
  );
};
export default Bathroom;
