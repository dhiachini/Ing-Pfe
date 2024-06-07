

const Explore = () => {
  // Array of iconbox data
  const iconboxData = [
    {
      icon: "/images/icon/online-shop-ecommerce.svg",
      title: "Trouver offre",
      text: "Parcourez une variété d'offres commerciales et de partenariats provenant des entreprises les plus dynamiques de la Tunisie et de l'Algérie. Vous avez une offre à proposer ?  Publiez-la sur ALGÉTUN et atteignez un large public d'entreprises et de professionnels des deux pays.",
      linkText: "Ajouter offre",
    },
    {
      icon: "/images/icon/laptop-svgrepo-com.svg",
      title: "Trouver demande",
      text: "Recherchez des demandes spécifiques dans divers secteurs d'activité pour identifier de nouvelles opportunités de collaboration. Exprimez vos besoins en publiant des demandes sur notre plateforme. Que vous soyez à la recherche de matières premières, de services ou de partenariats stratégiques, ajouter votre demande sur ALGÉTUN",
      linkText: "Ajouter demande",
    },
    {
      icon: "/images/icon/cash-svgrepo-com.svg",
      title: "Trouver investisseur",
      text: "Vous souhaitez investir dans des projets prometteurs en Tunisie et en Algérie ? ALGÉTUN vous offre un accès privilégié à de nombreuses offres d'investissement pour faire fructifier votre capital. Vous cherchez des investisseurs pour vos projets ? Publiez votre demande sur ALGÉTUN et attirez des partenaires financiers intéressés.",
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
