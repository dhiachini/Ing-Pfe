import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/swiper-bundle.min.css";
import { fetchSingleOffer } from "../../../../../Redux/Actions/offersActions";

const PropertyGallery = ({ id }) => {
  const dispatch = useDispatch();
  const [thumbsSwiper, setThumbsSwiper] = useState(null); // Declare thumbsSwiper state
  const offer = useSelector((state) => state.offers.singleOffer.images);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (offer) {
      console.log("Offer:", offer);
      setImages(offer);
      console.log(images);
    }
  }, [offer]);

  if (!offer) {
    return <div>Loading...</div>;
  }
  console.log(offer);
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
                        {images.map((item, i) => (
                          <SwiperSlide key={i}>
                            <img
                              src={item[i]}
                              alt={`gallery-${i}`}
                              className="w-100 h-auto bdrs12"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>

                      <div className="row">
                        <div className="col-lg-7 col-md-8">
                          <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper mt20"
                          >
                            {images.map((item, i) => (
                              <SwiperSlide key={i}>
                                <img
                                  src={item[i]}
                                  alt={`image-${i}`}
                                  className="w-100 bdrs12 cover pointer"
                                />
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      </div>
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
