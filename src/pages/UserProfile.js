import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UserProfile.module.css";

const UserProfile = () => {
  const navigate = useNavigate();

  const onProfileOptionClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onPrimaryButtonClick = useCallback(() => {
    navigate("/products");
  }, [navigate]);

  return (
    <div className={styles.userProfile}>
      <div className={styles.adsResults}>
        <div className={styles.resultsSection}>
          <div className={styles.resultCardsCol}>
            <div className={styles.profileSection}>
              <div className={styles.profileBody}>
                <div className={styles.profileDrawer}>
                  <div className={styles.profileDetails}>
                    <div className={styles.nameParticulars}>
                      <div className={styles.macyJohnsonParent}>
                        <b className={styles.macyJohnson}>Macy Johnson</b>
                        <div className={styles.torontoCanada}>
                          Toronto , Canada
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.joinedFebruary14}
                    >{`JOINED February 14, 2016 `}</div>
                    <div className={styles.profileDetailsChild} />
                    <div className={styles.profileOptions}>
                      <div className={styles.profileOption}>
                        <div className={styles.rate}>
                          <img
                            className={styles.bicreditCard2BackIcon}
                            alt=""
                            src="../bicreditcard2back.svg"
                          />
                        </div>
                        <div className={styles.adsDetails}>ADs Details</div>
                      </div>
                      <div className={styles.profileOption1}>
                        <div className={styles.rate}>
                          <img
                            className={styles.bicreditCard2BackIcon}
                            alt=""
                            src="../healthiconsvirusshieldoutline.svg"
                          />
                        </div>
                        <div className={styles.adsDetails}>Favourite Ads</div>
                      </div>
                      <div className={styles.profileOption1}>
                        <div className={styles.rate}>
                          <img
                            className={styles.humbleiconsuserAsking}
                            alt=""
                            src="../humbleiconsuserasking.svg"
                          />
                        </div>
                        <div className={styles.approvedAdsParent}>
                          <div className={styles.adsDetails}>Approved Ads</div>
                          <div className={styles.newWrapper}>
                            <div className={styles.new}>new</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.profileOption1}>
                        <div className={styles.rate}>
                          <img
                            className={styles.bicreditCard2BackIcon}
                            alt=""
                            src="../claritysettingsline.svg"
                          />
                        </div>
                        <div className={styles.adsDetails}>Settings</div>
                      </div>
                      <a
                        className={styles.profileOption4}
                        onClick={onProfileOptionClick}
                      >
                        <div className={styles.rate}>
                          <img
                            className={styles.bicreditCard2BackIcon}
                            alt=""
                            src="../majesticonslogouthalfcircleline.svg"
                          />
                        </div>
                        <div className={styles.adsDetails}>Logout</div>
                      </a>
                      <div className={styles.questions}>
                        <img
                          className={styles.humbleiconsuserAsking}
                          alt=""
                          src="../ionhelpcircleoutline.svg"
                        />
                        <div className={styles.haveQuestionsWe}>
                          Have questions? We are here to help
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.profileImage}>
                  <img
                    className={styles.group3Icon}
                    alt=""
                    src="../group3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.resultsSection1}>
            <div className={styles.dataCards}>
              <div className={styles.my}>MY ADS</div>
              <div className={styles.adsDetails1}>
                <div className={styles.imagesSection}>
                  <div className={styles.images}>IMAGES</div>
                </div>
                <div className={styles.imagesSection}>
                  <div className={styles.products}>PRODUCTS</div>
                </div>
                <div className={styles.imagesSection}>
                  <div className={styles.images}>CATEGORY</div>
                </div>
                <div className={styles.imagesSection}>
                  <div className={styles.images}>LOCATION</div>
                </div>
              </div>
              <a
                className={styles.primaryButton}
                onClick={onPrimaryButtonClick}
              >
                <div className={styles.primaryButtonChild} />
                <div className={styles.showAds}>Show more ADs</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
