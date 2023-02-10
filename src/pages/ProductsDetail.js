import styles from "./ProductsDetail.module.css";

const ProductsDetail = () => {
  return (
    <div className={styles.productsDetail}>
      <div className={styles.calloutSection}>
        <div className={styles.calloutImages}>
          <img
            className={styles.calloutImagesChild}
            alt=""
            src="../rectangle-152@2x.png"
          />
          <div className={styles.calloutImagesColumn}>
            <img
              className={styles.calloutImagesChild}
              alt=""
              src="../rectangle-16@2x.png"
            />
            <img
              className={styles.calloutSwitzerlandSunsetIma}
              alt=""
              src="../unsplasho5casqlny0@2x.png"
            />
          </div>
        </div>
        <div className={styles.calloutCopywriting}>
          <b className={styles.iphone13Pro}>IPhone 13 PRO (128 gb)</b>
          <div className={styles.mobilePhoneParent}>
            <div className={styles.mobilePhone}>Mobile phone</div>
            <div className={styles.albertaWrapper}>
              <div className={styles.alberta}>Alberta</div>
            </div>
          </div>
          <b className={styles.b}>$ 75,000/-</b>
          <div className={styles.calloutText}>
            iPhone 13. boasts an advanced dual-camera system that allows you to
            click mesmerising pictures with immaculate clarity. Furthermore, the
            lightning-fast A15 Bionic chip allows for seamless multitasking,
            elevating your performance to a new dimension. A big leap in battery
            life, a durable design, and a bright Super Retina XDR display
            facilitate boosting your user experience.
          </div>
          <div className={styles.lineParent}>
            <div className={styles.frameChild} />
            <div className={styles.articleAuthor}>
              <img
                className={styles.avatarIcon}
                alt=""
                src="../avatar@2x.png"
              />
              <div className={styles.authorText}>
                <div className={styles.annaRos}>Anna Rosé</div>
                <div className={styles.postedJustNow}>Posted just now</div>
              </div>
            </div>
          </div>
          <a className={styles.chat}>
            <div className={styles.chatWithSeller}>{`Chat With Seller `}</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
