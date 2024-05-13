
import { Link } from "react-router-dom";
import React from "react";
import {useLocation } from "react-router-dom";

const SidebarDashboard = () => {
  const { pathname } = useLocation()

  const sidebarItems = [
    {
      title: "Principal",
      items: [
        {
          href: "/dashboard-home",
          icon: "flaticon-discovery",
          text: "Tableau de Bord",
        },
        {
          href: "/dashboard-message",
          icon: "flaticon-chat-1",
          text: "Message",
        },
      ],
    },
    {
      title: "GÉRER MES ANNONCES",
      items: [
        {
          href: "/AjouterOffres",
          icon: "flaticon-new-tab",
          text: "Ajouter Offre",
        },
        {
          href: "/mesoffres",
          icon: "flaticon-home",
          text: "Mes Offres",
        },
        {
          href: "/ajouterdemandes",
          icon: "flaticon-new-tab",
          text: "Ajouter Demande",
        },
        {
          href: "/mesdemandes",
          icon: "flaticon-home",
          text: "Mes Demandes",
        },
        {
          href: "/dashboard-my-favourites",
          icon: "flaticon-like",
          text: "Mes Annonces Favoris",
        },
        {
          href: "/dashboard-saved-search",
          icon: "flaticon-search-2",
          text: "Recherches Enregistrée",
        },
        {
          href: "/dashboard-reviews",
          icon: "flaticon-review",
          text: "Reviews",
        },
      ],
    },
    {
      title: "GÉRER SON COMPTE",
      items: [
        {
          href: "/dashboard-my-package",
          icon: "flaticon-protection",
          text: "Mon Colis",
        },
        {
          href: "/dashboard-my-profile",
          icon: "flaticon-user",
          text: "Mon Profile",
        },
        {
          href: "/home-v9",
          icon: "flaticon-logout",
          text: "Déconnexion",
        },
      ],
    },
  ];

  return (
    <div className="dashboard__sidebar d-none d-lg-block">
      <div className="dashboard_sidebar_list">
        {sidebarItems.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <p
              className={`fz15 fw400 ff-heading ${
                sectionIndex === 0 ? "mt-0" : "mt30"
              }`}
            >
              {section.title}
            </p>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="sidebar_list_item">
                <Link
                  to={item.href}
                  className={`items-center   ${
                    pathname == item.href ? "-is-active" : ""
                  } `}
                >
                  <i className={`${item.icon} mr15`} />
                  {item.text}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarDashboard;
