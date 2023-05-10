import { display } from "@mui/system";
import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormPopup from "../components/FormPopup";
import PortalPopup from "../components/PortalPopup";
import styles from "./HeaderSection.module.css";

const HeaderSection = () => {
  const navigate = useNavigate();
  const [isFormPopupOpen, setFormPopupOpen] = useState(false);

  const onHeaderLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAllAds = useCallback(() => {
    navigate("/products");
  }, [navigate]);

  const onBO51Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const closeFormPopup = useCallback(() => {
    setFormPopupOpen(false);
  }, []);

  const onSellClick = useCallback(() => {
    navigate("/sell");
  }, [navigate]);

  const onHeaderProfileClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onAboutUs = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <>
      <div className={styles.headerSection}>
        <div className={styles.headerElementsRow}>
          <button className={styles.headerLogo} onClick={onHeaderLogoClick}>
            <a className={styles.bo51} onClick={onBO51Click} />
          </button>
          <div className={styles.headerMenu}>
            <div className={styles.headerLinks}>
              <button className={styles.home} onClick={onHomeClick}>
                Home
              </button>
              <a className={styles.category} onClick={onAllAds} >All Ads</a>
              <button className={styles.aboutUs} onClick={onAboutUs} >About Us</button>


              <div className={styles.advertiseWithUs}>
                <a>Provinces
                  <img
                    className={styles.ProvincesDropdown}
                    alt=""
                    src="../drop.svg"
                  />
                </a>
                <div className={styles.dropdownMenu}>
                  <Link to="/ads-in-alberta" className={styles.dropdownProvinces}> Alberta</Link>
                  <Link to="/ads-in-british-columbia" className={styles.dropdownProvinces}>British Colombia</Link>
                  <Link to="/ads-in-manitoba" className={styles.dropdownProvinces}>Manitoba </Link>
                  <Link to="/ads-in-newbrunswick" className={styles.dropdownProvinces}>New Brunswick</Link>
                  <Link to="/ads-in-newfoundlandandlabrador" className={styles.dropdownProvinces}>Newfoundland and Labrador</Link>
                  <Link to="/ads-in-northwestterritories" className={styles.dropdownProvinces}>Northwest Territories</Link>
                  <Link to="/ads-in-novascotia" className={styles.dropdownProvinces}>Nova Scotia</Link>
                  <Link to="/ads-in-nunavut" className={styles.dropdownProvinces}>Nunavut </Link>
                  <Link to="/ads-in-ontario" className={styles.dropdownProvinces}>Ontario </Link>
                  <Link to="/ads-in-princeedwardisland" className={styles.dropdownProvinces}>Prince Edward Island </Link>
                  <Link to="/ads-in-quebec" className={styles.dropdownProvinces}>Quebec </Link>
                  <Link to="/ads-in-saskatchewan" className={styles.dropdownProvinces}>Saskatchewan </Link>
                  <Link to="/ads-in-yukon" className={styles.dropdownProvinces}>Yukon </Link>
                </div>
              </div>
            </div>
            <img
              className={styles.headerHamburgerMenu}
              alt=""
              src="../group-3.svg"
            />
            <div className={styles.seperator} />
            <button className={styles.sell} onClick={onSellClick}>
              <div className={styles.sellChild} />
              <b className={styles.sell1}>SELL</b>
            </button>
            <button
              className={styles.headerProfile}
              onClick={onHeaderProfileClick}
            >
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <img className={styles.vectorIcon1} alt="" src="../vector1.svg" />
            </button>
          </div>
        </div>
      </div>
      {isFormPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFormPopup}
        >
          <FormPopup onClose={closeFormPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HeaderSection;
