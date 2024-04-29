import MainMenu from "@/components/common/MainMenu";
import SidebarPanel from "@/components/common/sidebar-panel";

import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

const DashboardHeader = () => {
  const { pathname } = useLocation();

  const menuItems = [
    {
      title: "Principal",
      items: [
        {
          icon: "flaticon-discovery",
          text: "Tableau de Bord",
          href: "/dashboard-home",
        },
        {
          icon: "flaticon-chat-1",
          text: "Message",
          href: "/dashboard-message",
        },
      ],
    },
    {
      title: "GÉRER LES ANNONCES",
      items: [
        {
          icon: "flaticon-new-tab",
          text: "Ajouter Offre",
          href: "/AjouterOffres",
        },
        {
          icon: "flaticon-home",
          text: "Mes Offres",
          href: "/mesoffres",
        },
        {
          icon: "flaticon-new-tab",
          text: "Ajouter Demande",
          href: "/ajouterdemandes",
        },
        {
          icon: "flaticon-home",
          text: "Mes  Demandes",
          href: "/mesdemandes",
        },
        {
          icon: "flaticon-like",
          text: "Mes Annonces Favoris",
          href: "/dashboard-my-favourites",
        },
        {
          icon: "flaticon-search-2",
          text: "Recherche enregistrée",
          href: "/dashboard-saved-search",
        },
        { icon: "flaticon-review", text: "Reviews", href: "/dashboard-review" },
      ],
    },
    {
      title: "GÉRER SON COMPTE",
      items: [
        {
          icon: "flaticon-protection",
          text: "Mon Colis",
          href: "/dashboard-my-package",
        },
        {
          icon: "flaticon-user",
          text: "Mon Profile",
          href: "/dashboard-my-profile",
        },
        { icon: "flaticon-exit", text: "Déconnexion", href: "/home-v9" },
      ],
    },
  ];

  return (
    <>
      <header className="header-nav nav-homepage-style light-header position-fixed menu-home4 main-menu">
        <nav className="posr">
          <div className="container-fluid pr30 pr15-xs pl30 posr menu_bdrt1">
            <div className="row align-items-center justify-content-between">
              <div className="col-6 col-lg-auto">
                <div className="text-center text-lg-start d-flex align-items-center">
                  <div className="dashboard_header_logo position-relative me-2 me-xl-5">
                    <Link className="logo" to="/">
                      <img src="/images/navbar.png" alt="Header Logo" />
                    </Link>
                  </div>
                  {/* End Logo */}

                  {/* <a
                    className="dashboard_sidebar_toggle_icon text-thm1 vam"
                    href="#"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#SidebarPanel"
                    aria-controls="SidebarPanelLabel"
                  > */}
                  {/* <img
                     
                      className="img-1"
                      src="/images/dark-nav-icon.svg"
                      alt="humberger menu"
                    />
                  </a> */}
                </div>
              </div>
              {/* End .col-auto */}

              <div className="d-none d-lg-block col-lg-auto">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "1005px",
                  }}
                >
                  <MainMenu />
                  {/* End Main Menu */}
                </div>
                {/* End d-none d-lg-block */}
              </div>
              <div className="col-6 col-lg-auto">
                <div className="text-center text-lg-end header_right_widgets">
                  <ul className="mb0 d-flex justify-content-center justify-content-sm-end p-0">
                    <li className="d-none d-sm-block">
                      <Link className="text-center mr15" to="/login">
                        <span className="flaticon-email" />
                      </Link>
                    </li>
                    {/* End email box */}

                    <li className="d-none d-sm-block">
                      <a className="text-center mr20 notif" href="#">
                        <span className="flaticon-bell" />
                      </a>
                    </li>
                    {/* End notification icon */}

                    <li className=" user_setting">
                      <div className="dropdown">
                        <a className="btn" href="#" data-bs-toggle="dropdown">
                          <img
                            src="/images/resource/photodhia.jpg"
                            alt="user.png"
                          />
                        </a>
                        <div className="dropdown-menu">
                          <div className="user_setting_content">
                            {menuItems.map((section, sectionIndex) => (
                              <div key={sectionIndex}>
                                <p
                                  className={`fz15 fw400 ff-heading ${
                                    sectionIndex === 0 ? "mb20" : "mt30"
                                  }`}
                                >
                                  {section.title}
                                </p>
                                {section.items.map((item, itemIndex) => (
                                  <Link
                                    key={itemIndex}
                                    className={`dropdown-item ${
                                      pathname == item.href ? "-is-active" : ""
                                    } `}
                                    to={item.href}
                                  >
                                    <i className={`${item.icon} mr10`} />
                                    {item.text}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* End avatar dropdown */}
                  </ul>
                </div>
              </div>
              {/* End .col-6 */}
            </div>
            {/* End .row */}
          </div>
        </nav>
      </header>
      {/* End Header */}

      {/* DesktopSidebarMenu */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="SidebarPanel"
        aria-labelledby="SidebarPanelLabel"
      >
        <SidebarPanel />
      </div>
      {/* Sidebar Panel End */}
    </>
  );
};

export default DashboardHeader;
