import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleOffer } from "../../../../Redux/Actions/offersActions";
import MetaData from "@/components/common/MetaData";
import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import NearbySimilarProperty from "@/components/property/property-single-style/common/NearbySimilarProperty";
import PropertyAddress from "@/components/property/property-single-style/common/PropertyAddress";
import PropertyHeader from "@/components/property/property-single-style/common/PropertyHeader";
import ProperytyDescriptions from "@/components/property/property-single-style/common/ProperytyDescriptions";
import ReviewBoxForm from "@/components/property/property-single-style/common/ReviewBoxForm";
import ContactWithAgent from "@/components/property/property-single-style/sidebar/ContactWithAgent";
import PropertyGallery from "@/components/property/property-single-style/single-v6/PropertyGallery";
import Footer from "@/components/property/dashboard/Footer";

const metaInformation = {
  title: "Offre détails  || Plateforme d'échange Algéro - Tunisienne",
};

const OfferDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleOffer(id));
  }, [dispatch, id]);

  return (
    <>
      <MetaData meta={metaInformation} />
      <DashboardHeader />
      <MobileMenu />

      <section className="pt60 pb90 bgc-f7">
        <div className="container">
          <div className="row">
            <PropertyHeader id={id} />
          </div>

          <div className="row wrap">
            <div className="col-lg-8">
              <PropertyGallery id={id} />
              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Description de l'offre</h4>
                <ProperytyDescriptions id={id} />
              </div>

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30 mt30">Adresse</h4>
                <div className="row">
                  <PropertyAddress id={id}/>
                </div>
              </div>

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Leave A Review</h4>
                <div className="row">
                  <ReviewBoxForm />
                </div>
              </div> */}
            </div>

            <div className="col-lg-4">
              <div className="column">
                <div className="agen-personal-info position-relative bgc-white default-box-shadow1 bdrs12 p30 mt30">
                  <div className="widget-wrapper mb-0">
                    <h6 className="title fz17 mb30">
                      Contacter le propriétaire
                    </h6>
                    <ContactWithAgent id={id}/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="row mt30 align-items-center justify-content-between">
            <div className="col-auto">
              <div className="main-title">
                <h2 className="title">Découvrez nos annonces en vedette</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div> */}

            {/* <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="featured-prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>

                <div className="col-auto">
                  <div className="pagination swiper--pagination featured-pagination__active" />
                </div>

                <div className="col-auto">
                  <button className="featured-next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
              </div>
            </div> */}
          {/* </div> */}

          {/* <div className="row">
            <div className="col-lg-12">
              <div className="property-city-slider">
                <NearbySimilarProperty />
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default OfferDetails;
