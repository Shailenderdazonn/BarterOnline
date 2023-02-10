import { useCallback } from "react";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextField } from "@mui/material";
import { AutoComplete as AntAutoComplete } from "antd";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./Products.module.css";

const Products = () => {
  const navigate = useNavigate();

  const onSearchButtonClick = useCallback(() => {
    navigate("/products");
  }, [navigate]);

  const onPrimaryButtonClick = useCallback(() => {
    navigate("/products-detail");
  }, [navigate]);

  return (
    <div className={styles.products}>
      <div className={styles.searchFormSection}>
        <div className={styles.searchContainer}>
          <div className={styles.bannerGradient} />
          <img
            className={styles.bannerBackgroundIcon}
            alt=""
            src="../banner-background@2x.png"
          />
          <div className={styles.searchSection}>
            <div className={styles.title}>
              <div className={styles.whereAreYou}>
                Where are you Looking For ?
              </div>
            </div>
            <div className={styles.searchForm}>
              <div className={styles.formInputsRow}>
                <div className={styles.inputsRow}>
                  <TextField
                    className={styles.searchbar}
                    fullWidth
                    color="primary"
                    variant="outlined"
                    type="text"
                    label="Search"
                    placeholder="Search The Item"
                    size="medium"
                    margin="none"
                  />
                  <AntAutoComplete
                    className={styles.location}
                    options={[
                      { value: "totonto" },
                      { value: "abc" },
                      { value: "cacac" },
                      { value: "caaca" },
                    ]}
                    filterOption={(inputValue, option) =>
                      option.value
                        .toUpperCase()
                        .indexOf(inputValue?.toUpperCase()) !== -1
                    }
                    placeholder="Enter Location"
                  />
                  <AntAutoComplete
                    className={styles.location}
                    options={[
                      { value: "city1" },
                      { value: "city 2" },
                      { value: "city3" },
                    ]}
                    filterOption={(inputValue, option) =>
                      option.value
                        .toUpperCase()
                        .indexOf(inputValue?.toUpperCase()) !== -1
                    }
                    placeholder="Categories"
                  />
                </div>
              </div>
              <button className={styles.buttonGroup}>
                <button
                  className={styles.searchButton}
                  onClick={onSearchButtonClick}
                >
                  <div className={styles.search}>{`Search `}</div>
                </button>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.searchResults}>
        <div className={styles.searchFilters}>
          <div className={styles.resultsSummary}>
            <div className={styles.resultsParent}>
              <div className={styles.results}>10 out of 177 Results</div>
              <img className={styles.frameChild} alt="" src="../vector-2.svg" />
            </div>
          </div>
          <AntAutoComplete
            className={styles.categories1}
            options={[
              { value: "city1" },
              { value: "city 2" },
              { value: "city3" },
            ]}
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue?.toUpperCase()) !==
              -1
            }
            placeholder="Categories"
          />
          <AntAutoComplete
            className={styles.categories1}
            options={[
              { value: "totonto" },
              { value: "abc" },
              { value: "cacac" },
              { value: "caaca" },
            ]}
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue?.toUpperCase()) !==
              -1
            }
            placeholder="Enter Location"
          />
          <img className={styles.frameChild} alt="" src="../vector-2.svg" />
          <div className={styles.budget}>
            <b className={styles.results1}>Budget</b>
            <Form.Group className={styles.inputstandardFormgroup}>
              <Form.Control type="text" placeholder="MAX" />
            </Form.Group>
            <b className={styles.to}>To</b>
            <Form.Group className={styles.inputstandardFormgroup1}>
              <Form.Control type="text" placeholder="MIN" />
            </Form.Group>
          </div>
          <button className={styles.buttonGroup}>
            <button className={styles.searchButton1}>
              <div className={styles.search}>Search</div>
            </button>
          </button>
        </div>
        <div className={styles.resultsSection}>
          <div className={styles.ads1}>
            <div className={styles.results2}>1 out of 177 Results</div>
            <div className={styles.div}>
              <img className={styles.child} alt="" src="../rectangle-40.svg" />
              <div className={styles.priceAndAddressdate}>
                <div className={styles.nov22}>Nov 22</div>
                <div className={styles.mpNagarZone}>
                  MP Nagar Zone 2, Bhopal
                </div>
                <div className={styles.dellLaptopsI5}>
                  Dell Laptops i5 4th Gen
                </div>
                <b className={styles.b}>₹ 15,000/-</b>
              </div>
              <img
                className={styles.item}
                alt=""
                src="../rectangle-41@2x.png"
              />
            </div>
            <a className={styles.primaryButton} onClick={onPrimaryButtonClick}>
              <div className={styles.primaryButtonChild} />
              <div className={styles.searchAds}>Show more results</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
