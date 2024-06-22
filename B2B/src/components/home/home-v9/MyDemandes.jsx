import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import Pagination from "@/components/property/Pagination";
import Footer from "@/components/property/dashboard/Footer";
import FilterHeader from "@/components/property/dashboard/dashboard-my-properties/FilterHeader";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";
import MyoffresDataTable from "./datatables/MyoffresDataTable";
import SidebarDashboard from "@/components/property/dashboard/SidebarDashboard";

import MetaData from "@/components/common/MetaData";
import MyDemandesDataTables from "./datatables/MyDemandesDataTables";

const metaInformation = {
  title:
    "Liste conseils juridiques || Plateforme d'échange Algéro - Tunisienne",
};

const MyDemandes = () => {
  return (
    <>
      <MetaData meta={metaInformation} />
      {/* Main Header Nav */}
      <DashboardHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}
      <div className="dashboard dashboard_wrapper pr30 pr0-md">
        <SidebarDashboard />

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
              <div className="dashboard_title_area">
                <h2>Mes demandes</h2>
              </div>

              <div className="col-xxl-9">
                <FilterHeader />
              </div>
            </div>
            {/* End .row */}

            <div className="row">
              <div className="col-xl-12">
                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                  <MyDemandesDataTables />
                </div>
              </div>
            </div>
            {/* End .row */}
          </div>
          {/* End .dashboard__content */}

          <Footer />
        </div>
      </div>

      {/* dashboard_content_wrapper */}
    </>
  );
};

export default MyDemandes;
