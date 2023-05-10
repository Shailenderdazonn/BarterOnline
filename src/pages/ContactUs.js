import React from "react";
import { TextField } from "@mui/material";
import styles from "../components/FormPopup.module.css";

const ContactUs = () => {

    return (        
            <div className={styles.formPopupMain}>
                <form className={styles.form}>
                    <div className={styles.formText}>
                        <div className={styles.shareYourDetails}>Share your Details</div>
                        <div className={styles.suggestAdsThat}>
                            Suggest ads that you want to see and we will feature it in our
                            website.
                        </div>
                    </div>
                    <form className={styles.formFields}>

                        <input className={styles.ProductId} type="text" />
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

export default ContactUs;
