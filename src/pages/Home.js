import { useCallback, useEffect, useState } from "react";
import "antd/dist/antd.min.css";
import { TextField } from "@mui/material";
import { Input, AutoComplete } from "antd";
import { Link, useNavigate } from "react-router-dom";
import CategoriesType from "../components/CategoriesType";
import styles from "./Home.module.css";

const Home = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1/Barter%20online/src/API/adblock.php")
      .then(res => res.json())
      .then(
        (result) => {
          setItem(result);
        }
      )
  }, [])

  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onSearchButtonClick = useCallback(() => {
    navigate("/products");
  }, [navigate]);

  const onViewMoreClick = useCallback(() => {
    navigate("/products");
  }, [navigate]);

  const onViewAllClick = useCallback(() => {
    navigate("/products");
  }, [navigate]);


  const onViewAllCategory = useCallback(() => {
    navigate("/all-categories");
  }, [navigate]);

  const onPostAd = useCallback(() => {
    navigate("/sell");
  }, [navigate]);

  const onViewMore1Click = useCallback(() => {
    navigate("/products");
  }, [navigate]);

  const onAlbertaClick = useCallback(() => {
    navigate("/ads-in-alberta");
  }, [navigate]);

  const onBritishColumbiaClick = useCallback(() => {
    navigate("/ads-in-british-columbia");
  }, [navigate]);

  const onManitobaClick = useCallback(() => {
    navigate("/ads-in-manitoba");
  }, [navigate]);

  const onNewBrunswickClick = useCallback(() => {
    navigate("/ads-in-newbrunswick");
  }, [navigate]);

  const onNewfoundlandandLabradorClick = useCallback(() => {
    navigate("/ads-in-newfoundlandandlabrador");
  }, [navigate]);

  const onNorthwestTerritoriesClick = useCallback(() => {
    navigate("/ads-in-northwestterritories");
  }, [navigate]);

  const onNovaScotiaClick = useCallback(() => {
    navigate("/ads-in-novascotia");
  }, [navigate]);

  const onNunavutClick = useCallback(() => {
    navigate("/ads-in-nunavut");
  }, [navigate]);

  const onOntarioClick = useCallback(() => {
    navigate("/ads-in-ontario");
  }, [navigate]);

  const onPrinceEdwardIslandClick = useCallback(() => {
    navigate("/ads-in-princeedwardisland");
  }, [navigate]);

  const onQuebecClick = useCallback(() => {
    navigate("/ads-in-quebec");
  }, [navigate]);

  const onSaskatchewanClick = useCallback(() => {
    navigate("/ads-in-saskatchewan");
  }, [navigate]);

  const onYukonClick = useCallback(() => {
    navigate("/search-ads-in-yukon");
  }, [navigate]);

  // const onPlayButtonClick = useCallback(() => {
  //   navigate("/login");
  // }, [navigate]);

  const onMobileClick = useCallback(() => {
    navigate("/mobile-phone");
  }, [navigate]);

  const onCarsClick = useCallback(() => {
    navigate("/cars-and-vehicles");
  }, [navigate]);

  const onRealEstateClick = useCallback(() => {
    navigate("/real-estate");
  }, [navigate]);

  const onServicesClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onKidClick = useCallback(() => {
    navigate("/kid-and-toys");
  }, [navigate]);

  const onFurnitureClick = useCallback(() => {
    navigate("/furniture");
  }, [navigate]);

  const onElectronicsClick = useCallback(() => {
    navigate("/electronics");
  }, [navigate]);

  const onSportClick = useCallback(() => {
    navigate("/sports-and-gym");
  }, [navigate]);
  const [id, selectId] = useState("");
  return (
    <div className={styles.home}>

      <div className={styles.mainSection}>
        <div className={styles.main}>
          <img className={styles.imageIcon} alt="" src="../main-bg.png" />
          <div className={styles.searchContainer}>
            <div className={styles.title}>
              <div
                className={styles.letsUsHelp}
                data-animate-on-scroll
              >{`MAKE IT YOUR WAY!`}</div>
              <div
                className={styles.searchFromOver}
                data-animate-on-scroll
              >{`Search Or Post Your Need For A New Home, Car, Laptop, Mobile & Over 10,000 Other Categories Spread Across 10,000,00 Classified Ads`}</div>

              {/* <form className={styles.searchForm}>
                <div className={styles.formTitleGroup}>
                  <b className={styles.searchMobilesBikes}>
                    Search Mobiles, Bikes, cars and many more...
                  </b>
                </div>
                <div className={styles.formInputsRow}>
                  <div className={styles.inputsRow}>
                    <Input
                      className={styles.inputdefault}
                      type="text"
                      size="middle"
                      placeholder="Find Cars, Mobile Phones and more.."
                    />
                    <AutoComplete
                      className={styles.location}
                      options={[
                        { value: "Alberta" },
                        { value: "British Colombia" },
                        { value: "Manitoba" },
                        { value: "New Brunswick" },
                        { value: "Newfoundland and Labrador" },
                        { value: "Northwest Territories" },
                        { value: "Nova Scotia	" },
                        { value: "Nunavut" },
                        { value: "Ontario" },
                        { value: "Prince Edward Island	" },
                        { value: "Quebec" },
                        { value: "Saskatchewan" },
                        { value: "Yukon" },
                      ]}
                      filterOption={(inputValue, option) =>
                        option.value
                          .toUpperCase()
                          .indexOf(inputValue?.toUpperCase()) !== -1
                      }
                      placeholder="Location"
                    />
                 
                    <AutoComplete
                      className={styles.location}
                      options={[
                        { value: "All categories" },
                        { value: "Mobile Phones" },
                        { value: "Cars and Vehicles" },
                        { value: "Real Estate" },
                        { value: "Services" },
                        { value: "Kid and Toys" },
                        { value: "Furniture" },
                        { value: "Electronics & Other" },
                        { value: "Sports and Gym" },
                      ]}
                      filterOption={(inputValue, option) =>
                        option.value
                          .toUpperCase()
                          .indexOf(inputValue?.toUpperCase()) !== -1
                      }
                      placeholder="Search for Categrey"
                    />
                  </div>
                </div>
                <div className={styles.buttonGroup}>
                  <button
                    className={styles.searchButton}
                    onClick={onSearchButtonClick}
                  >
                    <div className={styles.search}>{`Search `}</div>
                  </button>
                </div>
              </form> */}

              <div className={styles.mainButton}>

                <div className={styles.buttonGroup}>
                  <button
                    className={styles.searchButton}
                    onClick={onSearchButtonClick}
                  >
                    <div className={styles.search}>{`Search Ads `}</div>
                  </button>
                </div>

                <div className={styles.buttonGroup}>
                  <button
                    className={styles.searchButton}
                    onClick={onPostAd}
                  >
                    <div className={styles.search}>{`Post Ads `}</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.featuredAds}>
        <div className={styles.recommendedAdsText}>
          <b className={styles.recommendedAds} data-animate-on-scroll>
            Recommended Ads
          </b>
        </div>
        <div className={styles.frameParent}>
          {item.map(item => (
            <div className={styles.dasdn}>
              <Link to={`/products-detail/${item.id}`} className={styles.link} >
                <div className={styles.rectangleParent}>
                  <img
                    className={styles.frameChild}
                    src={`http://127.0.0.1/Barter%20online/src/API/${item.file}`}
                  />
                  <div className={styles.frameGroup}>
                    <div className={styles.frameContainer}>
                      <div className={styles.frameDiv}>
                        <div className={styles.mobilePhoneParent}>
                          <div className={styles.mobilePhone}>{item.category}</div>
                          <div className={styles.albertaWrapper}>
                            <div className={styles.alberta}>{item.location}</div>
                          </div>
                        </div>
                        <b className={styles.iphone13Pro}>{item.title}</b>
                      </div>
                      <div className={styles.wrapper}>
                        <b className={styles.b}>$ {item.price} /-</b>
                      </div>
                    </div>
                  </div>
                  <div className={styles.lineParent}>
                    <div className={styles.frameItem} />
                    <div className={styles.articleAuthor}>
                      {/* <img
                      className={styles.avatarIcon}
                      alt=""
                      src="../avatar@2x.png"
                    /> */}
                      <div className={styles.authorText}>
                        <div className={styles.annaRos}>{item.name}</div>
                        <div className={styles.postedJustNow}>{item.province}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.viewMore} onClick={onViewMoreClick}>
          View More ....
        </div>
      </div>
      <div className={styles.category}>
        <div className={styles.popularcategory}>
          <div className={styles.title1}>
            <b className={styles.searchAdsBy} data-animate-on-scroll>
              Search Ads By Category
            </b>
          </div>
          <div className={styles.category1}>
            <div className={styles.column1}>
              <div className={styles.allCategories} onClick={onViewAllClick} >
                <img
                  className={styles.cardimageIcon}
                  alt=""
                  src="../cardimage@2x.png"
                />
                <div className={styles.text}>
                  <div className={styles.cardTitle}>
                    <div className={styles.cardTitleChild} />
                    <b className={styles.allCategories1}>All categories</b>
                  </div>
                </div>
              </div>
              <div className={styles.allCategories} onClick={onRealEstateClick}>
                <img
                  className={styles.cardimageIcon}
                  alt=""
                  src="../cardimage1@2x.png"
                />
                <div className={styles.text}>
                  <div className={styles.cardTitle}>
                    <div className={styles.cardTitleChild} />
                    <b className={styles.allCategories1}>Real Estate</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.column1}>
              <div className={styles.allCategories} onClick={onMobileClick}>
                <img
                  className={styles.cardimageIcon}
                  alt=""
                  src="../cardimage2@2x.png"
                />
                <div className={styles.text}>
                  <div className={styles.cardTitle2}>
                    <div className={styles.cardTitleChild} />
                    <b className={styles.allCategories1}>Mobile Phones</b>
                  </div>
                </div>
              </div>

              <div className={styles.allCategories} onClick={onServicesClick}>
                <img
                  className={styles.cardimageIcon}
                  alt=""
                  src="../cardimage3@2x.png"
                />
                <div className={styles.text}>
                  <div className={styles.cardTitle}>
                    <div className={styles.cardTitleChild} />
                    <b className={styles.allCategories1}>Services</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.column1}>
              <div className={styles.allCategories} onClick={onCarsClick}>
                <img
                  className={styles.cardimageIcon}
                  alt=""
                  src="../cardimage4@2x.png"
                />
                <div className={styles.text}>
                  <div className={styles.cardTitle}>
                    <div className={styles.cardTitleChild} />
                    <b className={styles.carsAndVehicles1}>Cars and Vehicles</b>
                  </div>
                </div>
              </div>
              <div className={styles.allCategories} onClick={onKidClick}>
                <img
                  className={styles.cardimageIcon}
                  alt=""
                  src="../cardimage5@2x.png"
                />
                <div className={styles.text}>
                  <div className={styles.cardTitle} >
                    <div className={styles.cardTitleChild} />
                    <b className={styles.allCategories1}>Kid and Toys</b>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.category2}>
            <div onClick={onFurnitureClick}>
              <CategoriesType
                categoryImageUrl="../cardimage6@2x.png"
                categoryName="Furniture"
                propFlex="1"
                propWidth1="179px"
              />
            </div>
            <div onClick={onElectronicsClick}>
              <CategoriesType
                categoryImageUrl="../cardimage7@2x.png"
                categoryName={`Electronics`}
                propFlex="unset"
                propWidth="152px"
                propFlexShrink="0"
                propWidth1="210px"
              />
            </div>
            <div onClick={onSportClick}>
              <CategoriesType
                categoryImageUrl="../cardimage8@2x.png"
                categoryName="Sports and Gym"
                propWidth1="235px"
              />
            </div>
          </div>
        </div>
        <div className={styles.viewAll} onClick={onViewAllCategory}>
          View ALL....
        </div>
      </div>
      <div className={styles.topCategory}>
        <div className={styles.newArrivals}>
          <div className={styles.title2}>
            <img className={styles.leafIcon} alt="" src="../leaf.svg" />
            <div className={styles.title3}>TOP CATEGORY</div>
          </div>
          <div className={styles.fashioncards}>
            <div className={styles.cars}>
              <img
                className={styles.carsIcon}
                alt=""
                src="../fashionimage@2x.png"
              />
              <div className={styles.info}>
                <div className={styles.text6}>
                  <div className={styles.name}>CARS</div>
                  <div className={styles.exploreNow}>Explore Now!</div>
                </div>
                <img className={styles.infoChild} alt="" src="../arrow-1.svg" />
              </div>
            </div>
            <div className={styles.moblies}>
              <img
                className={styles.mobileIcon}
                alt=""
                src="../fashionimage1@2x.png"
              />
              <div className={styles.info}>
                <div className={styles.text6}>
                  <div className={styles.name1}>MOBILES</div>
                  <div className={styles.exploreNow1}>Explore Now!</div>
                </div>
                <img className={styles.infoChild} alt="" src="../arrow-2.svg" />
              </div>
            </div>
            <div className={styles.readEstate}>
              <img
                className={styles.mobileIcon}
                alt=""
                src="../fashionimage2@2x.png"
              />
              <div className={styles.info}>
                <div className={styles.text6}>
                  <div className={styles.name1}>REAL ESTATE</div>
                  <div className={styles.exploreNow1}>Explore Now!</div>
                </div>
                <img
                  className={styles.infoChild}
                  alt=""
                  src="../arrow-21.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.featuredAds1}>
        <div className={styles.featuredAdsText}>
          <b className={styles.featuredAds2} data-animate-on-scroll>
            Featured Ads
          </b>
        </div>
        <div className={styles.productsPackages}>
          <div className={styles.iphoneParent}>
            <div className={styles.iphone}>
              <img
                className={styles.iphoneChild}
                alt=""
                src="../rectangle-151@2x.png"
              />
              <div className={styles.cardTitle6}>
                <b className={styles.activaG}>iPhone 13 Pro</b>
                <div className={styles.cardTitleInner1}>
                  <div className={styles.locationParent}>
                    <img
                      className={styles.locationIcon}
                      alt=""
                      src="../location@2x.png"
                    />
                    <b className={styles.newDelhiIndia}>New Delhi, India</b>
                  </div>
                </div>
                <b className={styles.b3}>₹ 25,000/-</b>
              </div>
            </div>
            <div className={styles.iphone}>
              <img
                className={styles.iphoneChild}
                alt=""
                src="../rectangle-191@2x.png"
              />
              <div className={styles.cardTitle6}>
                <b className={styles.activaG}>Hyundai Elite i20</b>
                <div className={styles.cardTitleInner1}>
                  <div className={styles.locationParent}>
                    <img
                      className={styles.locationIcon}
                      alt=""
                      src="../location1@2x.png"
                    />
                    <b className={styles.newDelhiIndia}>New Delhi, India</b>
                  </div>
                </div>
                <b className={styles.b3}>₹ 1,85,000/-</b>
              </div>
            </div>
          </div>
          <div className={styles.bikesParent}>
            <div className={styles.iphone}>
              <img
                className={styles.bikesChild}
                alt=""
                src="../rectangle-17@2x.png"
              />
              <div className={styles.cardTitle6}>
                <b className={styles.activaG}>Activa G</b>
                <div className={styles.cardTitleInner3}>
                  <div className={styles.locationContainer}>
                    <img
                      className={styles.locationIcon2}
                      alt=""
                      src="../location2@2x.png"
                    />
                    <b className={styles.chandigarhIndia}>Chandigarh, India</b>
                  </div>
                </div>
                <b className={styles.activaG}>₹ 85,000/-</b>
              </div>
            </div>
            <div className={styles.iphone}>
              <img
                className={styles.bikesChild}
                alt=""
                src="../rectangle-211@2x.png"
              />
              <div className={styles.cardTitle9}>
                <b className={styles.activaG}>Laptops</b>
                <div className={styles.cardTitleInner3}>
                  <div className={styles.groupDiv}>
                    <img
                      className={styles.locationIcon2}
                      alt=""
                      src="../location2@2x.png"
                    />
                    <b className={styles.assamIndia}>Assam, India</b>
                  </div>
                </div>
                <b className={styles.activaG}>₹ 95,000/-</b>
              </div>
            </div>
          </div>
        </div>
        <a className={styles.viewMore1} onClick={onViewMore1Click}>
          View More ....
        </a>
      </div> */}
      <div className={styles.ourTrustedPartnersSection}>
        <div className={styles.featuredAdsText1}>
          <b className={styles.discoverTheWorld}>Our Trusted Partners</b>
          <b className={styles.discoverTheWorld1}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </b>
        </div>
        <div className={styles.productsPackages1}>
          <div className={styles.iphoneParent}>
            <div className={styles.iphone}>
              <div className={styles.companyLogo2}>
                <img
                  className={styles.logo2Icon}
                  alt=""
                  src="../logo2@2x.png"
                />
              </div>
              <div className={styles.companyNameTitle}>
                <b className={styles.activaG}>Company Name</b>
              </div>
            </div>
            <div className={styles.iphone}>
              <img className={styles.logo3Icon} alt="" src="../logo3@2x.png" />
              <div className={styles.companyNameTitle}>
                <b className={styles.activaG}>Company Name</b>
              </div>
            </div>
            <div className={styles.iphone}>
              <img className={styles.logo1Icon} alt="" src="../logo1@2x.png" />
              <div className={styles.companyNameTitle}>
                <b className={styles.activaG}>Company Name</b>
              </div>
            </div>
            <div className={styles.iphone}>
              <img className={styles.logo4Icon} alt="" src="../logo4@2x.png" />
              <div className={styles.companyNameTitle}>
                <b className={styles.activaG}>Company Name</b>
              </div>
            </div>
            <div className={styles.iphone}>
              <img className={styles.logo5Icon} alt="" src="../logo5@2x.png" />
              <div className={styles.companyNameTitle}>
                <b className={styles.activaG}>Company Name Title</b>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.appDownload}>
        <div className={styles.vouchers}>
          <div className={styles.downloadapp}>
            <div className={styles.downloadAppGetTheVoucherParent}>
              <div className={styles.downloadAppContainer}>
                <p className={styles.downloadApp}>{`DOWNLOAD APP &`}</p>
                <p className={styles.getTheVoucher}>GET THE VOUCHER!</p>
              </div>
              <div className={styles.get30OffContainer}>
                <p className={styles.downloadApp}>
                  Get 30% off for first transaction using
                </p>
                <p className={styles.getTheVoucher}>
                  Rondovision mobile app for now.
                </p>
              </div>
            </div>
            <div className={styles.frameParent7}>
              <button className={styles.rectangleWrapper}>
                <img
                  className={styles.frameChild4}
                  alt=""
                  src="../rectangle-55@2x.png"
                />
              </button>
              <button className={styles.rectangleWrapper}>
                <img
                  className={styles.frameChild4}
                  alt=""
                  src="../rectangle-18@2x.png"
                />
              </button>
            </div>
          </div>
        </div>
        <img className={styles.image2Icon} alt="" src="../image-2@2x.png" />
      </div>
      <div className={styles.aboutUsSection}>
        <div className={styles.aboutUsImageContainer}>
          <img
            className={styles.aboutUsImage}
            alt=""
            src="../unsplash87jymb9zfu@2x.png"
          />
        </div>
        <div className={styles.aboutUsBlurb}>
          <div className={styles.frameContainer}>
            <b className={styles.aboutUs}>About US</b>
            <div className={styles.aboutUsTitle}>Barter Online</div>
            <div className={styles.aboutUsDescription}>
              The site has a variety of other features you can discover by using it. We strive to serve every customer in the best way. Taking customer service to a new level is our goal. The number of cities we cover is greater than most other classified ad sites. A simple ad submission form completes the ad posting process.
            </div>
          </div>


          <div className={styles.featuredDestinationCta}>
            <Link className={styles.featuredDestinationCta} to="/about-us">
              Know More
            </Link>
            {/* <div className={styles.knowMore}>{`Know More  `}</div> */}
          </div>
        </div>
      </div>
      <div className={styles.subcribeSection}>
        <img
          className={styles.shareYourTravelsSectionBac}
          alt=""
          src="../rectangle-193@2x.png"
        />
        <div className={styles.shareYourTravelsForm}>
          <div className={styles.formHeader}>
            <b className={styles.formTitle}>Subcribe To Our News</b>
          </div>
          <form className={styles.form}>
            <div className={styles.formFields}>
              <div className={styles.formFields}>
                <TextField
                  className={styles.input}
                  color="primary"
                  variant="outlined"
                  type="text"
                  label="Enter your Email"
                  placeholder="Placeholder"
                  size="medium"
                  margin="none"
                />
              </div>
            </div>
            <button className={styles.formSubmitButton}>
              <div className={styles.submit}>Subcribe</div>
            </button>
          </form>
        </div>
      </div>
      <div className={styles.recentStoriesSection}>
        <div className={styles.recentStoriesTitles}>
          <b className={styles.catchUpTo}>catch up to our Blogs</b>
          <b className={styles.recentBlogsEntries}>Recent Blogs Entries</b>
        </div>
        <div className={styles.storyBlock}>
          <div className={styles.storiesLeft}>
            <div className={styles.storyBigCard}>
              <img
                className={styles.bigStoryImage}
                alt=""
                src="../unsplashrezbvcvaspi@2x.png"
              />
              <div className={styles.bigStoryBody}>
                <div className={styles.bigStoryItems}>
                  <div className={styles.bigStoryText}>
                    <div className={styles.theUltimateGuide}>
                      The Ultimate Guide to Buying and Selling on Classified Ad
                      Websites
                    </div>
                    <div className={styles.inThisComprehensive}>
                      In this comprehensive guide, you'll learn how to navigate
                      the world of online classified ads, from finding the best
                      ...
                    </div>
                  </div>
                  <div className={styles.playButton}>
                    <div className={styles.viewBlog} href="https://barteronline.ca/blogs"> View Blog...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.storiesRight}>
            <div className={styles.storiesColumn}>
              <div className={styles.storyCard}>
                <img
                  className={styles.storyImageIcon}
                  alt=""
                  src="../unsplashc-zhkgezy3u@2x.png"
                />
                <div className={styles.storyText}>
                  <div className={styles.theUltimateGuide}>
                    Maximizing Your Earnings with Classified Ads: A Step-by-Step
                    Guide
                  </div>
                  <div className={styles.inThisComprehensive}>
                    <span>{`you'll discover how to make the most money possible from buying and selling items on classified ad websites.  `}</span>
                    <span className={styles.viewFullBlog}>
                      view full blog...
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.storyCard}>
                <img
                  className={styles.storyImageIcon1}
                  alt=""
                  src="../unsplash-uinpffj7c@2x.png"
                />
                <div className={styles.storyText}>
                  <div className={styles.theUltimateGuide}>
                    Discover the Best Classified Ad Websites for Your Needs
                  </div>
                  <div className={styles.inThisComprehensive}>
                    <span>{`Whether you're looking to buy a new car, sell a gently used couch, or find your next job. `}</span>
                    <span className={styles.viewFullBlog}>
                      view full blog...
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.storyCard}>
                <img
                  className={styles.storyImageIcon}
                  alt=""
                  src="../unsplashpg5df4wy8m0@2x.png"
                />
                <div className={styles.storyText}>
                  <div className={styles.theUltimateGuide}>
                    Safeguarding Your Privacy and Security on Ad Websites
                  </div>
                  <div className={styles.inThisComprehensive}>
                    <span>{`Featuring razor-sharp peaks housing the arctic landscape. This astonishing  `}</span>
                    <span className={styles.viewFullBlog}>
                      view full blog...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerCol1}>
        <div className={styles.searchAdsBy1} >Search ADs By Provinces</div>
        <div className={styles.frameParent8}>
          <div className={styles.alberta1} onClick={onAlbertaClick} >Alberta</div>
          <div className={styles.britishColumbia} onClick={onBritishColumbiaClick} >British Columbia</div>
          <div className={styles.manitoba1} onClick={onManitobaClick} >Manitoba</div>
          <div className={styles.newBrunswick} onClick={onNewBrunswickClick} >New Brunswick</div>
          <div className={styles.newfoundland} onClick={onNewfoundlandandLabradorClick} >Newfoundland </div>
          <div className={styles.northwestTerritories} onClick={onNorthwestTerritoriesClick} >
            Northwest Territories
          </div>
          <div className={styles.novaScotia1} onClick={onNovaScotiaClick}>Nova Scotia</div>
        </div>
        <div className={styles.saskatchewanParent}>
          <div className={styles.nunavut} onClick={onNunavutClick} >Nunavut</div>
          <div className={styles.ontario} onClick={onOntarioClick}>Ontario</div>
          <div className={styles.princeEdwardIsland} onClick={onPrinceEdwardIslandClick}>
            Prince Edward Island
          </div>
          <div className={styles.ontario} onClick={onQuebecClick} >Quebec</div>
          <div className={styles.saskatchewan} onClick={onSaskatchewanClick} >Saskatchewan</div>
          <div className={styles.yukon} onClick={onYukonClick} >Yukon</div>
        </div>
      </div>
    </div>

  );
};

export default Home;