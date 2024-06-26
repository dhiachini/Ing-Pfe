import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOffers } from '../../../../../Redux/Actions/offersActions';
import { fetchAllFormservices } from '../../../../../Redux/Actions/formserviceActions';


const TopStateBlock = () => {
  const dispatch = useDispatch();
  const { offers } = useSelector((state) => state.offers);
  const { formservice } = useSelector((state) => state.formservice);

  const [offerCount, setOfferCount] = useState(0);
  const [formserviceCount, setFormserviceCount] = useState(0);

  useEffect(() => {
    dispatch(fetchOffers());
    dispatch(fetchAllFormservices());
  }, [dispatch]);

  useEffect(() => {
    if (offers) {
      setOfferCount(offers.length);
    }
  }, [offers]);

  useEffect(() => {
    if (formservice) {
      setFormserviceCount(formservice.length);
    }
  }, [formservice]);

  const statisticsData = [
    {
      text: "Total mes offres",
      title: offerCount.toString(),
      icon: "flaticon-home",
    },
    {
      text: "Total demandes",
      title: offerCount.toString(), // Adjust this if you have separate logic for counting demandes
      icon: "flaticon-search-chart",
    },
    {
      text: "Fiches service",
      title: formserviceCount.toString(),
      icon: "flaticon-review",
    },
    {
      text: "Total des favoris",
      title: "67", // Replace this with actual data if available
      icon: "flaticon-like",
    },
  ];

  return (
    <>
      {statisticsData.map((data, index) => (
        <div key={index} className="col-sm-6 col-xxl-3">
          <div className="d-flex justify-content-between statistics_funfact">
            <div className="details">
              <div className="text fz25">{data.text}</div>
              <div className="title">{data.title}</div>
            </div>
            <div className="icon text-center">
              <i className={data.icon} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopStateBlock;
