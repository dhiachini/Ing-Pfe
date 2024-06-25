import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/swiper-bundle.min.css";

const PropertyGallery = ({ id }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null); // Declare thumbsSwiper state
  const off = useSelector((state) => state.offers.offers);
  const singleOffer = off.filter((so) => so._id === id);

  useEffect(() => {
    console.log("Offer:", singleOffer);
  }, [off, singleOffer]);

  return (
    <div className="row">
      <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
        <div className="ps-v4-hero-tab position-relative"></div>
        <div className="ps-v4-hero-tab">
          <div className="tab-content overflow-visible" id="pills-tabContent2">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="container p-0">
                <div className="row" data-aos="fade-up" data-aos-delay="300">
                  <div className="col-lg-12">
                    <div className="ps-v6-slider nav_none slider-1-grid owl-theme owl-carousel">
                      {singleOffer.map((gallery, index) => (
                        <div key={index}>
                          <Swiper
                            loop={true}
                            spaceBetween={10}
                            navigation={{
                              prevEl: ".prev-btn",
                              nextEl: ".next-btn",
                            }}
                            thumbs={{
                              swiper: thumbsSwiper,
                            }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                          >
                            {gallery.images.map((item, i) => (
                              <SwiperSlide key={i}>
                                <img
                                  src={item}
                                  alt={`gallery-${i}`}
                                  className="w-100 h-auto bdrs12"
                                />
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyGallery;
