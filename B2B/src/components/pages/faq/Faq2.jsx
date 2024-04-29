const Faq2 = () => {
  const faqItems = [
    {
      id: "headingOne",
      question: "Est-ce que l'utilisation de la plateforme est gratuite ?",
      answer:
        "Oui, l'utilisation de base de notre plateforme est gratuite. Cependant, certaines fonctionnalités avancées peuvent nécessiter un abonnement ou des frais supplémentaires.",
    },
    {
      id: "headingTwo",
      question: "Puis-je contacter le support technique en cas de problème ?",
      answer:
        "Oui, notre équipe de support technique est disponible pour vous aider en cas de problème ou de question. Vous pouvez nous contacter à tout moment via notre formulaire de contact ou par email.",
    },
    {
      id: "headingThree",
      question: "Comment puis-je mettre à jour mes offres ou mes demandes ?",
      answer:
        "Vous pouvez mettre à jour ou supprimer vos offres et demandes à tout moment en accédant à votre compte sur notre plateforme et en utilisant les fonctionnalités de gestion des annonces disponibles.",
    },
    {
      id: "headingFour",
      question: "Puis-je utiliser la plateforme pour trouver des partenaires commerciaux en dehors de la Tunisie et de l'Algérie ?",
      answer:
        "Notre plateforme est spécifiquement conçue pour faciliter les échanges économiques entre la Tunisie et l'Algérie. Cependant, nous encourageons toute collaboration internationale et sommes ouverts à discuter de possibilités de partenariat avec d'autres pays.",
    },
  ];

  return (
    <div className="accordion" id="accordionExample2">
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
            data-parent="#accordionExample2"
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

export default Faq2;
