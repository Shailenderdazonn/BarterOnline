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
          <a className={styles.footerLogo} onClick={onFooterLogoClick}>
            <a className={styles.bo51} onClick={onBO51Click} />
          </a>
          <div className={styles.barterOnline2nd}>
            Barter online, 2nd Floor, New York, NY 10016
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
            <a className={styles.favorites}>Favorites</a>
            <button className={styles.advertisement} onClick={openFormPopup}>
              Advertisement
            </button>
            <div className={styles.blog}>BLOG</div>
          </div>
          <div className={styles.footerCol1}>
            <div className={styles.barterOnline}>Category</div>
            <div className={styles.blog}>All Categories</div>
            <div className={styles.blog}>Mobile Phones</div>
            <div className={styles.blog}>Cars and Vehicles</div>
            <div className={styles.blog}>Real Estate</div>
          </div>
          <div className={styles.footerCol4}>
            <div className={styles.barterOnline}>Top Provinces</div>
            <div className={styles.blog}>British Colombia</div>
            <div className={styles.blog}>Prince Edward Island </div>
            <div className={styles.blog}>Nova Scotia </div>
            <div className={styles.blog}>Saskatchewan</div>
          </div>
          <div className={styles.footerCol4}>
            <div className={styles.barterOnline}>Contact Us</div>
            <Link className={styles.home} to="/sell">
              Contact
            </Link>
            <div className={styles.blog}>Privacy Policy</div>
            <div className={styles.blog}>Terms and Conditions</div>
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
