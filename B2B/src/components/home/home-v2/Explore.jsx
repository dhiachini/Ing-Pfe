

const Explore = () => {
  // Array of iconbox data
  const iconboxData = [
    {
      icon: "/images/icon/online-shop-ecommerce.svg",
      title: "Trouver offre",
      text: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
      linkText: "Ajouter offre",
    },
    {
      icon: "/images/icon/laptop-svgrepo-com.svg",
      title: "Trouver demande",
      text: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
      linkText: "Ajouter demande",
    },
    {
      icon: "/images/icon/cash-svgrepo-com.svg",
      title: "Trouver investisseur",
      text: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
      linkText: "Investir",
    },
  ];

  return (
    <>
      {iconboxData.map((item, index) => (
        <div
          className="col-sm-6 col-lg-4"
          key={index}
          data-aos="fade-up"
          data-aos-delay={(index + 1) * 100} // Increase delay for each item
        >
          <div className="iconbox-style3 text-center">
            <div className="icon">
              <img  src={item.icon} alt="icon" />
            </div>
            <div className="iconbox-content">
              <h4 className="title">{item.title}</h4>
              <p className="text">{item.text}</p>
              <a href="#" className="ud-btn btn-thm3">
                {item.linkText}
                <i className="fal fa-arrow-right-long" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Explore;
