import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PropertyAddress = ({ id }) => {
  const offers = useSelector((state) => state.offers.offers);
  const [address, setAddress] = useState({});
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const offer = offers.find((offer) => offer._id === id);
    if (offer) {
      setAddress({
        country: offer.country,
      });
      setCoordinates({
        lat: offer.latitude,
        lng: offer.longitude,
      });
    }
  }, [offers, id]);

  if (!address.country) {
    return <div>Loading...</div>;
  }

  return (
    <>
      

      <div className="col-md-6 col-xl-4">
        <div className="d-flex justify-content-between">
          <div className="pd-list">
            <p className="fw600 mb-0 ff-heading dark-color">Etat / Pays</p>
          </div>
          <div className="pd-list">
            <p className="text mb-0">{address.country}</p>
          </div>
        </div>
      </div>

      <div className="col-md-12">
        <iframe
          className="position-relative bdrs12 mt30 h250"
          loading="lazy"
          src={`https://maps.google.com/maps?q=${coordinates.lat},${coordinates.lng}&t=m&z=14&output=embed&iwloc=near`}
          title={address.address}
          aria-label={address.address}
        />
      </div>
    </>
  );
};

export default PropertyAddress;
