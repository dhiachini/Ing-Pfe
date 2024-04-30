import DashboardHeader from "@/components/common/DashboardHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";

import { Link } from "react-router-dom";
import React from "react";

import MetaData from "@/components/common/MetaData";

const metaInformation = {
  title: "Not-Found  || Homez - Real Estate ReactJS Template",
};

const NotFound = () => {
  return (
    <>
      <MetaData meta={metaInformation} />
      {/* Main Header Nav */}
      <DashboardHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Error/404 Section Area */}
      <section className="our-error">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6" data-aos="fade-left">
              <div className="animate_content text-center text-xl-start">
                <div className="animate_thumb">
                  <img
                    className="w-100 h-100 cover"
                    src="/images/icon/error-page-img.svg"
                    alt="error-page-img"
                  />
                </div>
              </div>
            </div>
            {/* End .col-6 */}

            <div
              className="col-xl-5 offset-xl-1 wow fadeInLeft"
              data-aos="fade-right"
            >
              <div className="error_page_content mt80 mt50-lg text-center text-xl-start">
                <div className="erro_code">
                  <span className="text-thm">40</span>4
                </div>
                <div className="h2 error_title">
                  Oops! On dirait que tu es perdu.
                </div>
                <p className="text fz15 mb20">
                  La page que vous recherchez n'est pas disponible. Essayez de
                  chercher à nouveau ou utilisez le rendez-vous.
                </p>
                <Link to="/" className="ud-btn btn-dark">
                  Retourner aux pages d'accueil
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
            {/* End .col-6 */}
          </div>
        </div>
      </section>
      {/* End Error/404 Section Area */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default NotFound;
