import React from "react";

const statisticsData = [
  {
    text: "Mes Annonces",
    title: "583",
    icon: "flaticon-home",
  },
  {
    text: "Vues Totales",
    title: "192",
    icon: "flaticon-search-chart",
  },
  {
    text: "Total des avis des visiteurs",
    title: "438",
    icon: "flaticon-review",
  },
  {
    text: "Total des favoris",
    title: "67",
    icon: "flaticon-like",
  },
];

const TopStateBlock = () => {
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
