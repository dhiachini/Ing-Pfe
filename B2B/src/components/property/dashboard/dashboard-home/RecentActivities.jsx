import React from "react";

const activities = [
  {
    icon: "flaticon-home",
    text: "Votre annonce pour l'offre située à Carthage, Tunisie, a été validée et publiée",
    highlight: "House on the Beverly Hills",
  },
  {
    icon: "flaticon-review",
    text: "Dollie Horton a laissé un avis sur votre offre située à Oran, Algérie. Cela peut influencer les décisions des futurs intéressés",
    highlight: "House on the Northridge",
  },
  {
    icon: "flaticon-like",
    text: " Un utilisateur a ajouté votre offre située à Sidi Bou Saïd, Tunisie, dans ses favoris",
    highlight: "Triple Story House for Rent",
  },
  {
    icon: "flaticon-home",
    text: "Votre offre à Carthage, Tunisie, est maintenant sur le marché, prête à attirer des investisseurs potentiels.",
    highlight: "House on the Beverly Hills",
  },
  
];

const RecentActivities = () => {
  return (
    <>
      {activities.map((activity, index) => (
        <div
          key={index}
          className="recent-activity d-sm-flex align-items-center mb20"
        >
          <span className={`icon me-3 ${activity.icon} flex-shrink-0`} />
          <p className="text mb-0 flex-grow-1">
            {activity.text.split(activity.highlight).map((part, i, array) =>
              i === array.length - 1 ? (
                part
              ) : (
                <>
                  {part}
                  <span key={i} className="fw600">{activity.highlight}</span>
                </>
              )
            )}
          </p>
        </div>
      ))}
      {/* <div className="d-grid">
        <a href="#" className="ud-btn btn-white2">
          View More
          <i className="fal fa-arrow-right-long" />
        </a>
      </div> */}
    </>
  );
};

export default RecentActivities;
