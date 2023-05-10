import "antd/dist/antd.min.css";
import React, { useState } from "react";
import {
  FormControlLabel as MuiFormControlLabel,
  Checkbox as MuiCheckbox,
} from "@mui/material";
import {
  Input,
  Checkbox as AntCheckbox,
} from "antd";
import styles from "./Sell.module.css";
import { useLocation } from "react-router-dom";
// import { useLocation, useNavigate   } from "react-router-dom";

const Sell = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const userdata = useLocation();


  // Retrieve user data from query parameters
  const queryParams = new URLSearchParams(userdata.search);
  const userid = queryParams.get("ID");
  const userName = queryParams.get("name");

  if (!userid) { // Check if userName is missing
    alert('Please log in first to Post an ad.'); // Show alert message
    // Use window.location.href to redirect the page
    window.location.href = "http://localhost:3000/login";
    return null; // Return null to prevent rendering of the component
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to the PHP script
    const formData = new FormData();
    formData.append('title', title);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('location', location);
    formData.append('file', file);
    formData.append('userid', userid);
    try {
      const response = await fetch('http://127.0.0.1/Barter%20online/src/API/sell.php', {
        method: 'POST',
        body: formData
      });
      const result = await response.text();
      console.log(result);
      setSuccess(true);
      setError(null);
      // Clear input fields
      setTitle('');
      setPrice('');
      setDescription('');
      setCategory('');
      setLocation('');
      // Redirect to success page
      window.location.href = 'http://localhost:3000/products';
    } catch (err) {
      console.error(err);
      setError('There was an error submitting the form. Please try again later.');
      setSuccess(false);
    }
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  }

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }
  const handleuserID = (e) => {
    setFile(e.target.value);
  }

  // if (!userid) { // Check if userName is missing
  //   alert('Please log in first to Post an ad.'); // Show alert message
  //   // Use window.location.href to redirect the page
  //   window.location.href = "http://localhost:3000/login";
  //   return;
  // }


  return (
    <div className={styles.sell}>
      <form className={styles.adsPost} onSubmit={handleSubmit} >
        <div className={styles.heading}>
          <b className={styles.postYourAd}>Post Your Ad</b>
          <p className={styles.userName}>Welcome {userName}</p>
          <Input className={styles.userid} type="text" value={userid} onChange={handleuserID} />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.titleOfAdParent}>
            <label className={styles.titleOfAd} htmlFor="title">Title of Ad</label>
            <Input
              className={styles.inputdefault}
              type="text"
              size="middle"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className={styles.selectAdCategoryParent}>
            <label className={styles.titleOfAd} htmlFor="category">Select Ad Category:</label>
            <div className={styles.categoryDropdown}>
              <select
                className={styles.dropdownbutton}
                value={category}
                onChange={handleCategoryChange}
                required
              >
                <option value="">Select Category</option>
                <option value="Mens Fashion">Mens Fashion </option>
                <option value="Women Fashion">Women Fashion </option>
                <option value="Kids Fashion">Kids Fashion </option>
                <option value="Mobile Phones">Mobile Phones </option>
                <option value="Cars and Vehicles">Cars and Vehicles </option>
                <option value="Real Estate">Real Estate </option>
                <option value="Services">Services </option>
                <option value="Kid and Toys">Kid and Toys </option>
                <option value="Furniture">Furniture </option>
                <option value="Electronics & Other">Electronics & Other </option>
                <option value="Sports and Gym">Sports and Gym </option>
                <option value="Jobs Listings">Jobs Listings</option>
                <option value="Community">Community</option>
                <option value="Business Opportunities">Business Opportunities</option>
                <option value="Pets">Pets</option>
                <option value="Art and Collectibles">Art and Collectibles</option>
                <option value="Education">Education</option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.confirmYourLoactionParent}>
            <label className={styles.titleOfAd} htmlFor="location">Confirm Your Location:</label>
            <select
              className={styles.confirmYourLoactionParent}
              value={location}
              onChange={handleLocationChange}
              required
            >                    
              <option value="">Select Location</option>
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
          <div className={styles.itemPriceCadParent}>
            <label className={styles.titleOfAd} htmlFor="price">Item Price ($ CAD):</label>
            <Input
              className={styles.inputdefault}
              type="text"
              size="middle"
              value={price}
              onChange={handlePriceChange}
              required
            />
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.descriptionWrapper}>
            <div className={styles.titleOfAd}>Description:</div>
          </div>
          <textarea
            className={styles.autocompletebasic}
            size="middle"
            placeholder="Enter your Description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <div className={styles.uploadImagesWrapper}>
          <div className={styles.titleOfAd}>UPLOAD IMAGES:</div>
        </div>
        <div className={styles.adsPostInner}>
          <div className={styles.selectFilesButtonParent}>
            <input
              className={styles.selectFilesButton}
              type="file"
              onChange={handleFileChange}
              required
            />
            <div className={styles.maximumUploadFile}>
              Maximum upload file size 500 KB
            </div>
          </div>
        </div>
        {/* <div className={styles.makeYourAdFeatured}>
          <div className={styles.leftSide}>
            <div className={styles.heading}>
              <b className={styles.makeYourAd}>Make Your Ad Featured</b>
            </div>
            <div className={styles.descriptionWrapper}>
              <div className={styles.premiumAdOptions}>Premium Ad Options:</div>
            </div>
            <div className={styles.markLeft}>
              <div className={styles.checkboxdefaultCheckboxOnlParent}>
                <Checkbox />
                <div className={styles.regularAd0000Wrapper}>
                  <div className={styles.regularAd0000Container}>
                    <span className={styles.regularAd}>Regular Ad</span>
                    <span className={styles.span}> $00.00</span>
                  </div>
                </div>
              </div>
              <div className={styles.checkboxdefaultCheckboxOnlParent}>
                <Checkbox />
                <div className={styles.regularAd0000Wrapper}>
                  <div className={styles.regularAd0000Container}>
                    <span className={styles.regularAd}>Top Featured Ads</span>
                    <span className={styles.span}> $59.00</span>
                  </div>
                </div>
              </div>
              <div className={styles.checkboxdefaultCheckboxOnlParent}>
                <Checkbox />
                <div className={styles.regularAd0000Wrapper}>
                  <div className={styles.regularAd0000Container}>
                    <span className={styles.regularAd}>Urgent Ads</span>
                    <span className={styles.span}> $79.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.descriptionWrapper}>
              <b className={styles.whatIsMode}>What is Mode Of Payment?</b>
            </div>
            <div className={styles.descriptionWrapper}>
              <div className={styles.premiumAdOptions}>
                Please select the preferred payment method:
              </div>
            </div>
            <div className={styles.frameDiv}>
              <Checkbox />
              <div className={styles.directBankTransferWrapper}>
                <div className={styles.directBankTransfer}>
                  Direct Bank Transfer
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <Checkbox />
              <MuiFormControlLabel
                className={styles.checkboxdefaultCheckboxOnl}
                label=""
                control={<MuiCheckbox color="primary" size="medium" />}
              />
              <div className={styles.directBankTransferWrapper}>
                <div className={styles.directBankTransfer}>Cheque Payment</div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <AntCheckbox />
              <MuiFormControlLabel
                className={styles.checkboxdefaultCheckboxOnl}
                label=""
                control={<MuiCheckbox color="primary" size="medium" />}
              />
              <div className={styles.creditCardWrapper}>
                <div className={styles.creditCard}>Credit Card</div>
              </div>
            </div>
          </div>
        </div> */}
        <div className={styles.frameParent1}>
          <div className={styles.checkboxdefaultCheckboxOnlParent3}>
            <AntCheckbox />
            <div className={styles.byClickYouMustAgreeWithOWrapper}>
              <b className={styles.byClickYouContainer}>
                <span className={styles.byClickYouContainer1}>
                  <span className={styles.span}>
                    By click you must agree with our
                  </span>
                  <span
                    className={styles.termsCondition}
                  >{` Terms & Condition and Rules.`}</span>
                </span>
              </b>
            </div>
          </div>
          {error && <div className="error">{error}</div>}
          {success && <div className={styles.success}>The Ads is Successful Posted!</div>}
          <button className={styles.postAd} type="submit">
            <div className={styles.postYourAd1}>Post Your Ad</div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sell;