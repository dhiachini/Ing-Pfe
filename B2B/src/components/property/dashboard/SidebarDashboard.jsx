import { Link, useNavigate, useLocation } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../../../Redux/Actions/authActions";

const SidebarDashboard = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAction());
    navigate('/home-v9');
  };

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
          href: "/dashboard-my-package",
          icon: "flaticon-protection",
          text: "mes fiches service",
        },
      ],
    },
    {
      title: "GÉRER SON COMPTE",
      items: [
        {
          href: "/dashboard-my-profile",
          icon: "flaticon-user",
          text: "Mon Profile",
        },
        {
          icon: "flaticon-logout",
          text: "Déconnexion",
          action: handleLogout,
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
                {item.href ? (
                  <Link
                    to={item.href}
                    className={`items-center ${
                      pathname === item.href ? "-is-active" : ""
                    } `}
                  >
                    <i className={`${item.icon} mr15`} />
                    {item.text}
                  </Link>
                ) : (
                  <button
                    onClick={item.action}
                    className={`items-center ${
                      pathname === item.href ? "-is-active" : ""
                    } `}
                    style={{ background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer" }}
                  >
                    <i className={`${item.icon} mr15`} />
                    {item.text}
                  </button>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarDashboard;
