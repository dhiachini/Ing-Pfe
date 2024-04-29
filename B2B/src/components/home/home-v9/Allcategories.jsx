import Header from "./Header";
import MobileMenu from "@/components/common/mobile-menu";
import Pagination from "@/components/property/Pagination";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";
import Footer from "./footer";
import ListingsFavourites from "@/components/property/dashboard/dashboard-my-favourites/ListingsFavourites";
import DashboardHeader from "@/components/common/DashboardHeader";
import MetaData from "@/components/common/MetaData";

const metaInformation = {
  title: "Catégories || Plateforme d'échange Algéro - Tunisienne",
};

const Allcategories = () => {
  return (
    <>
    <MetaData meta={metaInformation} />
      {/* Main Header Nav */}
      <DashboardHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* dashboard_content_wrapper */}
     
          <div className="dashboard__main pl0-md">
            <div className="dashboard__content bgc-f7">
              <div className="row pb40">
                <div className="col-lg-12">
                  <DboardMobileNavigation />
                </div>
                {/* End .col-12 */}
              </div>
              {/* End .row */}

              <div className="row align-items-center pb40">
                <div className="col-lg-12">
                  <div className="dashboard_title_area">
                    <h2>Toutes les catégories</h2>
                    
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="row">
                <ListingsFavourites />
                <div className="col-xl-12">
                  <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                    <div className="mt30">
                      <Pagination />
                    </div>
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .dashboard__content */}

            <Footer />
          </div>
          {/* End .dashboard__main */}
        
      
      {/* dashboard_content_wrapper */}
    </>
  );
};

export default Allcategories;
