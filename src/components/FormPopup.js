import { TextField } from "@mui/material";
import styles from "./FormPopup.module.css";

const FormPopup = ({ onClose }) => {
  return (
    <div className={styles.formPopup}>
      <button className={styles.closeButton} onClick={onClose}>
        <img
          className={styles.closeButtonChild}
          alt=""
          src="../ellipse-225.svg"
        />
        <img className={styles.closeButtonItem} alt="" src="../line-8.svg" />
        <img className={styles.closeButtonInner} alt="" src="../line-9.svg" />
      </button>
      <form className={styles.form}>
        <div className={styles.formText}>
          <div className={styles.shareYourDetails}>Share your Details</div>
          <div className={styles.suggestAdsThat}>
            Suggest ads that you want to see and we will feature it in our
            website.
          </div>
        </div>
        <form className={styles.formFields}>
          <div className={styles.name}>
            <TextField
              className={styles.input}
              variant="outlined"
              type="text"
              label="Your name"
              size="medium"
              margin="none"
            />
          </div>
          <div className={styles.name}>
            <TextField
              className={styles.input}
              color="primary"
              variant="outlined"
              type="email"
              label="Enter Email"
              placeholder="Placeholder"
              size="medium"
              margin="none"
            />
          </div>
          <div className={styles.name}>
            <TextField
              className={styles.input}
              color="primary"
              variant="outlined"
              type="tel"
              label="Enter Phone Number"
              size="medium"
              margin="none"
              required
            />
          </div>
          <div className={styles.name}>
            <TextField
              className={styles.input3}
              color="primary"
              variant="outlined"
              multiline
              rows={4}
              label="Describe what kind of Ads you want to focus on"
              margin="none"
            />
          </div>
          
        </form>
        <button className={styles.formSubmitButton}>
          <div className={styles.submit}>Submit</div>
        </button>
      </form>
      
    </div>
  );
};

export default FormPopup;
