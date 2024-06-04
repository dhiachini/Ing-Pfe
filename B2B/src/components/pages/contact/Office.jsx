import React from "react";

const Office = () => {
  const offices = [
    {
      id: 2,
      city: "Tunisie",
      icon: "/images/icon/london.svg",
      address: "Tunisie, Sousse, CP 4000",
      phoneNumber: "(315) 905-2321",
    },
    // Add more office objects here...
  ];

  return (
    <div className="row justify-content-center">
      {offices.map((office) => (
        <div className="col-sm-6 col-lg-4" key={office.id}>
          <div className="iconbox-style8 text-center">
            <div className="icon">
              <img  src={office.icon} alt="icon" />
            </div>
            <div className="iconbox-content">
              <h4 className="title">{office.city}</h4>
              <p className="text mb-1">{office.address}</p>
              <h6 className="mb10">{office.phoneNumber}</h6>
              <a className="text-decoration-underline" href="#">
                Open Google Map
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Office;
