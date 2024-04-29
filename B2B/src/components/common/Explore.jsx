
import { Link } from "react-router-dom";

const Explore = () => {
  // Array of iconbox data
  const iconboxData = [
    {
      id: 1,
      icon: "/images/icon/property-buy.svg",
      title: "Trouver un offre",
      text: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
      linkText: "Ajouter offre",
    },
    {
      id: 2,
      icon: "/images/icon/property-sell.svg",
      title: "Trouver une demande",
      text: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
      linkText: "Ajouter demande",
    },
    {
      id: 3,
      icon: "/images/icon/property-rent.svg",
      title: "Trouver investir",
      text: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
      linkText: "Investir",
    },
  ];

  return (
    <>
      {iconboxData.map((item) => (
        <div
          className="col-sm-6 col-lg-4"
          key={item.id}
          data-aos="fade-up"
          data-aos-delay={(item.id + 1) * 100} // Increase delay for each item
        >
          <div className="iconbox-style2 text-center">
            <div className="icon">
              <img  src={item.icon} alt="icon" />
            </div>
            <div className="iconbox-content">
              <h4 className="title">{item.title}</h4>
              <p className="text">{item.text}</p>
              <Link to="/grid-default" className="ud-btn btn-white2">
                {item.linkText}
                <i className="fal fa-arrow-right-long" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Explore;
