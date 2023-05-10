import { useState, useCallback } from "react";
import axios from 'axios';
import { TextField, FormControlLabel, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [mobile, setmobile] = useState('');
  const [address, setaddress] = useState('');
  const [province, setprovince] = useState('');
  const [zip, setzip] = useState('');
  // const [profilepic, setprofilepic] = useState('');

  [navigate];
  const handleSubmit = () => {
    if (name.length === 0) {
      alert("User Name has left Blank!");
    }
    else if (email.length === 0) {
      alert("Email has left Blank!");
    }
    else if (password.length === 0) {
      alert("Password has left Blank!");
    }
    else if (mobile.length === 0) {
      alert("Mobile no has left Blank!");
    }
    else if (address.length === 0) {
      alert("Address has left Blank!");
    }
    else if (province.length === 0) {
      alert("Province has left Blank!");
    }
    else if (zip.length === 0) {
      alert("Zip code has left Blank!");
    }
    else {
      const url = 'http://127.0.0.1/Barter%20online/src/API/signup.php';
      let fData = new FormData();
      fData.append('name', name);
      fData.append('email', email);
      fData.append('password', password);
      fData.append('mobile', mobile);
      fData.append('address', address);
      fData.append('province', province);
      fData.append('zip', zip);
      // fData.append('profilepic', profilepic);
      axios.post(url, fData).then(response => alert(response.data)).catch(error => alert(error));
    }
  }

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.signUp}>
      <div className={styles.mainSection}>
        <img className={styles.downloader1Icon} alt="" src="../log-bg.png" />
        <div className={styles.mainContainer}>
          <div className={styles.mainContentContainer}>
            <div className={styles.loginForm}>
              <form className={styles.form}>
                <div className={styles.signUp1}>
                  <div className={styles.signUp2}>Sign Up</div>
                  <div
                    className={styles.getAccessTo}
                  >{`Get Access to your orders, Wishlist & Recommendations`}</div>
                </div>
                <div className={styles.formFields}>
                  <div className={styles.name}>
                    <TextField
                      className={styles.input}
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Enter Full Name"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(e) => setname(e.target.value)} 
                      size="medium"
                      margin="none"
                      required
                    />
                  </div>
                  <div className={styles.name}>
                    <TextField
                      className={styles.input}
                      color="primary"
                      variant="outlined"
                      type="email"
                      label="Enter Email Address"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      size="medium"
                      margin="none"
                      
                    />
                  </div>
                  <div className={styles.name}>
                    <TextField
                      className={styles.input}
                      color="primary"
                      variant="outlined"
                      type="password"
                      label="Enter Password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      size="medium"
                      margin="none"
                      required
                    />
                  </div>
                  <div className={styles.name}>
                    <TextField
                      className={styles.input}
                      color="primary"
                      variant="outlined"
                      type="tel"
                      label="Enter Contact Number With Coutry Code"
                      name="mobile"
                      id="mobile"
                      value={mobile}
                      onChange={(e) => setmobile(e.target.value)}
                      size="medium"
                      margin="none"
                      required
                    />
                  </div>
                  <div className={styles.name}>
                    <TextField
                      className={styles.input}
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Enter Address"
                      name="address"
                      id="address"
                      value={address}
                      onChange={(e) => setaddress(e.target.value)}
                      size="medium"
                      margin="none"
                      required
                    />
                  </div>
                  <div className={styles.name}>
                    <TextField
                      className={styles.input}
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Enter Province"
                      name="province"
                      id="province"
                      value={province}
                      onChange={(e) => setprovince(e.target.value)} 
                      size="medium"
                      margin="none"
                      required
                    />
                  </div>
                  <div className={styles.name}>
                    <TextField
                      className={styles.input}
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Enter ZIP Code"
                      name="zip"
                      id="zip"
                      value={zip}
                      onChange={(e) => setzip(e.target.value)} 
                      size="medium"
                      margin="none"
                    />
                  </div>
                  {/* <div className={styles.name}>
                    Upload Profile Picture <br></br>
                    <input                   
                      className={styles.profilePicinput}                      
                      type="file"
                   />
                  </div> */}
                  <div className={styles.formTextTermsOfUsePriva}>
                    <FormControlLabel
                      label=""
                      control={<Checkbox color="primary" size="medium" />}
                    />
                  </div>
                  <button
                    className={styles.formSignButton}
                    type="button"
                    name="submit"
                    id="submit"
                    value="SEND"
                    onClick={handleSubmit}
                  >
                    <div className={styles.submit}>SIGN UP</div>
                  </button>
                </div>
                <div className={styles.name}>
                  <a
                    className={styles.alreadyHaveAn}
                    onClick={onAlreadyHaveAnClick}
                  >
                    Already have an account ? Log In Now
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
