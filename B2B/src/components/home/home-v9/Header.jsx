import MainMenu from "@/components/common/MainMenu";
import SidebarPanel from "@/components/common/sidebar-panel";
import LoginSignupModal from "@/components/common/login-signup-modal";
import { useDispatch, useSelector } from "react-redux";
import { popon } from "../../../../Redux/Slices/requestSlice";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
const Header = () => {
  const dispatch = useDispatch();
 // var style = {};
  const pop = useSelector((state) => state.account.pop);
  const [navbar, setNavbar] = useState(false);
  const [style, setStyle] = useState({});
   useEffect(() => {
     if (!pop) {
       setTimeout(() => {
         setStyle({ opacity: 0 });
       }, 5000);
     } else {
       setStyle({ opacity: 1 });
     }
   }, [pop]);
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  return (
    <>
      <header
        className={`header-nav nav-homepage-style at-home2 main-menu  ${
          navbar ? "sticky slideInDown animated" : ""
        }`}
      >
        <nav className="posr">
          <div className="container maxw1600 posr">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="logos mr40">
                    <Link className="header-logo logo1" to="/">
                      <img src="/images/navbar.png" alt="Header Logo" />
                    </Link>
                    <Link className="header-logo logo2" to="/">
                      <img src="/images/navbar.png" alt="Header Logo" />
                    </Link>
                  </div>
                  {/* End Logo */}

                  <MainMenu />
                  {/* End Main Menu */}
                </div>
              </div>
              {/* End .col-auto */}

              <div className="col-auto">
                <div className="d-flex align-items-center">
                  {/* <a
                    className="login-info d-flex align-items-center me-3"
                    href="tel:29110987654"
                  >
                    <i className="far fa-phone fz16 me-2"></i>
                    <span className="d-none d-xl-block">2 911 098 7654</span>
                  </a> */}
                  <a
                    href="#"
                    className="login-info d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#loginSignupModal"
                    role="button"
                    onClick={() => dispatch(popon(true))}
                  >
                    <i className="far fa-user-circle fz16 me-2" />{" "}
                    <span className="d-none d-xl-block">
                      Se connecter / Demander un compte
                    </span>
                  </a>
                </div>
              </div>
              {/* End .col-auto */}
            </div>
            {/* End .row */}
          </div>
        </nav>
      </header>
      {/* End Header */}

      {/* Signup Modal */}
      <div className="signup-modal" style={pop === false ? style : {}}>
        <div
          className="modal fade"
          id="loginSignupModal"
          tabIndex={-1}
          aria-labelledby="loginSignupModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog  modal-dialog-scrollable modal-dialog-centered">
            <LoginSignupModal />
          </div>
        </div>
      </div>
      {/* End Signup Modal */}

      {/* DesktopSidebarMenu */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="SidebarPanel"
        aria-labelledby="SidebarPanelLabel"
      >
        <SidebarPanel />
      </div>
      {/* Sidebar Panel End */}
    </>
  );
};

export default Header;