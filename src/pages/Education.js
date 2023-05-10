import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Products.module.css";
import axios from "axios";

const Education = () => {
    const [ads, setAds] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Education");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    useEffect(() => {
        fetchAds();
    }, []);

    const fetchAds = async () => {
        try {
            const response = await axios.get(
                "http://localhost/Barter%20online/src/API/filter.php"
            );
            setAds(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const filteredAds = ads.filter(ad =>
        (!selectedLocation || ad.location === selectedLocation) &&
        (!selectedCategory || ad.category === selectedCategory) &&
        (!minPrice || ad.price >= parseFloat(minPrice)) &&
        (!maxPrice || ad.price <= parseFloat(maxPrice))
    );

    return (
        <div className={styles.products}>
            <div className={styles.searchFormSection}>
                <div className={styles.searchContainer}>
                    <div className={styles.bannerGradient} />
                    <img
                        className={styles.bannerBackgroundIcon}
                        alt=""
                        src="../main-bg.png"
                    />
                    <div className={styles.searchSection}>
                        <div className={styles.title}>
                            <div className={styles.whereAreYou}>
                                What are you Looking For ?
                            </div>
                        </div>
                        <div className={styles.searchForm}>
                            <div className={styles.formInputsRow}>
                                <div className={styles.inputsRow} >
                                    <select className={styles.location} value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                                        <option value="">Select a category</option>
                                        <option value="Mens Fashion">Mens Fashion </option>
                                        <option value="Women Fashion">Women Fashion </option>
                                        <option value="Kids Fashion">Kids Fashion </option>
                                        <option value="Mobile Phones">Mobile Phones</option>
                                        <option value="Cars and Vehicles">Cars and Vehicles</option>
                                        <option value="Real Estate">Real Estate</option>
                                        <option value="Services">Services</option>
                                        <option value="Furniture">Furniture</option>
                                        <option value="Electronics & Other">Electronics & Other</option>
                                        <option value="Sports and Gym">Sports and Gym</option>
                                        <option value="Jobs Listings">Jobs Listings</option>
                                        <option value="Community">Community</option>
                                        <option value="Business Opportunities">Business Opportunities</option>
                                        <option value="Pets">Pets</option>
                                        <option value="Art and Collectibles">Art and Collectibles</option>
                                        <option value="Education">Education</option>
                                    </select>

                                    <select className={styles.location} value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)}>
                                        <option value="">Select A Provinces</option>
                                        <option value="All Canada">All Canada</option>
                                        <option value="Alberta">Alberta</option>
                                        <option value="British Colombia">British Colombia</option>
                                        <option value="Manitoba">Manitoba</option>
                                        <option value="New Brunswick">New Brunswick</option>
                                        <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                                        <option value="Northwest Territories">Northwest Territories</option>
                                        <option value="Nova Scotia">Nova Scotia</option>
                                        <option value="Nunavut">Nunavut</option>
                                        <option value="Ontario">Ontario</option>
                                        <option value="Prince Edward Island">Prince Edward Island</option>
                                        <option value="Quebec">Quebec</option>
                                        <option value="Saskatchewan">Saskatchewan</option>
                                        <option value="Yukon">Yukon</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.searchResults}>
                <div className={styles.searchFilters}>
                    <div className={styles.resultsSummary}>
                        <div className={styles.resultsParent}>
                            <div className={styles.results}>Choose According To Your Range Below</div>
                            <img className={styles.frameChild} alt="" src="../vector-2.svg" />
                        </div>
                    </div>
                    <select className={styles.categories1} value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                        <option value="">Select a Category</option>
                        <option value="Mens Fashion">Mens Fashion </option>
                        <option value="Women Fashion">Women Fashion </option>
                        <option value="Kids Fashion">Kids Fashion </option>
                        <option value="Mobile Phones">Mobile Phones</option>
                        <option value="Cars and Vehicles">Cars and Vehicles</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Services">Services</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Electronics & Other">Electronics & Other</option>
                        <option value="Sports and Gym">Sports and Gym</option>
                        <option value="Jobs Listings">Jobs Listings</option>
                        <option value="Community">Community</option>
                        <option value="Business Opportunities">Business Opportunities</option>
                        <option value="Pets">Pets</option>
                        <option value="Art and Collectibles">Art and Collectibles</option>
                        <option value="Education">Education</option>
                    </select>
                    <select className={styles.categories1} value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)}>
                        <option value="">Select a Provinces</option>
                        <option value="All Canada">All Canada</option>
                        <option value="Alberta">Alberta</option>
                        <option value="British Colombia">British Colombia</option>
                        <option value="Manitoba">Manitoba</option>
                        <option value="New Brunswick">New Brunswick</option>
                        <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                        <option value="Northwest Territories">Northwest Territories</option>
                        <option value="Nova Scotia">Nova Scotia</option>
                        <option value="Nunavut">Nunavut</option>
                        <option value="Ontario">Ontario</option>
                        <option value="Prince Edward Island">Prince Edward Island</option>
                        <option value="Quebec">Quebec</option>
                        <option value="Saskatchewan">Saskatchewan</option>
                        <option value="Yukon">Yukon</option>
                    </select>
                    <img className={styles.frameChild} alt="" src="../vector-2.svg" />
                    <div className={styles.budget}>
                        <b className={styles.results1}>Budget</b>
                        <input placeholder="Max" className={styles.inputstandardFormgroup1} value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
                        <b className={styles.to}>To</b>
                        <input placeholder="Min" className={styles.inputstandardFormgroup} value={minPrice} onChange={e => setMinPrice(e.target.value)} />
                    </div>

                </div>
                <div className={styles.resultsSection}>
                    <div className={styles.ads1}>
                        {/* <div className={styles.results2}>1 out of 177 Results</div> */}
                        <div className={styles.adsfetch}>
                            {filteredAds.length > 0 ? (
                                filteredAds.map(ads => (
                                    <Link to={`/products-detail/${ads.id}`}>
                                        <div className={styles.div} key={ads.id}>

                                            <img className={styles.child} alt="" src="../rectangle-40.svg" />

                                            <div className={styles.priceAndAddressdate}>
                                                <div className={styles.nov22}>Nov 22</div>
                                                <div className={styles.mpNagarZone}>
                                                    {ads.location}
                                                </div>
                                                <div className={styles.dellLaptopsI5}>
                                                    {ads.title}
                                                </div>
                                                <b className={styles.b}>$ {ads.price}/-</b>
                                            </div>

                                            <img
                                                className={styles.item}
                                                src={`http://127.0.0.1/Barter%20online/src/API/${ads.file}`}
                                            />

                                        </div>
                                    </Link>

                                ))
                            ) : (
                                <p>No ads match your search criteria.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Education;