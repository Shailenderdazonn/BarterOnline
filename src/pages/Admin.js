import { useCallback } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Admin.module.css";

const Admin = () => {
  const navigate = useNavigate();

  const onBO51Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.admin}>
      <div className={styles.featuredImageContainer}>
        <img
          className={styles.featuredImageContainerChild}
          alt=""
          src="../rectangle-67@2x.png"
        />
      </div>
      <div className={styles.featuredDestinationBlurb}>
        <form className={styles.form}>
          <a className={styles.bo51} onClick={onBO51Click} />
          <div className={styles.formFields}>
            <div className={styles.mobile}>
              <TextField
                className={styles.input}
                color="primary"
                variant="outlined"
                type="text"
                label="Enter Email/Mobile No."
                placeholder="Placeholder"
                size="medium"
                margin="none"
              />
            </div>
            <div className={styles.mobile}>
              <TextField
                className={styles.input}
                color="primary"
                variant="outlined"
                type="text"
                label="Enter Email/Mobile No."
                placeholder="Placeholder"
                size="medium"
                margin="none"
              />
            </div>
            <button className={styles.formSubmitButton}>
              <div className={styles.submit}>Submit</div>
            </button>
          </div>
          <div className={styles.formText}>
            <div className={styles.forgottenYourLogin}>
              Forgotten Your Login Details? Get Help Signing In
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;
