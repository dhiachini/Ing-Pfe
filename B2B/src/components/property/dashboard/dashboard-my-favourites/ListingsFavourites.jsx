import React from "react";
import listings from "@/data/listings";
import { useState } from "react";
import { Link } from "react-router-dom";

const ListingsFavourites = () => {
  const [favoriteListings, setFavoriteListings] = useState(
    listings.slice(0, 8)
  );

  const handleDeleteListing = (id) => {
    const updatedListings = favoriteListings.filter(
      (listing) => listing.id !== id
    );
    setFavoriteListings(updatedListings);
  };

  return (
    <>
      {favoriteListings.length === 0 ? (
        <h3>Aucune catégorie disponible.</h3>
      ) : (
        favoriteListings.map((listing) => (
          <div className="col-md-6 col-lg-4 col-xl-3" key={listing.id}>
            <div className="listing-style1 style2">
              <div className="list-thumb">
                <img
                  className="w-100 h-100 cover"
                  src={listing.image}
                  alt="listings"
                />
                <div className="list-price">
                  {listing.price} <span>Offres</span>
                </div>
              </div>
              
              <div className="list-content">
                <h6 className="list-title">
                  <Link to={'/offres '}>{listing.title}</Link>
                </h6>
                <p className="list-text">{listing.descrip}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ListingsFavourites;
