import CallToActions from "@/components/common/CallToActions";
import DashboardHeader from "@/components/common/DashboardHeader";
import Footer from "@/components/home/home-v9/footer";
import MobileMenu from "@/components/common/mobile-menu";
import Faq1 from "@/components/pages/faq/Faq1";
import Faq2 from "@/components/pages/faq/Faq2";

import MetaData from "@/components/common/MetaData";

const metaInformation = {
  title: "Faq  || Homez - Real Estate ReactJS Template",
};

const Faq = () => {
  return (
    <>
      <MetaData meta={metaInformation} />
      {/* Main Header Nav */}
      <DashboardHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcrumb Sections */}
      <section className="breadcumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">Foire Aux Questions</h2>
                <div className="breadcumb-list">
                  <a href="#">Offre</a>
                  <a href="#">Demande / </a>
                  <a href="#"> Investissement</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Sections */}

      {/* FAQ Section Area */}
      <section className="our-faq pb90 pt-0">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-lg-12">
              <div className="ui-content">
                <h4 className="title">Question à propos notre plateforme</h4>
                <div className="accordion-style1 faq-page mb-4 mb-lg-5">
                  <Faq1 />

                  {/* End ui-content */}

                  {/* <h4 className="title">Question About Renting</h4> */}
                  <div className="accordion-style1 faq-page mb-4 mb-lg-5">
                    <Faq2 />
                  </div>
                </div>
              </div>
              {/* End ui-content */}
            </div>
            {/* End .col-lg-12 */}
          </div>
        </div>
      </section>
      {/* End FAQ Section Area */}

      {/* Our CTA */}
      <CallToActions />
      {/* Our CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Faq;
