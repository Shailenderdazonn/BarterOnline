import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormPopup from "../components/FormPopup";
import PortalPopup from "../components/PortalPopup";
import styles from "./Footer.module.css";

const Footer = () => {
  const navigate = useNavigate();
  const [isFormPopupOpen, setFormPopupOpen] = useState(false);

  const onFooterLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBO51Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAllCategoriesClick = useCallback(() => {
    navigate("/all-categories");
  }, [navigate]);

  const onMobileClick = useCallback(() => {
    navigate("/mobile-phone");
  }, [navigate]);

  const onCarsClick = useCallback(() => {
    navigate("/cars-and-vehicles");
  }, [navigate]);

  const onRealEstateClick = useCallback(() => {
    navigate("/real-estate");
  }, [navigate]);

  const onBritishColumbiaClick = useCallback(() => {
    navigate("/ads-in-british-columbia");
  }, [navigate]);

  const onNovaScotiaClick = useCallback(() => {
    navigate("/ads-in-novascotia");
  }, [navigate]);

  const onPrinceEdwardIslandClick = useCallback(() => {
    navigate("/ads-in-princeedwardisland");
  }, [navigate]);

  const onSaskatchewanClick = useCallback(() => {
    navigate("/ads-in-saskatchewan");
  }, [navigate]);

  const openFormPopup = useCallback(() => {
    setFormPopupOpen(true);
  }, []);

  const closeFormPopup = useCallback(() => {
    setFormPopupOpen(false);
  }, []);


  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerStart}>
          <div className={styles.footerLogo} onClick={onFooterLogoClick}>
            <a className={styles.bo51} onClick={onBO51Click} />
          </div>
          <div className={styles.barterOnline2nd}>
            7700 Hurontario St #503 #2054, Brampton, ON L6Y 4M3, Canada

          </div>
          <div className={styles.socialLinks}>
            <a
              className={styles.socialFacebook}
              href="https://www.facebook.com/profile.php?id=100088501827462"
            >
              <img className={styles.vectorIcon} alt="" src="../vector2.svg" />
            </a>
            <a
              className={styles.socialInstagram}
              href="https://www.instagram.com/barteronlineca/"
            >
              <img className={styles.vectorIcon} alt="" src="../vector3.svg" />
            </a>
            <a
              className={styles.socialTwitter}
              href="https://twitter.com/barteronlineca"
            >
              <img className={styles.vectorIcon} alt="" src="../vector4.svg" />
            </a>
            <a
              className={styles.socialPinterest}
              href="https://www.pinterest.ca/Barteronline/"
            >
              <img className={styles.vectorIcon3} alt="" src="../vector5.svg" />
            </a>
            <a
              className={styles.socialTwitch}
              href="https://www.twitch.tv/barteronline"
            >
              <img className={styles.vectorIcon3} alt="" src="../vector6.svg" />
            </a>
          </div>
        </div>
        <div className={styles.footerEnd}>
          <div className={styles.footerCol1}>
            <div className={styles.barterOnline}>Barter Online</div>
            <Link className={styles.home} to="/">
              Home
            </Link>
            <Link className={styles.favorites} to="/about-us">About Us</Link>
            {/* <a className={styles.favorites}>About Us</a> */}
            <button className={styles.advertisement} onClick={openFormPopup}>
              Advertisement
            </button>
            <a className={styles.home} href="https://barteronline.ca/blogs">
              Blog
            </a>
            {/* <div className={styles.blog}>BLOG</div> */}
          </div>
          <div className={styles.footerCol1}>
            <div className={styles.barterOnline}>Category</div>
            {/* <Link to="/products">
            All Categories
            </Link>          
             */}
            <div className={styles.blog} onClick={onAllCategoriesClick}>All Categories</div>
            <div className={styles.blog} onClick={onMobileClick}>Mobile Phones</div>
            <div className={styles.blog} onClick={onCarsClick}>Cars and Vehicles</div>
            <div className={styles.blog} onClick={onRealEstateClick}>Real Estate</div>
          </div>
          <div className={styles.footerCol4}>
            <div className={styles.barterOnline}>Top Provinces</div>
            <div className={styles.blog} onClick={onBritishColumbiaClick}>British Colombia</div>
            <div className={styles.blog} onClick={onPrinceEdwardIslandClick}>Prince Edward Island </div>
            <div className={styles.blog} onClick={onNovaScotiaClick}>Nova Scotia </div>
            <div className={styles.blog} onClick={onSaskatchewanClick}>Saskatchewan</div>
          </div>
          <div className={styles.footerCol4}>
            <div className={styles.barterOnline}>Contact Us</div>
            {/* <Link className={styles.home} to="/sell">
              Contact
            </Link> */}
            <Link className={styles.home} to="/privacy-policy">
            Privacy Policy
            </Link>
            {/* <div className={styles.blog}>Privacy Policy</div> */}
            <Link className={styles.home} to="/terms">
            Terms and Conditions
            </Link>        
            
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

export default Footer;
