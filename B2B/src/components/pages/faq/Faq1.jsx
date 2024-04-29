const Faq1 = () => {
  const faqItems = [
    {
      id: "headingOne",
      question: "Quels sont les objectifs de la plateforme d'échange économique et d'investissement entre la Tunisie et l'Algérie ?",
      answer:
        " L'objectif principal de notre plateforme est de faciliter les échanges commerciaux et les investissements entre les entreprises tunisiennes et algériennes, en offrant un espace centralisé pour publier des offres et des demandes dans divers secteurs économiques.",
    },
    {
      id: "headingTwo",
      question: "Qui peut utiliser la plateforme d'échange économique ?",
      answer:
        "Notre plateforme est ouverte aux entreprises et aux entrepreneurs basés en Tunisie et en Algérie, ainsi qu'à toute personne intéressée par les échanges économiques entre ces deux pays.",
    },
    {
      id: "headingThree",
      question: "Quels types d'offres et de demandes peuvent être publiés sur la plateforme ?",
      answer:
        "Les utilisateurs peuvent publier des offres et des demandes dans divers domaines tels que l'agriculture, la confection, le tourisme, les services, etc. Tout type d'échange économique légitime est le bienvenu sur notre plateforme.",
    },
    {
      id: "headingFour",
      question: "Comment puis-je m'inscrire sur la plateforme ?",
      answer:
        "Pour vous inscrire sur notre plateforme, vous devez remplir le formulaire de demande de compte disponible sur notre site web. Une fois votre compte accepté par l'administrateur, vous pourrez commencer à publier des offres et des demandes.",
    },
  ];

  return (
    <div className="accordion" id="accordionExample">
      {faqItems.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={item.id}>
            <button
              className={`accordion-button ${index === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index + 1}`}
              aria-expanded={index === 2 ? "true" : "false"}
              aria-controls={`collapse${index + 1}`}
            >
              {item.question}
            </button>
          </h2>
          <div
            id={`collapse${index + 1}`}
            className={`accordion-collapse collapse ${
              index === 2 ? "show" : ""
            }`}
            aria-labelledby={item.id}
            data-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq1;
