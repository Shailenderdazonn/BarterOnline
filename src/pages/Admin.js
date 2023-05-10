import { useCallback } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Admin.module.css";

const Admin = () => {
  const navigate = useNavigate();

  function validation() {
    var id = document.f1.name.value;
    var ps = document.f1.pass.value;
    if (id.length == "" && ps.length == "") {
      alert("User email and Password fields are empty");
      return false;
    }
    else {
      if (id.length == "") {
        alert("User Email is empty");
        return false;
      }
      if (ps.length == "") {
        alert("Password field is empty");
        return false;
      }
    }
  }

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
        <form className={styles.form}  name="f1" action="http://127.0.0.1/Barter%20online/src/API/admin.php" onSubmit={validation} method="POST">
          <a className={styles.bo51} onClick={onBO51Click} />
          <div className={styles.formFields}>
            <div className={styles.mobile}>
              <TextField
                className={styles.input}
                color="primary"
                variant="outlined"
                type="text"
                label="Enter Email/Mobile No."
                name="email"
                id="email"                
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
                name="password"
                id="password"
                size="medium"
                margin="none"
              />
            </div>
            <button className={styles.formSubmitButton} type="submit"
             id="btn"
             value="Login" >
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
