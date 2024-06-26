import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllUsersOffers } from "../../../../../Redux/Actions/offersActions";
import PaginationTwo from "../../PaginationTwo";

const FeaturedListings = ({ colstyle }) => {
  const dispatch = useDispatch();
  const { offers, loading, error } = useSelector((state) => state.offers);
  const [pageNumber, setPageNumber] = useState(1);
  const pageCapacity = 5; // Nombre d'offres par page

  useEffect(() => {
    dispatch(fetchAllUsersOffers());
  }, [dispatch]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur lors du chargement des offres : {error}</p>;

  // Calculer les données paginées
  const paginatedData = offers.slice(
    (pageNumber - 1) * pageCapacity,
    pageNumber * pageCapacity
  );

  const MAX_DESCRIPTION_LENGTH = 100; // Maximum number of characters to display

const truncateDescription = (description) => {
  if (description.length <= MAX_DESCRIPTION_LENGTH) {
    return description;
  }
  return description.substring(0, MAX_DESCRIPTION_LENGTH) + '...';
};


  return (
    <>
      <div className="row">
        {paginatedData.map((listing) => (
          <div
            className={` ${colstyle ? "col-sm-6 col-lg-6" : "col-sm-12"}  `}
            key={listing.id}
          >
            <div
              className={
                colstyle
                  ? "listing-style1"
                  : "listing-style1 listCustom listing-type"
              }
            >
              <div className="list-thumb">
                <img
                  className="w-100 cover"
                  style={{ height: "253px" }}
                  src={listing.images[0]}
                  alt="listings"
                />
                <div className="sale-sticker-wrap">
                  {!listing.forRent && (
                    <div className="list-tag fz12">
                      <span className="flaticon-electricity me-2" />
                      En vedette
                    </div>
                  )}
                </div>

                <div className="list-price">
                  {listing.price} <span>TND</span>
                </div>
              </div>
              <div className="list-content">
                <h6 className="list-title">
                <Link to={`/detailsoffre/${listing._id}`}>{listing.title}</Link>
                </h6>

                <p className="list-text2">
                {truncateDescription(listing.description)}
                </p>
                <p className="list-text">
                  Date de publication : {new Date(listing.createdAt).toLocaleDateString()}
                </p>
                <hr className="mt-2 mb-2" />
                <div className="list-meta2 d-flex justify-content-between align-items-center">
                  <div className="icons d-flex align-items-center">
                    <a href="#">
                      <span className="flaticon-like" />
                    </a>
                  </div>
                  <div>
                    <p style={{ color: "red" }} className="list-text">
                      Date d'expiration : {new Date(new Date(listing.createdAt).setDate(new Date(listing.createdAt).getDate() + 15)).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        <PaginationTwo
          pageCapacity={pageCapacity}
          data={offers}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
    </>
  );
};

export default FeaturedListings;
