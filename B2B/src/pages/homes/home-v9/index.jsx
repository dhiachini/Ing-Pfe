import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v9/Header";
import PropertiesByCities from "@/components/home/home-v1/PropertiesByCities";
import Testimonial from "@/components/home/home-v3/Testimonial";
import Funfact from "@/components/home/home-v3/Funfact";
import Hero from "@/components/home/home-v9/Hero";
import Cta from "@/components/home/home-v6/Cta";
import Explore from "@/components/home/home-v2/Explore";
import MetaData from "@/components/common/MetaData";

const metaInformation = {
  title: "ALGETUN || Plateforme d'échange Algéro - Tunisienne",
};

const Home_V9 = () => {
  const token = useSelector((state) => state.auth.token);

  const handleProtectedLink = (href) => {
    if (token) {
      window.location.href = href;
    } else {
      toast.error("Vous devez vous connecter pour accéder à cette page");
    }
  };

  return (
    <>
      <MetaData meta={metaInformation} />
      <ToastContainer />
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Hero Slide */}
      <div className="banner-wrapper main-banner-wrapper  position-relative banner-style-one ">
        <Hero />
      </div>
      {/* Edn Hero Slide */}

      {/* Explore Apartment */}
      <section className="p-0">
        <div className="how-we-help position-relative mx-auto bgc-thm-light maxw1600 pt120 pt60-md pb90 pb30-md bdrs12 mx20-lg">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 m-auto wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="main-title text-center">
                  <h2 className="title">
                    Découvrez comment ALGÉTUN peut vous aider
                  </h2>
                  <p className="paragraph">
                    ALGÉTUN est votre passerelle vers un échange économique et
                    un investissement prospère entre la Tunisie et l'Algérie
                  </p>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="row">
              <Explore />
            </div>
          </div>
        </div>
      </section>
      {/* End Explore Apartment */}

      {/* Explore property-city */}
      <section className="pb40-md pb90">
        <div className="container">
          <div
            className="row align-items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Les catégories les plus populaires </h2>
              </div>
            </div>
            {/* End col-lg-9 */}

            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <a className="ud-btn2" onClick={() => handleProtectedLink('/categories')}>
                  Voir toutes les catégories
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
            {/* End col-lg-3 */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider position-relative">
                <PropertiesByCities />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Explore property-city */}

      {/*People Love Living with Realton */}
      <section className="pb30-md bgc-f7">
        <div className="container">
          <div className="row align-items-md-center">
            <div
              className="col-lg-6 mb30-md wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="main-title">
                <h2 className="title">Les gens aiment échanger avec AlgéTun</h2>
                <p className="paragraph">Vivez leurs expérience</p>
              </div>
              <div className="row">
                <Funfact />
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-4 offset-xl-2">
              <div
                className="testimonial-slider2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Testimonial />
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
      {/* End People Love Living with Realton */}

      {/* Our CTA */}
      <Cta />
      {/* Our End CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Home_V9;
