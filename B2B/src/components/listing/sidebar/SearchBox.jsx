


import React from "react";

const SearchBox = ({filterFunctions}) => {
  return (
    <div className="search_area">
      <input
        type="text"
        className="form-control"
        placeholder="Rechercher"
        onChange={(e)=>filterFunctions?.setSearchQuery(e.target.value)}
      />
      <label>
        <span className="flaticon-search" />
      </label>
    </div>
  );
};

export default SearchBox;
