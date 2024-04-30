import React from "react";

const MenuWidget = () => {
  const menuSections = [
    {
      title: "Recherche populaire",
      links: [
        { label: "Terrain à vendre", href: "#" },
        { label: "Matériaux", href: "#" },
        { label: "Local à louer", href: "#" },
        { label: "Voiture commercial", href: "#" },
      ],
    },
    {
      title: "Liens rapides",
      links: [
        { label: "Trouver-nous", href: "/contact" },
        { label: "FAQs", href: "/Faq" },
      ],
    },
    {
      title: "Découvrir",
      links: [
        { label: "Offres", href: "/offres" },
        { label: "Demandes", href: "/demandes" },
        { label: "Investissement", href: "#" },
        
      ],
    },
  ];

  return (
    <>
      {menuSections.map((section, index) => (
        <div className="col-auto" key={index}>
          <div className="link-style1 mb-3">
            <h6 className="text-white mb25">{section.title}</h6>
            <ul className="ps-0">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuWidget;
