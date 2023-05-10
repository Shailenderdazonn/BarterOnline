import { useCallback } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  [navigate];
  function validation() {
    var id = document.f1.name.value;
    var ps = document.f1.pass.value;
    if (id.length == "" && ps.length == "") {
      alert("User Name and Password fields are empty");
      return false;
    }
    else {
      if (id.length == "") {
        alert("User Name is empty");
        return false;
      }
      if (ps.length == "") {
        alert("Password field is empty");
        return false;
      }
    }
  }
  const onSignUPButtonClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

   
  return (
    <div className={styles.login}>
      <div className={styles.mainSection}>
        <img className={styles.downloader1Icon} alt="" src="../log-bg.png" />
        <div className={styles.mainContainer}>
          <div className={styles.mainContentContainer}>
            <div className={styles.loginForm}>
              <form className={styles.form} name="f1" action="http://127.0.0.1/Barter%20online/src/API/authentication.php" onSubmit={validation} method="POST" >
                <div className={styles.formTextTermsOfUsePriva}>
                  <div className={styles.login1}>Login</div>
                  <div
                    className={styles.getAccessTo}
                  >{`Get Access to your orders, Wishlist & Recommendations`}</div>
                </div>
                <div className={styles.formFields}>
                  <div className={styles.emailmobileNo}>
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
                  <div className={styles.emailmobileNo}>
                    <TextField
                      className={styles.input}
                      color="primary"
                      variant="outlined"
                      type="password"
                      label="Enter Password"
                      name="password"
                      id="password"
                      size="medium"
                      margin="none"
                    />
                  </div>
                  <div className={styles.formTextTermsOfUsePriva1}>
                    <div className={styles.byContinuingYouContainer}>
                      <span
                        className={styles.byContinuingYou}
                      >{`By Continuing, You agree to company `}</span>
                      <span
                        className={styles.termsOfUse}
                      >{`Terms of use & Privacy`}</span>
                    </div>
                  </div>
                  <button
                    className={styles.formLoginButton}
                    type="submit"
                    id="btn"
                    value="Login"
                  >
                    <div className={styles.submit}>Login</div>
                  </button>
                </div>
                <div className={styles.emailmobileNo}>
                  <div className={styles.or1}>OR</div>
                </div>
               
                <button
                  className={styles.signUpButton}
                  onClick={onSignUPButtonClick}
                >
                  <div
                    className={styles.submit1}
                  >{`New To BarterOnline? Create An Account `}</div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
