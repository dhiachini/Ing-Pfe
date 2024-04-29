import Header from "../Header";
import MobileMenu from "@/components/common/mobile-menu";
import Pagination from "@/components/property/Pagination";
import Footer from "../footer";
import FilterHeader from "@/components/property/dashboard/dashboard-my-properties/FilterHeader";
import PropertyDataTable from "@/components/property/dashboard/dashboard-my-properties/PropertyDataTable";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";
import ConseilsjuridiqueDataTable from "../datatables/ConseilsjuridiqueDataTable";

import MetaData from "@/components/common/MetaData";

const metaInformation = {
  title: "Liste conseils juridiques || Plateforme d'échange Algéro - Tunisienne",
};

const Listeconseilsjuridique = () => {
  return (
    <>
      <MetaData meta={metaInformation} />
      {/* Main Header Nav */}
      <Header />
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
            <div className="dashboard_title_area">
              <h2>Liste conseils juridiques</h2>
            </div>

            <div className="col-xxl-9">
              <FilterHeader />
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-xl-12">
              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <div className="packages_table table-responsive">
                  <ConseilsjuridiqueDataTable />

                  <div className="mt30">
                    <Pagination />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .dashboard__content */}

        <Footer />
      </div>

      {/* dashboard_content_wrapper */}
    </>
  );
};

export default Listeconseilsjuridique;
