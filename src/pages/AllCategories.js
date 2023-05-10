import { useCallback, useEffect, useState } from "react";
import "antd/dist/antd.min.css";
import { Link, useNavigate } from "react-router-dom";
import CategoriesType from "../components/CategoriesType";
import styles from "./Home.module.css";

const AllCategories = () => {
    const [item, setItem] = useState([]);

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

    const onJobsListingsClick = useCallback(() => {
        navigate("/jobs-listings");
    }, [navigate]);
    const onCommunityClick = useCallback(() => {
        navigate("/community");
    }, [navigate]);
    const onBusinessOpportunitiesClick = useCallback(() => {
        navigate("/business-opportunities");
    }, [navigate]);
    const onPetsClick = useCallback(() => {
        navigate("/pets");
    }, [navigate]);
    const onArtAndCollectiblesClick = useCallback(() => {
        navigate("/art-and-collectibles");
    }, [navigate]);
    const onEducationClick = useCallback(() => {
        navigate("/education");
    }, [navigate]);

    const onViewAllClick = useCallback(() => {
        navigate("/products");
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

    const onMensClick = useCallback(() => {
        navigate("/mens-fashion");
    }, [navigate]);
    const onWomensClick = useCallback(() => {
        navigate("/womens-fashion");
    }, [navigate]);
    const onKidsClick = useCallback(() => {
        navigate("/kids-fashion");
    }, [navigate]);
   
   
    return (
        <div className={styles.home}>

            <div className={styles.AllCategoriesPage}>

                <div className={styles.category}>
                    <div className={styles.popularcategory}>
                        <div className={styles.category2}>

                            <div onClick={onMensClick}>
                                <CategoriesType
                                    categoryImageUrl="../menFashion.png"
                                    categoryName="Mens Fashion"
                                    propFlex="1"
                                    propWidth1="179px"
                                />
                            </div>
                            <div onClick={onWomensClick}>
                                <CategoriesType
                                    categoryImageUrl="../womenFashion.jpg"
                                    categoryName={`Women Fashion `}
                                    propFlex="unset"
                                    propWidth="152px"
                                    propFlexShrink="0"
                                    propWidth1="210px"
                                />
                            </div>
                            <div onClick={onKidsClick}>
                                <CategoriesType
                                    categoryImageUrl="../kidFashion.png"
                                    categoryName="Kids Fashion"
                                    propWidth1="235px"
                                />
                            </div>
                        </div>
                        <div className={styles.category1}>
                            <div className={styles.column1}>
                                <div className={styles.allCategories} onClick={onJobsListingsClick}>
                                    <img
                                        className={styles.cardimageIcon}
                                        alt=""
                                        src="../JobsListings.jpg"
                                    />
                                    <div className={styles.text}>
                                        <div className={styles.cardTitle}>
                                            <div className={styles.cardTitleChild} />
                                            <b className={styles.carsAndVehicles1}>Jobs Listings</b>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.allCategories} onClick={onPetsClick} >
                                    <img
                                        className={styles.cardimageIcon}
                                        alt=""
                                        src="../pets.jpg"
                                    />
                                    <div className={styles.text}>
                                        <div className={styles.cardTitle}>
                                            <div className={styles.cardTitleChild} />
                                            <b className={styles.allCategories1}>Pets</b>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className={styles.column1}>
                                <div className={styles.allCategories} onClick={onCommunityClick}>
                                    <img
                                        className={styles.cardimageIcon}
                                        alt=""
                                        src="../Community.jpg"
                                    />
                                    <div className={styles.text}>
                                        <div className={styles.cardTitle2}>
                                            <div className={styles.cardTitleChild} />
                                            <b className={styles.allCategories1}>Community</b>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.allCategories} onClick={onArtAndCollectiblesClick}>
                                    <img
                                        className={styles.cardimageIcon}
                                        alt=""
                                        src="../art.jpg"
                                    />
                                    <div className={styles.text}>
                                        <div className={styles.cardTitle}>
                                            <div className={styles.cardTitleChild} />
                                            <b className={styles.allCategories1}>Art And Collectibles</b>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.column1}>
                                <div className={styles.allCategories} onClick={onBusinessOpportunitiesClick}>
                                    <img
                                        className={styles.cardimageIcon}
                                        alt=""
                                        src="../business-opportunities.jpg"
                                    />
                                    <div className={styles.text}>
                                        <div className={styles.cardTitle} >
                                            <div className={styles.cardTitleChild} />
                                            <b className={styles.allCategories1}>Business Opportunities</b>

                                        </div>
                                    </div>
                                </div>

                                <div className={styles.allCategories} onClick={onEducationClick}>
                                    <img
                                        className={styles.cardimageIcon}
                                        alt=""
                                        src="../education.jpg
                                    
                                    "
                                    />
                                    <div className={styles.text}>
                                        <div className={styles.cardTitle}>
                                            <div className={styles.cardTitleChild} />
                                            <b className={styles.allCategories1}>Education</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                        {/* new above */}
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
                                    categoryName={`Electronics `}
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

                </div>
            </div>


        </div>

    );
};

export default AllCategories;





