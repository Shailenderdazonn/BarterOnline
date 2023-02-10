import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormPopup from "../components/FormPopup";
import PortalPopup from "../components/PortalPopup";
import styles from "./HeaderSection.module.css";

const HeaderSection = () => {
  const navigate = useNavigate();
  const [isFormPopupOpen, setFormPopupOpen] = useState(false);

  const onHeaderLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBO51Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openFormPopup = useCallback(() => {
    setFormPopupOpen(true);
  }, []);

  const closeFormPopup = useCallback(() => {
    setFormPopupOpen(false);
  }, []);

  const onSellClick = useCallback(() => {
    navigate("/sell");
  }, [navigate]);

  const onHeaderProfileClick = useCallback(() => {
    navigate("/login");
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
              <a className={styles.category}>Category</a>
              <button className={styles.aboutUs}>About Us</button>
              <button
                className={styles.advertiseWithUs}
                onClick={openFormPopup}
              >
                Advertise With Us
              </button>
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
