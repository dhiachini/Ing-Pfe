import DashboardHeader from "@/components/common/DashboardHeader";
import Footer from "./footer";
import MobileMenu from "@/components/common/mobile-menu";
import PropertyFilteringList from "@/components/listing/list-view/list-v1/PropertyFilteringList";
import { Link } from "react-router-dom";
import React from "react";
import MetaData from "@/components/common/MetaData";

const metaInformation = {
  title: "List offres || Plateforme d'échange Algéro - Tunisienne",
};

const Offres = () => {
  return (
    <>
      <MetaData meta={metaInformation} />
      {/* Main Header Nav */}
      <DashboardHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcumb Sections */}
      <section className="breadcumb-section bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <div
                  style={{
                    display: "flex",
                    "justify-content": "space-between",
                  }}
                >
                  <h2 className="title">Offres </h2>
                  <Link
                    className="ud-btn add-property menu-btn bdrs60 mx-2 mx-xl-4"
                    to="/ajouteroffres"
                  >
                    Ajouter offre
                    <i className="fal fa-arrow-right-long" />
                  </Link>

                  <a
                    className="filter-btn-left mobile-filter-btn d-block d-lg-none"
                    data-bs-toggle="offcanvas"
                    href="#listingSidebarFilter"
                    role="button"
                    aria-controls="listingSidebarFilter"
                  >
                    <span className="flaticon-settings" /> Filter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcumb Sections */}
      <div style={{ "margin-top": "-85px" }}>
        {/* Property Filtering */}
        <PropertyFilteringList />
      </div>

      {/* Property Filtering */}
      <div style={{ "margin-top": "40px" }}>
        {/* Start Our Footer */}
        <Footer />
        </div>

      {/* End Our Footer */}
    </>
  );
};

export default Offres;
