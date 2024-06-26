import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { homeItems, blogItems, listingItems, propertyItems, pageItems } from "@/data/navItems";

const MainMenu = () => {
  const { pathname } = useLocation();
  const token = useSelector((state) => state.auth.token);

  const [topMenu, setTopMenu] = useState("");
  const [submenu, setSubmenu] = useState("");

  useEffect(() => {
    homeItems.forEach((elm) => {
      if (elm.href.split("/")[1] === pathname.split("/")[1]) {
        setTopMenu("home");
      }
    });
    blogItems.forEach((elm) => {
      if (elm.href.split("/")[1] === pathname.split("/")[1]) {
        setTopMenu("blog");
      }
    });
    pageItems.forEach((elm) => {
      if (elm.href.split("/")[1] === pathname.split("/")[1]) {
        setTopMenu("pages");
      }
    });
    propertyItems.forEach((item) =>
      item.subMenuItems.forEach((elm) => {
        if (elm.href.split("/")[1] === pathname.split("/")[1]) {
          setTopMenu("property");
          setSubmenu(item.label);
        }
      })
    );
    listingItems.forEach((item) =>
      item.submenu.forEach((elm) => {
        if (elm.href.split("/")[1] === pathname.split("/")[1]) {
          setTopMenu("listing");
          setSubmenu(item.title);
        }
      })
    );
  }, [pathname]);

  const handleActive = (link) => {
    if (link.split("/")[1] === pathname.split("/")[1]) {
      return "menuActive";
    }
  };

  const handleProtectedLink = (href) => {
    if (token) {
      window.location.href = href;
    } else {
      toast.error("Vous devez vous connecter pour accéder à cette page");
    }
  };

  return (
    <div>
      <ToastContainer />
      <ul className="ace-responsive-menu">
        <li className="visible_list dropitem">
          <a className="list-item" href="/">
            Accueil
          </a>
        </li>
        <li className="megamenu_style dropitem">
          <a className="list-item" href="#">
            <span className={topMenu === "listing" ? "title menuActive" : "title"}>
              Documents juridiques
            </span>
            <span className="arrow"></span>
          </a>
          <ul className="row dropdown-megamenu sub-menu">
            {listingItems.map((item, index) => (
              <li className="col mega_menu_list" key={index}>
                <h4 className="title">{item.title}</h4>
                <ul className="sub-menu">
                  {item.submenu.map((submenuItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        className={`${handleActive(submenuItem.href)}`}
                        to={submenuItem.href}
                      >
                        {submenuItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
        <li className="visible_list dropitem">
          <a className="list-item" onClick={() => handleProtectedLink('/categories')}>
            <span className={topMenu === "property" ? "title menuActive" : "title"}>
              Offres
            </span>
          </a>
        </li>
        <li className="visible_list dropitem">
          <a className="list-item" onClick={() => handleProtectedLink('/categoriesdemande')}>
            <span className={topMenu === "blog" ? "title menuActive" : "title"}>
              Demandes
            </span>
          </a>
        </li>
        <li className="visible_list dropitem">
          <a className="list-item" onClick={() => handleProtectedLink('/contact')}>
            <span className={topMenu === "blog" ? "title menuActive" : "title"}>
              Espace <span className="vip">VIP</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
