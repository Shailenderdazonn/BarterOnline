import React, { useState, useEffect } from 'react'
import styles from "./adblock.css";


const AdBlock = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1/Barter%20online/src/API/adblock.php")
            .then(res => res.json())
            .then(
                (result) => {
                    setItem(result);
                }
            )
    }, [])
    return (

        <div>
            {item.map(item => (
                <div className={styles.rectangleParent}>
                    <img
                        className={styles.frameChild}
                        alt=""
                        src={`http://127.0.0.1/Barter%20online/src/API/${item.file}`}
                    />

                    <div className={styles.frameGroup}>
                        <div className={styles.frameContainer}>
                            <div className={styles.frameDiv}>
                                <div className={styles.mobilePhoneParent}>
                                    <div className={styles.mobilePhone}>{item.category}</div>
                                    <div className={styles.albertaWrapper}>
                                        <div className={styles.alberta}>{item.location}</div>
                                    </div>
                                </div>
                                <b className={styles.iphone13Pro}>{item.title}</b>
                            </div>
                            <div className={styles.wrapper}>
                                <b className={styles.b}>{item.price}</b>
                            </div>
                        </div>
                        <div className={styles.lineParent}>
                            <div className={styles.frameItem} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AdBlock; 