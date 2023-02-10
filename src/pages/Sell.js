import "antd/dist/antd.min.css";
import React, { useState } from "react";
import {
  FormControlLabel as MuiFormControlLabel,
  Checkbox as MuiCheckbox,
} from "@mui/material";
import {
  Input,
  Checkbox,
  Checkbox as AntCheckbox,
} from "antd";
import styles from "./Sell.module.css";

const Sell = () => {

  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [location, setlocation] = useState("");
  const [file, setFile] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("location", location);
    formData.append("file", file);

    fetch("http://localhost/Classifieds%20ad/src/API/sell.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className={styles.sell}>
      <form className={styles.adsPost} onSubmit={handleSubmit} method="post" >
        <div className={styles.heading}>
          <b className={styles.postYourAd}>Post Your Ad</b>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.titleOfAdParent}>
            <label className={styles.titleOfAd} htmlFor="title">Title of Ad</label>
            <Input
              className={styles.inputdefault}
              type="text"
              size="middle"
              placeholder="Enter Title"
              id="title"
              value={title}
              onChange={(event) => settitle(event.target.value)}

            />
          </div>
          <div className={styles.selectAdCategoryParent}>
            <label className={styles.titleOfAd} htmlFor="category">Select Ad Category:</label>
            <div className={styles.heading}>
              <select
                name="Category"
                className={styles.dropdownbutton}
                id="category"
                value={category}
                onChange={(event) => setcategory(event.target.value)}
              >
                <option value="">Select Category</option>
                <option value="All categories">All categories</option>
                <option value="Mobile Phones">Mobile Phones </option>
                <option value="Cars and Vehicles">Cars and Vehicles </option>
                <option value="Real Estate">Real Estate </option>
                <option value="Services">Services </option>
                <option value="Kid and Toys">Kid and Toys </option>
                <option value="Furniture">Furniture </option>
                <option value="Electronics & Other">Electronics & Other </option>
                <option value="Sports and Gym">Sports and Gym </option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.confirmYourLoactionParent}>
            <label className={styles.titleOfAd} htmlFor="location">Confirm Your Location:</label>
            <select
              name="Location"
              className={styles.confirmYourLoactionParent}
              id="location"
              value={location}
              onChange={(event) => setlocation(event.target.value)}
            >
              <option value="">Select Location</option>
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
              <option value="Yukon">Yukon</option>
            </select>
          </div>
          <div className={styles.itemPriceCadParent}>
            <label className={styles.titleOfAd} htmlFor="price">Item Price ($ CAD):</label>
            <Input
              className={styles.inputdefault}
              type="text"
              size="middle"
              id="price"
              value={price}
              onChange={(event) => setprice(event.target.value)}
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
            id="description"
            value={description}
            onChange={(event) => setdescription(event.target.value)}
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
              id="file"
              onChange={(event) => setFile(event.target.files[0])}
            />
            <div className={styles.maximumUploadFile}>
              Maximum upload file size 500 KB
            </div>
          </div>
        </div>
        <div className={styles.makeYourAdFeatured}>
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
        </div>
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
          <button className={styles.postAd} type="submit" value="submit" >
            <div className={styles.postYourAd1}>Post Your Ad</div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sell;
