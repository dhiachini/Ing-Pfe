import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/property/dashboard/Footer";
import SidebarDashboard from "@/components/property/dashboard/SidebarDashboard";
import AddPropertyTabContent from "@/components/property/dashboard/dashboard-add-property";
import MetaData from "@/components/common/MetaData";
import DashboardHeader from "@/components/common/DashboardHeader";
import { useEffect } from "react";


const metaInformation = {
  title: "Ajouter offre || Plateforme d'échange Algéro - Tunisienne",
};

const AjouterOffres = () => {
  useEffect(() => {
    localStorage.setItem("typePost", 1);
  }, []);
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
      <div className="dashboard_content_wrapper">
        <div className="dashboard dashboard_wrapper pr30 pr0-md">
          <SidebarDashboard />
          {/* End .dashboard__sidebar */}

          <div className="dashboard__main pl0-md">
            <div className="dashboard__content property-page bgc-f7">
              <div className="row pb40 d-block d-lg-none">
                {/* <div className="col-lg-12">
                  <DboardMobileNavigation />
                </div> */}
                {/* End .col-12 */}
              </div>
              {/* End .row */}

              <div className="row align-items-center pb40">
                <div className="col-lg-12">
                  <div className="dashboard_title_area">
                    <h2>Ajouter un offre</h2>
                    {/* <p className="text">We are glad to see you again!</p> */}
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-xl-12">
                  <div className="ps-widget bgc-white bdrs12 default-box-shadow2 mb30 overflow-hidden position-relative">
                    <div className="navtab-style1">
                      <AddPropertyTabContent />
                    </div>
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End dashboard__content */}
          </div>

          {/* End .dashboard__main */}
        </div>
      </div>
      <Footer />
      {/* dashboard_content_wrapper */}
    </>
  );
};

export default AjouterOffres;
