import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PropertyHeader = ({ id }) => {
  const offers = useSelector((state) => state.offers.offers);
  const [data, setData] = useState({});
  const [currency, setCurrency] = useState("DZD"); // Default currency is DZD

  useEffect(() => {
    const offer = offers.find((offer) => offer._id === id);
    if (offer) {
      setData(offer);
      // Determine currency based on country
      if (offer.country === "Tunisie") {
        setCurrency("TND");
      } else {
        setCurrency("DZD");
      }
    }
  }, [offers, id]);

  if (!data._id) {
    return <div>Loading...</div>;
  }

  const createdAt = new Date(data.createdAt);
  const currentDate = new Date();
  const timeDiff = currentDate.getTime() - createdAt.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

  return (
    <>
      <div className="col-lg-8">
        <div className="single-property-content mb30-md">
          <h2 className="sp-lg-title">{data.title}</h2>
          <div className="pd-meta mb15 d-md-flex align-items-center">
            <p className="text fz15 mb-0 bdrr1 pr10 bdrrn-sm">{data.country}</p>
            <a className="ff-heading text-thm fz15 bdrr1 pr10 ml0-sm ml10 bdrrn-sm"></a>
            <p className="text fz15 mb-0 bdrr1 pr10 bdrrn-sm">
              {data.category}
            </p>
            <a
              className="ff-heading text-thm fz15 bdrr1 pr10 ml0-sm ml10 bdrrn-sm"
              href="#"
            >
              <i className="fas fa-circle fz10 pe-2" />
              {data.transactionType}
            </a>
            <a
              className="ff-heading bdrr1 fz15 pr10 ml10 ml0-sm bdrrn-sm"
              href="#"
            >
              <i className="far fa-clock pe-2" />
              <span> Il y a </span>
              {daysDiff} jours
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="single-property-content">
          <div className="property-action text-lg-end">
            <div className="d-flex mb20 mb10-md align-items-center justify-content-lg-end">
              <a className="icon mr10" href="#">
                <span className="flaticon-like" />
              </a>
            </div>
            <h3 className="price mb-0">
              {data.price} {currency}
            </h3>
            <p className="text space fz15">{/* Additional details */}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyHeader;
