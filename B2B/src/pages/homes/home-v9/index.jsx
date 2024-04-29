import Footer from "@/components/home/home-v9/footer";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v9/Header";
import Partner from "@/components/common/Partner";
import PropertiesByCities from "@/components/home/home-v1/PropertiesByCities";
import Testimonial from "@/components/home/home-v3/Testimonial";
import Funfact from "@/components/home/home-v3/Funfact";
import Hero from "@/components/home/home-v9/Hero";
import ApartmentType from "@/components/home/home-v1/ApartmentType";
import { Link } from "react-router-dom";
import SellingBlock from "../../../components/home/home-v9/SellingBlock";
import About from "@/components/home/home-v9/about";
import Pricing from "@/components/home/home-v9/Pricing";
import Cta from "@/components/home/home-v6/Cta";
import Explore from "@/components/home/home-v2/Explore";
import MetaData from "@/components/common/MetaData";

const metaInformation = {
  title: "ALGETUN || Plateforme d'échange Algéro - Tunisienne",
};

const Home_V9 = () => {
  return (
    <>
      <MetaData meta={metaInformation} />
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
                    Aliquam lacinia diam quis lacus euismod
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
                <a className="ud-btn2" href="/categories">
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
                <p className="paragraph">
                  Vivez leurs expérience
                </p>
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

      {/* Let’s find the right selling option for you*/}
      {/* <section className="pb90 pb30-md bgc-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title text-white mb-1">
                  Let’s find the right selling option for you
                </h2>
                <p className="paragraph text-white">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            <div
              className="col-lg-7 offset-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row">
                <SellingBlock />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* End Let’s find the right selling option for you*/}

      {/* Explore property-city */}
      {/* <section className="pb40-md pb90">
        <div className="container">
          <div
            className="row align-items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Properties by Cities</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
           

            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <Link className="ud-btn2" to="/map-v4">
                  See All Cities
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          
          </div>
          

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <PropertiesByCities />
          </div>
          
        </div>
      </section> */}
      {/* End Explore property-city */}

      {/* About Us */}

      {/* <About /> */}

      {/* End About Us */}

      {/* Our Testimonials */}
      {/* <section className="our-testimonial bgc-dark">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 mx-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="main-title text-center">
                <h2 className="title text-white">Testimonials</h2>
                <p className="paragraph text-white">
                  10,000+ unique online course list designs
                </p>
              </div>
            </div>
          </div>
         

          <div className="row">
            <div
              className="col-lg-8 m-auto"
              data-aos="fade-up"
              data-wow-delay="500"
            >
              <div className="testimonial-style2">
                <Testimonial />
              </div>
            </div>
          </div>
        
        </div>
      </section> */}
      {/* End Our Testimonials */}

      {/* Pricing Section Area */}
      {/* <section className="our-pricing pb90">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb30">
                <h2>Membership Plans</h2>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </div>
          </div>
          
          <Pricing />
        </div>
        
      </section> */}

      {/* Our Partners */}
      {/* <section className="our-partners pt0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <div className="main-title text-center">
                <h6>Trusted by the world’s best</h6>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <div
                className="dots_none nav_none"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Partner />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* End Our Partners */}

      {/* Our CTA */}
      <Cta />
      {/* Our End CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Home_V9;
