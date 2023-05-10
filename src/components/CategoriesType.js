import { useMemo } from "react";
import styles from "./CategoriesType.module.css";

const CategoriesType = ({
  categoryImageUrl,
  categoryName,
  propFlex,
  propWidth,
  propFlexShrink,
  propWidth1,
}) => {
  const cardTitleStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
      flexShrink: propFlexShrink,
    };
  }, [propFlex, propWidth, propFlexShrink]);

  const furnitureStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <a className={styles.allCategories}>
      <img className={styles.cardimageIcon} alt="" src={categoryImageUrl} />
      <div className={styles.text}>
        <div className={styles.cardTitle} style={cardTitleStyle}>
          <div className={styles.cardTitleChild} />
          <b className={styles.furniture} style={furnitureStyle}>
            {categoryName}
          </b>
        </div>
      </div>
    </a>
  );
};

export default CategoriesType;
